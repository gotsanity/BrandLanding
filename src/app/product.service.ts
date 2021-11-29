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

  private webUrl = "http://73.19.65.35:3500/api";

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

  // read all
  getAllPosts(): Observable<any[]> {
    console.log("get all posts fired");
    return this.http.get<any[]>(`${this.webUrl}/post`);
  }

  getTopPosts(num: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.webUrl}/post`).pipe(
      map((data: Post[]) => {
        data.forEach(item => {
          item.image = "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg";
        });
        return data;
      }),
      map(data => data.slice(0, num))
    );
  }

  // read one
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.webUrl}/post/${id}`);
  }

  // create

  createPost(body: Post): Observable<Post> {
    return this.http.post<Post>(`${this.webUrl}/post`, body);
  }

  // update
  patchPost(body: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.webUrl}/post`, body);
  }

  // delete
  deletePost(name: string): Observable<Post> {
    return this.http.delete<Post>(`${this.webUrl}/post/${name}`);
  }
}
