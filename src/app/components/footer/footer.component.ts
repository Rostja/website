import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
footer = {
  title: "Made with love by",
  url: "https://www.shapingrain.com",
  developer: "ShapingRain",
  socialMedias: [
    {id: 1, title: "Facebook", url: "https://www.facebook.com/username", iconImage: "fa-facebook", icon: "Facebook" },
    {id: 2, title: "Google+", url: "http://google.com/+username", iconImage: "fa-google-plus", icon: "Google+" },
    {id: 3, title: "Twitter", url: "http://www.twitter.com/username", iconImage: "fa-twitter", icon: "Twitter" },
    {id: 4, title: "Instagram", url: "http://www.instagram.com/username", iconImage: "fa-instagram", icon: "Instagram" },
    {id: 5, title: "Behance", url: "http://www.behance.net", iconImage: "fa-behance", icon: "Behance" }
  ]    
}
}
