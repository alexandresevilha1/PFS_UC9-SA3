import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardprodutos',
  templateUrl: './cardprodutos.component.html',
  styleUrls: ['./cardprodutos.component.css']
})
export class CardprodutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function renderizar() {
  let produtos = document.getElementById("espaco-produtos")

  let listaProdutos = [
  {
      imagem:"/assets/img/produto.png" ,
      titulo:"Produto" ,
      preco:"R$ 000,00" ,
      descricao:"parcelado em x s/ juros"
  },
 
 
  ]
  let template = "";

  for (let index = 0; index < listaProdutos.length; index++) {
      const produto = listaProdutos[index];
  
  template += `<div class="cardprodutos">
  <img src="${produto.imagem}" alt="">
<h1>${produto.titulo}</h1>
<p>${produto.preco}</p>
<p1>${produto.descricao}</p1>

</div>`
      
  }
  
  
}