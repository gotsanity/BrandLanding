import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data = {
    name: "",
    image: "",
    text: ""
  };

  @Input() name: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private products: ProductService
  ) {

  }

  ngOnInit() {
    if (this.name != "") {
      this.data = this.products.getProductByName(this.name);
    }
  }

  goToProduct() {
    this.router.navigateByUrl(`/products/${this.data.name}`);
  }

}
