import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  /**
   * MAP()
   */
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  fahrenheit = [-5, -3, -1, 0, 5, 7, 20, 30, 45, 90];
  constructor() {
    const numeroDobro = this.numeros.map((numero) => numero * 2);
    const celsius = this.fahrenheit.map((f) => {
      return Math.round(((f - 32) * 5) / 9);
    });

    /*
     * Console.Logs
     */

    console.group('Dobra valor de Array');
    console.table(numeroDobro);
    console.groupEnd();
    console.group('Converte Fahrenheit com Celsius');
    console.table(celsius);
    console.groupEnd();
  }

  ngOnInit(): void {}
}
