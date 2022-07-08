 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Aula diretivas de atributo';
  count = 0;
  data = 'data binding da lógica (.ts) para template';
  text = '';
  pessoas = [
    {
      nome: "Anderson",
      sobrenome: "Zanelatto"
    },
    {
      nome: "Monise",
      sobrenome: "Minato"
    },
    {
      nome: "Dante",
      sobrenome: "Ledesma"
    },
  ];

  constructor(){

  }
  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  public clicou (nome: string): void {
    console.log('clicou em mim', nome);
  }
}
