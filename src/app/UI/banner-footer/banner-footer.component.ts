import { Component, Input, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Banner} from '../../model/banner';

@Component({
  selector: 'dbf1-banner-footer',
  templateUrl: './banner-footer.component.html',
  styleUrls: ['./banner-footer.component.css']
})
export class BannerFooterComponent implements OnInit {
  @Input() banner: Banner;
  showAd = environment.adsense.show;
  cookieValue : string;
  showPubb: boolean;

  constructor(private cookieService: CookieService,) { }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('fantaf1_cookies');
    if (this.cookieValue === "confirm")
    {
      this.showPubb = true;
    }
    else
    {this.showPubb = false;}
  }

  ngAfterViewInit() {
    setTimeout(() => {
        try {
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
                overlays: {bottom: true}
            });
        } catch (e) {
            console.error(e);
        }
    }, 0);
}

}


