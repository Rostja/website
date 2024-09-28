import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
Gallery = { 
  title: "GALLERY",
  description: "Project images",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam! ",
  GalleryImages: [
    {id: 1, url: "../assets/images/gallery-images/gallery-image-1.jpg", caption: "Tree" },
    {id: 2, url: "../assets/images/gallery-images/gallery-image-2.jpg", caption: "Fingerprint" },
    {id: 3, url: "../assets/images/gallery-images/gallery-image-3.jpg", caption: "The man" },
    {id: 4, url: "../assets/images/gallery-images/gallery-image-4.jpg", caption: "Mustache" },
    {id: 5, url: "../assets/images/gallery-images/gallery-image-5.jpg", caption: "Moose" },
    {id: 6, url: "../assets/images/gallery-images/gallery-image-6.jpg", caption: "Justice" }

  ]
 }
}
