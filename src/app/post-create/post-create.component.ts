import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private post: ProductService) { }

  data = {
    title: "test",
    body: ""
  };

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.data);
  }

}
