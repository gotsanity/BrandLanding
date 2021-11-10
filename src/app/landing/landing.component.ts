import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: any[] = [];

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.data = this.products.getAll();
  }

  addNewItem() {
    this.products.addData({ name: "sprite", image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg", text: "some random text" });
  }

}
