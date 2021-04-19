import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { DynamicScriptLoaderService } from 'src/app/_services/dynamic-script-loader-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dbf1-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  banner: Banner;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
    this.banner = new Banner(
      environment.adsense.adClient,
      0,
      'auto',
      true
    )
  }

  ngOnInit(): void {

  }

}
