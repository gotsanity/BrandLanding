import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() data = {
    body: "",
    id: 0,
    title: "",
    userId: 0
  }

  selectedIndex = null;

  constructor(private router: ActivatedRoute, private products: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.products.getPostById(params['id']).subscribe(data => {
        this.data = data;
      });
    });
    
  }

}
