import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
})
export class FindComponent implements OnInit {
  numerosPares = [11, 88, 74, 91, 55, 22];
  numerosImpares = [9, 11, 89, 75, 91, 55, 21, 5];
  turma = [
    { id: 12, name: 'Tony', age: 49 },
    { id: 47, name: 'juan', age: 14 },
    { id: 42, name: 'debora', age: 42 },
  ];
  pizzas: string[] = ['mussarela', 'calabresa', 'portuguesa', 'marguerita'];

  constructor() {
    /**
     * Find(), o Find retorna o 1º item verdadeiro, ou 1º item
     */

    const comecaComLetra = this.pizzas.find(pizza => pizza.startsWith('p'));
    const nomeDebora = this.turma.find(nome => nome.name == 'debora');
    console.group('FIND() retorna o 1 item  dentro do Array q foi achado');
    console.table(comecaComLetra);
    console.table(nomeDebora);
    console.groupEnd();
  }
  ngOnInit(): void {}
}
