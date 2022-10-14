import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private service: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.service.getToken(),
      username: this.service.getUsername(),
      authorities: this.service.getAuthorities()
    };
  }

}
