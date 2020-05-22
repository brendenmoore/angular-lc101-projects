import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";

  takeOffEnabled = true;

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight";
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "Shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to aport the mission?");
    if (result) {
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  atEdge(coords: number[]) {
    return (
      coords[0] < -10 || coords[0] > 300 || coords[1] < -10 || coords[1] > 400
    );
  }

  getCoords(direction: string) {
    let coords: number[] = [this.height / 1000, this.width / 1000];
    switch (direction) {
      case "right":
        coords[1] += 10;
        break;
      case "left":
        coords[1] -= 10;
        break;
      case "up":
        coords[0] += 10;
        break;
      case "down":
        coords[0] -= 10;
        break;
    }
    return coords;
  }

  moveRocket(rocketImage, direction: string) {
    console.log(rocketImage.style.bottom);
    let newCoords = this.getCoords(direction);
    if (this.atEdge(newCoords)) {
      this.color = "orange";
    } else {
      this.height = newCoords[0] * 1000;
      this.width = newCoords[1] * 1000;
      rocketImage.style.bottom = newCoords[0] + "px";
      rocketImage.style.left = newCoords[1] + "px";
      this.color = "blue";
    }
  }
}
