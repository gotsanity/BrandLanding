import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() item = {
    name: "",
    image: "",
    text: ""
  }

  selectedIndex = null;

  constructor(private router: ActivatedRoute, private products: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = this.products.getProductByName(params.name);
    });
    
  }

}
