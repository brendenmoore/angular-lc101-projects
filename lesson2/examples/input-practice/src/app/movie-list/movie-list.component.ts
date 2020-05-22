import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies = ["Toy Story", "The Shining", "Sleepless in Seattle", "The Martian"];
  error = {
    message: "",
    class: "",
  };

  constructor() {}

  ngOnInit() {}

  addMovie(newTitle: string) {
    if (this.movies.includes(newTitle)) {
      this.error.message = "Please pick a different movie!";
      this.error.class = "orange";
    } else if (newTitle === "") {
      this.error.message = "Please enter a title";
      this.error.class = "red";
    } else {
      this.movies.push(newTitle);
      this.error.message = "";
    }
  }
}
