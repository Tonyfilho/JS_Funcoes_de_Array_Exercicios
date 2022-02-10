import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
})
export class ReduceComponent implements OnInit {
  /**
   * Reduce()
   */
  rockets = [
    { country: 'russia', launches: 32 },
    { country: 'us', launches: 23 },
    { country: 'china', launches: 16 },
    {country: 'europe', launches: 7},
    {country: 'india', launches: 4},
    {country: 'japan', launches: 3}
  ];
  constructor() {
    const lancamentos = this.rockets.reduce((acc, array) => {
    return  acc  = acc + array.launches;
      
    }, 0);

    console.group('Usando Reduce para somar um valor de um OBJETO, total de Lançamento é :');
    console.table(lancamentos);
    console.groupEnd();
  }

  ngOnInit(): void {}
}
