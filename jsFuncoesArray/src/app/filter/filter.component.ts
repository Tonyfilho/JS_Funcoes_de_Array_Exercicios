import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  /**
   * Filter()
   */
  numerosduplicados = [1, 2, 3, 2, 5, 6, 5, 8, 7, 8, 9, 5, 41, 14, 41, 3, 5, 6];
  constructor() {
    const removendoNumerosDuplicado = this.numerosduplicados.filter(
      (item, index, array) => {
        return array.indexOf(item) == index;
      }
    );

    /**
     * Bloco do console.Log
     */
     console.group('Filter() e IndexOF() para remover Itens duplicados');
    console.table(removendoNumerosDuplicado);
    console.groupEnd();
  }

  ngOnInit(): void {}
}
