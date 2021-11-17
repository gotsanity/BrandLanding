import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: any[] = [];

  posts: any[] = [];

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.data = this.products.getAll();

    this.products.getAllPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });

    this.products.getPostById(4).subscribe(data => {
      console.log('subscribed to id 4: ', data);
    });
  }

  addNewItem() {
    this.products.addData({ name: "sprite", image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg", text: "some random text" });
  }

}
