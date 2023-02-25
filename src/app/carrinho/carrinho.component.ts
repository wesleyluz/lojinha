import { Component,OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itensCarrinho: IProdutoCarrinho [] = [];
  total = 0;

  constructor(
    public carrinhoService:CarrinhoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calculaTotal();
  }
  
  calculaTotal()
  {
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade),0);
  }

  removerProdutoCarrinho(idProduto:number)
  {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id != idProduto);
    this.carrinhoService.removerProdutoCarrinho(idProduto);
    this.calculaTotal();
  }

  comprar(){
    alert("Compra concluida com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }
}
