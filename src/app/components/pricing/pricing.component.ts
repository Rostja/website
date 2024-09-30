import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  pricing!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);
  
  constructor() {
    // this.pricing = this.configService.getPageByName("pricing");
    this.configService.getPageById(5).subscribe((configItem: ConfigItem) => {
      this.pricing = configItem;
    });
    console.log(this.pricing);
  }
}
