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

  // data: any[] = [
  //   {
  //     name: "Coke",
  //     image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
  //     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
  //   },
  //   {
  //     name: "Coke Zero",
  //     image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
  //     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
  //   },
  //   {
  //     name: "Cherry Coke",
  //     image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
  //     text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
  //   }
  // ];

  constructor(private router: ActivatedRoute, private products: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.item = this.products.getProductByIndex(params.index);
    });
    
  }

}
