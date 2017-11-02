import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import {homeComponent} from './home/home.component';
import { entrarComponent} from './entrar/entrar';
import { registarComponent } from './registrar/registo';
import { searchComponent } from './search/search';

import {WebService} from './laravel.service';
import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent, homeComponent,entrarComponent,registarComponent, searchComponent,FilterPipe,
  ],
  imports: [
    BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot(rootRouterConfig),
  ],
  providers: [ WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
