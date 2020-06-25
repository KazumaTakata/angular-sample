import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export interface Post {
    id?: number;
    title: string;
    author: string;
}


@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private http: HttpClient) {}

  data = ["aa", "bb", "cc"];
  button_push$ = new Subject();

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>("posts/");
  }

  addData(post:Post): Observable<Post> {

    return this.http.post<Post>(
      "posts/",
      post,
      this.httpOptions
    );
  }
}
