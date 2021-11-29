import { Post, ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: any[] = [];

  posts: Post[] = [];

  constructor(private products: ProductService) {
    this.products.nonObservableServiceCall();
  }

  ngOnInit() {
    this.data = this.products.getAll();

    this.products.getTopPosts(4).subscribe(data => {
      console.log("inside landing component", data);
      this.posts = data;
    });

    this.products.getPostById(4).subscribe(data => {
      console.log('subscribed to id 4: ', data);
    });
  }

  addNewItem() {
    let newPost: Post = {
      id: 99,
      title: 'foo',
      body: 'bar',
      userId: 1,
      image: "toast"
    };
    
    console.log("new post item", newPost);

    this.products.createPost(newPost).subscribe(data => {
      console.log("value returned", data);
    });

    
  }

}
