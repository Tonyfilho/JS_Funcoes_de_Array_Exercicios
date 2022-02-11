import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
 
})
export class SomeComponent implements OnInit {
  numerosPares = [11, 88, 74, 91, 55, 22];
  numerosImpares = [9, 11, 89, 75, 91, 55, 21, 5];
  turma = [
    { id: 12, name: 'Tony', age: 49 },
    { id: 47, name: 'juan', age: 14 },
    { id: 42, name: 'debora', age: 42 },
  ];

  constructor() { 
    /**
     * Faremos a função para vermos se o numero é primo
     */

    const isHasPrimo = this.numerosPares.some(numero =>{
    return  numero % 2 == 0 ;
    });
    const isHasPrimo2 = this.numerosImpares.some(numero => {
      return numero % 2 == 0;
    });
    const temONome = this.turma.some(name => name.name == 'juan');
    const temMaiorDe50 = this.turma.some(idade => idade.age >= 50);
     /**
     * SOME(), testa se tem ALGUM dos item passam no teste da 
     * Função.
     */
      console.group('Some() Retorna se TRUE or FALSE, Neste Ex: se tem Numeros Primos');
      console.table(isHasPrimo);      
      console.table(isHasPrimo2);      
      console.groupEnd();
      console.group('Some() Retorna se TRUE or FALSE, Se existe   dentro do Array');
      console.table(temONome);    
      console.table(temMaiorDe50);    
      console.groupEnd();
  }

  ngOnInit(): void {
  }

}
