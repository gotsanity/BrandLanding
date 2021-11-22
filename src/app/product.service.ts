import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Post {
  title: string,
  body: string,
  id: number,
  userId: number,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private webUrl = "https://jsonplaceholder.typicode.com";

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
    },
    {
      name: "Diet Cherry Coke",
      image: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    }
  ];

  constructor(private http: HttpClient) { }

  getProductByIndex(index: number): any {
    // error catching (out of bounds) needs implemented
    console.log('getProductByIndex called', index);
    return this.data[index];
  }

  getAll(): any[] {
    console.log('called getAll()', this.data);
    return this.data;
  }

  getProductByName(name: string): any {
    console.log('getting product by name: ', name);
    return this.data.filter(item => {
      return item.name == name;
    })[0];
  }

  addData(item: any) {
    this.data.push(item);
  }

  // private webUrl = "https://jsonplaceholder.typicode.com";

  // read all
  getAllPosts(): Observable<any[]> {
    console.log("get all posts fired");
    return this.http.get<any[]>(`${this.webUrl}/posts`);
  }

  getTopPosts(num: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.webUrl}/posts`).pipe(
      tap(item => {
        console.log("tapped item", item);
      }),
      map((data: Post[]) => {
        data.forEach(item => {
          item.image = "toast";
        });
        return data;
      })
    );
  }

  // read one
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.webUrl}/posts/${id}`);
  }

  // create
  // update
  // delete
}
