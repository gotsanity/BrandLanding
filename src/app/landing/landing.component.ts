import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: any[] = [
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

  ngOnInit() {
  }

}
