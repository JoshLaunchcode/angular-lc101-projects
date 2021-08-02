import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg';
  image3 = 'https://wallpapercave.com/wp/wp2551790.jpg';

  constructor() { }

  ngOnInit() {
  }

}