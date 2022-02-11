import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-includes',
  templateUrl: './includes.component.html',
})
export class IncludesComponent implements OnInit {
  numerosPares = [11, 88, 74, 91, 55, 22];
  numerosImpares = [9, 11, 89, 75, 91, 55, 21, 5];
  turma = [
    { id: 12, name: 'Tony', age: 49 },
    { id: 47, name: 'juan', age: 14 },
    { id: 42, name: 'debora', age: 42 },
    { id: 4, name: 'deb', age: 4 },
  ];
  pizzas: string[] = ['mussarela', 'calabresa', 'portuguesa', 'marguerita'];

  constructor() {
    /**
     * Includes(), o Includes é usando para saber se um ARRAY ou ELEMENTO tem um
     * determinado valor, e ele retorna  um boolean  e não o item.
     */

    const temMussarela = this.pizzas.includes('mussarela');
    /**
     * Neste Exemplo usaremos o FILTER e o INCLUDE para buscar os nome começados
     * por 'de', onde teremos o retorno  de 2 reultados
     */
    const nomeDe = this.turma.filter((p) => p.name.includes('de'));
    console.group('FIND() retorna o 1 item  dentro do Array q foi achado');
    console.table(temMussarela);
    console.groupEnd();
    console.group('FIND() e INCLUDES() como Mecanismo de BUSCA, o retorno será 2 Objetos');    
    console.table(nomeDe);
    console.groupEnd();
  }
  ngOnInit(): void {}
}
