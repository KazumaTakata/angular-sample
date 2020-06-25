import { Component, OnInit } from "@angular/core";
import { HeroService, Post } from "../hero.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  message = "hello world";

  heroes: Post[];

  form = new FormGroup({
    title: new FormControl(""),
    author: new FormControl("")
  });

  title_value: string;
  author_value: string;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getPosts();
    this.form.valueChanges.subscribe(val => {
      this.title_value = val.title;
      this.author_value = val.author
    });
  }

  onClick(): void {
    console.log("clicked");
    let post: Post = { title: this.title_value, author: this.author_value };
    this.heroService.addData(post).subscribe(data => {
      console.log(data);
    });
    this.getPosts();
  }

  getPosts(): void {
    this.heroService.getData().subscribe(data => {
      this.heroes = data;
    });
  }
}
