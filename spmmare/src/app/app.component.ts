import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articoli = new Array<string>();

  aggiungiArt(txt : HTMLInputElement, times : HTMLInputElement) : boolean{

    console.log(` testo: ${txt.value} and times: ${times.value}`);
    let cont = Number(times.value);
    for(let i:number = 0; i<cont; i++){
      this.articoli.push((i+1) + " "+txt.value);
    }

  return false
  }
}
