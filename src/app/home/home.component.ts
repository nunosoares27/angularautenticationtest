import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../laravel.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class homeComponent {

    constructor(private webService: WebService, private route: Router){

        if(this.webService.getUsuario().nome === ''){
            this.route.navigateByUrl('login');
        }

  }


  
}
