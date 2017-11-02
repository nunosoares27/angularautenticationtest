import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from './laravel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private webService: WebService, private route: Router){
  }

  private nomeUsuario = "";
  private emailUsuario = "";

  existeUsuario(){
    this.nomeUsuario = this.webService.getUsuario().nome;
    this.emailUsuario = this.webService.getUsuario().email;

    if(this.nomeUsuario != "" && this.emailUsuario != ""){
      return true;
    } else{
      return false;
    }

  }

  sair(){
    this.webService.setUsuario({nome: "", email: "", token: ""});
    this.route.navigateByUrl('login');
  }

}
