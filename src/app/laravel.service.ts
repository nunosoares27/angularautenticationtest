import { Injectable } from '@angular/core';
import { Headers, Http  } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class WebService{
    private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    private urlCadastro = 'http://cadastronoteapp.dev/api/cadastro';
    private urlLogin='http://cadastronoteapp.dev/api/login';

    constructor(private http:Http){

    }

      cadastro(name: string, email: string, password: string){
            return this.http
            .post(this.urlCadastro,'name='+name+'&email='+email+'&password='+password, {headers: this.headers})
            .toPromise().then(res=>res.json());   
        }

          login(email: string, password: string){
            return this.http
            .post(this.urlLogin,'email='+email+'&password='+password, {headers: this.headers})
            .toPromise().then(res=>res.json());   
        }

        setUsuario(usuario){
            window.sessionStorage.setItem('usuarioNome', usuario.nome);
            window.sessionStorage.setItem('usuarioEmail', usuario.email);
            window.sessionStorage.setItem('usuarioToken', usuario.token);

        };

        getUsuario(){
            return {
                nome: window.sessionStorage.getItem('usuarioNome'),
                email: window.sessionStorage.getItem('usuarioEmail'),
                token: window.sessionStorage.getItem('usuarioToken')
            };
        }


}
