import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // variable to hold our form
  postForm: FormGroup = new FormGroup({});

  constructor(private post: ProductService) {
    this.initForm();
  }

  initForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl('title here'),
      body: new FormControl('body here')
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    console.log("Form Submission", this.postForm);
    let newPost = {
      title: this.postForm.value.title,
      body: this.postForm.value.body,
      id: 0,
      userId: 0,
      image: ""
    }

    this.post.createPost(newPost).subscribe(data => {
      console.log(data);
      this.initForm();
    });
  }

}
