import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private data: any[] = [
    {
      name: "Coke",
      image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      name: "Coke Zero",
      image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
      name: "Cherry Coke",
      image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    }
  ];

  constructor() { }

  getProductByIndex(index: number): any {
    // error catching (out of bounds) needs implemented
    
    return this.data[index];
  }

}
