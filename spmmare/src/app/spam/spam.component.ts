import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent implements OnInit {

  @Input () spammone = String;

  constructor() { }

  ngOnInit() {
  }

}
