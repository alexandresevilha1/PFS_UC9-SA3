import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

$(document).ready(function(){
  $("#destaque").click(function(){
      $("#menuDestaques").toggleClass("ativado")
  })
})

$(document).ready(function(){
  $("#configuracoesHeader").click(function(){
      $("#menuConfiguracoes").toggleClass("ativado")
  })
})


