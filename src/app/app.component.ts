import { Component } from '@angular/core';
import { GifAPIServiceService } from './services/gif-apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subtitle = 'GIF-search';
  gifs = [1,2,3,4,5,6,7,8,9,10];
  gifData:any[] = [];
  searchTerm = "";
  constructor(private API:GifAPIServiceService){
    this.getGIFs("dog");
    // default search value
  }
  performSearch(searchTerm: HTMLInputElement): void {
    this.searchTerm = searchTerm.value;
    console.log(`User entered: ${searchTerm.value}`);
    this.getGIFs(searchTerm.value);
}

getGIFs(searchTerm:string){this.API.getGIFs(searchTerm).subscribe(e => {
  this.gifData  = e['data'];
  console.log(this.gifData)
});
}
}

