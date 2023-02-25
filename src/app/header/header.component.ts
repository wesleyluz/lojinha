import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(
    private routes:Router,
    public carrinhoService: CarrinhoService
  ){}
  
  mainPage(){
    this.routes.navigate([""]);
  }

}
