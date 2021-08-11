import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  left: number = 0;
  bottom: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  onMission: boolean = false;
  
  takeOff(){
    this.onMission = true;
    if(confirm("Confirm that the shuttle is ready for take off.")){
      this.message = 'Shuttle in flight.';
      this.color = 'blue';
      this.bottom += 10;
    }
  }

  land(){
    if(this.onMission){
      alert("The shuttle is landing. Landing gear engaged.");
      this.message = 'The shuttle has landed.';
      this.color = 'green';
      this.bottom = 0;
      this.left = 0;
      this.onMission = false;
    }
  }

  abort(){
    if(confirm("Are you sure you wish to abort the mission?")){
      this.message = 'Mission aborted';
      this.color = 'red';
      this.bottom = 0;
      this.left = 0;
      this.onMission = false;
    }
  }

  moveDirection(direction: string){
    if(direction === 'up'){
      this.bottom += 10;
    }
    if(direction === 'down' && this.bottom !== 0 && this.bottom !== 330 ){
      this.bottom -= 10;
    }
    if(direction === 'right'){
      this.left += 10;
    }
    if(direction === 'left' && this.left !== 0 && this.left !== 460){
      this.left -= 10;
    }
    if(this.bottom > 300 || this.left > 440){
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
}
