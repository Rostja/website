import { Injectable } from '@angular/core';
import { ConfigItem } from './config-item';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of, filter } from 'rxjs';

const httpOptions = {
  'headers' : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl = "http://localhost:3000/configuration";

configuration : ConfigItem[] = [
  {id: 1,
   name:"about", 
      data : {
        title: "SUCCESS",
        description: "How We Help You To Sell Your Product",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        buttontext: "START CREATING TODAY",
        Iconblocks: [
          { id: 1, icon: "fa-html5", title: "HTML5 &amp; CSS3", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum" },
          { id: 2, icon: "fa-bolt", title: "Easy to Use", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum" },
          { id: 3, icon: "fa-tablet", title: "Fully Responsive", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum" },
          { id: 4, icon: "fa-rocket", title: "Parallax Effect", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro\nnemore vivendum" }
        ],
        socialMedias: []
      }
  },
  {id:2,
  name:"clients",
      data: {
        title: "TRUST",
        description: "Companies who use our services",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        companyBlocks: [
          { id: 1, Image: "../assets/images/company-images/company-logo1.png", name: "Tree" },
          { id: 2, Image: "../assets/images/company-images/company-logo2.png", name: "Fingerprint" },
          { id: 3, Image: "../assets/images/company-images/company-logo3.png", name: "The Man" },
          { id: 4, Image: "../assets/images/company-images/company-logo4.png", name: "Mustache" },
          { id: 5, Image: "../assets/images/company-images/company-logo5.png", name: "Moose" },
          { id: 6, Image: "../assets/images/company-images/company-logo6.png", name: "Justice" },
          { id: 7, Image: "../assets/images/company-images/company-logo7.png", name: "Ball" },
          { id: 8, Image: "../assets/images/company-images/company-logo8.png", name: "Cold" },
          { id: 9, Image: "../assets/images/company-images/company-logo9.png", name: "Apple" },
        ],
        socialMedias: []
      }
  },
  {id:3,
  name:"gallery",
      data: {
        title: "Gallery",
        description: "Project images",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        galleryBlocks: [
          { id: 1, url: "../assets/images/gallery-images/gallery-image-1.jpg", name: "Tree" },
          { id: 2, url: "../assets/images/gallery-images/gallery-image-2.jpg", name: "Fingerprint" },
          { id: 3, url: "../assets/images/gallery-images/gallery-image-3.jpg", name: "The Man" },
          { id: 4, url: "../assets/images/gallery-images/gallery-image-4.jpg", name: "Mustache" },
          { id: 5, url: "../assets/images/gallery-images/gallery-image-5.jpg", name: "Moose" },
          { id: 6, url: "../assets/images/gallery-images/gallery-image-6.jpg", name: "Justice" },
        ],
        socialMedias: []
      }
  },
  {id:4,
  name:"header",  
      data: {
        title: "A FREE AND SIMPLE LANDING PAGE",
        description: "A FREE AND SIMPLE LANDING PAGE",
        url: "Namari is a free landing page template you can use for your projects. It is free to use for your\npersonal and commercial projects enjoy!",
        buttontext: "START CREATING TODAY",
        socialMedias: []
      }
  },
  {id:5,
  name:"pricing",
      data: {
        title: "YOUR CHOICE",
        description: "We have the right package for you",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
        pricingBlocks: [
          {
            id: 1,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            title: "PERSONAL",
            subTitle: "The standard version",
            currency: "₹",
            price: 19,
            featured: false,
            Downloads: "5 Downloads",
            Extensions: "2 Extensions",
            Tutorials: "Tutorials",
            Support: "Forum Support",
            updates: "1 year free updates",
            buttontext: "BUY NOW"
          },
          {
            id: 2,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            title: "STUDENT",
            subTitle: "Most popular choice",
            currency: "₹",
            price: 29,
            featured: true,
            Downloads: "15 Downloads",
            Extensions: "5 Extensions",
            Tutorials: "Tutorials with Files",
            Support: "Forum Support",
            updates: "2 years free updates",
            buttontext: "BUY NOW"
          },
          {
            id: 3,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            title: "BUSINESS",
            subTitle: "For the whole team",
            currency: "₹",
            price: 49,
            featured: false,
            Downloads: "Unlimited Downloads",
            Extensions: "Unlimited Extensions",
            Tutorials: "HD Video Tutorials",
            Support: "Chat Support",
            updates: "Lifetime free updates",
            buttontext: "BUY NOW"
          },
        ],
        socialMedias: []
      }
  },
  {id:6,
  name:"services",  
      data:{
        title: 'BELIEVING',
        description: 'Focusing On What Matters Most',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        socialMedias: []
      }
  },
  {id:7,
  name:"testimonials",
  data: {
    title: 'FEEDBACK',
    description: 'What our customers are saying',
    detail: '',
    feedbacks: [
      { id: 1, name: 'John Doe', userimage: '../assets/images/user-images/user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: "TESCO" },
      { id: 2, name: 'Roslyn Doe', userimage: '../assets/images/user-images/user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: "BMW" },
      { id: 3, name: 'Thomas Doe', userimage: '../assets/images/user-images/user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: "IKEA" }
    ],
    socialMedias: []
  }
  },
  {id:8,
  name:"footer",
      data: {
        title: "Made with love by",
        url: "https://www.shapingrain.com",
        developer: "ShapingRain",
        socialMedias: []
      }
  },
  {id:9,
      name:"social",
      data:{ 
      title:"socialicons",
      socialMedias: [ 
          {id:1,
          title:"Facebook",
          target:"_blank",
          username:"admister",
          url:"https://www.facebook.com/",
          iconImage:"fa-facebook",
          icon:"facebook",
        },
        {id:2,
          title:"Behance",
          target:"_blank",
          username:"admister",
          url:"http://www.behance.net/",
          iconImage:"fa-behance",
          icon:"behance",
        },
        {id:3,
          title:"twitter",
          target:"_blank",
          username:"admister",
          url:"http://www.x.com/",
          iconImage:"fa-twitter",
          icon:"twitter",
        },
        {id:4,
          title:"Instagram",
          target:"_blank",
          username:"admister",
          url:"http://www.instagram.com/",
          iconImage:"fa-instagram",
          icon:"instagram",
        },
        {id:5,
          title:"Google+",
          target:"_blank",
          username:"admister",
          url:"http://google.com/+",
          iconImage:"fa-google-plus",
          icon:"google-plus",
        },
      ]
    }
  }
];

  constructor(private http: HttpClient) { }

  /**
   * A function to handle HTTP errors and log them to the console.
   *
   * @template T - The type of the result expected from the operation.
   *
   * @param operation - The name of the operation being performed. Default value is 'operation'.
   * @param result - The default result to return in case of an error.
   *
   * @returns A function that takes an error as input and returns an Observable of type T.
   *          If an error occurs, it logs the error to the console and returns the provided result.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /**
   * Retrieves all the configuration pages from the API.
   *
   * @returns An Observable of type ConfigItem[] representing the configuration pages.
   *          If an error occurs during the HTTP request, it will return an empty array.
   */
  getAllPages(): Observable<ConfigItem[]> {
    // return this.configuration;
    return this.http.get<ConfigItem[]>(this.apiUrl) ?? {};
  }
  getPageById(id: number): Observable<ConfigItem> {
    // return this.configuration;
    return this.http.get<ConfigItem>(`${this.apiUrl}/${id}`) ?? {};
  }

  /**
   * Retrieves a specific configuration page by its name from the API.
   *
   * @param pageName - The name of the configuration page to retrieve.
   *
   * @returns An Observable of type ConfigItem representing the requested configuration page.
   *          If the page is not found, the Observable will complete without emitting a value.
   *          If an error occurs during the HTTP request, it will return an error notification.
   */
  getPageByName(pageName: string): Observable<ConfigItem> {
    // return this.configuration.find((configItem) => configItem.name === pageName);
    return this.http.get<ConfigItem>(this.apiUrl).pipe(
      filter((configItem) => configItem.name === pageName),
    )
  }
}
