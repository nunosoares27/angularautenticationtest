import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../laravel.service';

@Component({
  selector: 'registo',
  templateUrl: './registo.html',
  styleUrls: ['./registo.css']
})
export class registarComponent {
  constructor(private webService: WebService, private route: Router){
  }

  private cadastro = {nome: '', email: '', senha: ''};
  private msg = '';
   
   addCadastro(){
         var self = this;
         this.webService.cadastro(self.cadastro.nome, self.cadastro.email, self.cadastro.senha)
         .then(function(retorno){
            if(retorno.status){
              console.log(retorno.data);
              self.cadastro = {nome: '',email: '', senha:''};
              self.webService.setUsuario({nome: retorno.data.name, email: retorno.data.email, token: retorno.data.api_token});
              self.route.navigateByUrl('home');
            } else{
              console.log(retorno.data);
               self.msg = retorno.data;
            }
         });
      }

} 