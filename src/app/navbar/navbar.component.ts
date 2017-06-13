import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private links;
  private brand;
  private image;
  constructor() { }

  ngOnInit() {
    this.brand = "FRECRE";
    this.image = "assets/img/frecre-logo.png";
    this.links = [
      {link: "HOME", ref: "", type: 1},
      {link: "PRODUCTS", ref: "/products", type: 1},
      {link: "BLOG", ref: "https://frecre-blog.firebaseapp.com", type: 2},
      {link: "CONTACT", ref: "/contact", type: 1}
    ]
  }

}
