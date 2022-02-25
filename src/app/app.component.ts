import { Component,Inject } from '@angular/core';
import { DownloadService } from './download.service'
import { Download } from './download'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { DOCUMENT } from '@angular/common'
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-static-app-angular'; 
  slides =  {name: 'Mobile Cross-Platform from a Progressive Perspective', url: 'https://nils-mehlhorn.de/slides/mobile_cp_progessive_mehlhorn_pottjs.pdf'};

  //slides =  {name: 'Mobile Cross-Platform from a Progressive Perspective', url: 'https://dnmgtemsscus24e.blob.core.windows.net/dnpublicationscus/opman/CS%206040%20Standard%20Operator%20Manual%2001750262254%20A.pdf?sp=r&st=2022-01-28T16:13:17Z&se=2026-01-29T00:13:17Z&spr=https&sv=2020-08-04&sr=b&sig=CJuP5j4GP1jY%2B8Lrzkd7b79hu7w3xgHvlXGE2Y1Lb6I%3D'}
  slides2 =  {name: 'Mobile Cross-Platform from a Progressive Perspective', url: 'https://dnmgtemsscus24e.blob.core.windows.net/dnpublicationscus/opman/CS%206040%20Standard%20Operator%20Manual%2001750262254%20A.pdf?sp=r&st=2022-01-28T16:13:17Z&se=2026-01-29T00:13:17Z&spr=https&sv=2020-08-04&sr=b&sig=CJuP5j4GP1jY%2B8Lrzkd7b79hu7w3xgHvlXGE2Y1Lb6I%3D'};


  download$!: Observable<Download>;

  constructor(private downloads: DownloadService,
    @Inject(DOCUMENT) private document: Document) {
      
    }

download({name, url}: {name: string, url: string}) {
this.download$ = this.downloads.download(url, name)
}
	 
}
