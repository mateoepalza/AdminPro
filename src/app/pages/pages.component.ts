import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// We tell angular that this function is a global function in vanilla javascript
declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
