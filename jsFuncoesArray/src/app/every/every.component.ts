import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
})
export class EveryComponent implements OnInit {
  /**
   * Every(), quando precismo saber se TODOS os elementos do ARRAY
   * passam por um deternimando teste. O Every retorna um BOOLEN, o Filter() retorna
   * um novo Array
   */

  todosMaioresde10 = [11, 88, 74, 91, 55, 22];
  contemMaioresde10 = [10, 11, 88, 74, 91, 55, 22, 5];
  turma = [
    { id: 12, name: 'Tony', age: 49 },
    { id: 47, name: 'juan', age: 14 },
    { id: 42, name: 'debora', age: 42 },
  ];

  constructor() {
    const eMaior = this.todosMaioresde10.every((numero) => numero > 10);
    const naoEMaior = this.contemMaioresde10.every((numero) => numero > 10);
    const podeTirarCarta = this.turma.every(item => item.id >= 18);

    /**
     * Every(), testa se algo é verdadeiro ou falso
     */
    console.group('Tudo é maior que 10');
    console.table(eMaior);
    console.table(naoEMaior);
    console.table(podeTirarCarta);
    console.groupEnd();
  }

  ngOnInit(): void {}
}
