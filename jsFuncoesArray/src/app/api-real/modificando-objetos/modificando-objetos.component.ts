import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
/**
 * cell: "(845)-575-5614"
dob: {date: '1983-05-03T14:36:52.370Z', age: 39}
email: "romkje.vanhilten@example.com"
gender: "female"
id: {name: 'BSN', value: '50267099'}
location: {street: {…}, city: 'Woerden', state: 'Utrecht', country: 'Netherlands', postcode: 13982, …}
login: {uuid: 'cd9724fc-09b3-42c9-9f74-9ab1fd6a656c', username: 'crazymeercat696', password: 'jamesbon', salt: 'MUpkXMZ0', md5: '81c9c6aa1f66df825a81be43cf28f96e', …}
name: {title: 'Mrs', first: 'Romkje', last: 'Van Hilten'}
nat: "NL"
phone: "(836)-433-7523"
picture: {large: 'https://randomuser.me/api/portraits/women/93.jpg', medium: 'https://randomuser.me/api/portraits/med/women/93.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/93.jpg'}
registered: {date: '2003-09-21T21:22:53.075Z', age: 19}
 */
@Component({
  selector: 'app-modificando-objetos',
  templateUrl: './modificando-objetos.component.html',
})
export class ModificandoObjetosComponent implements OnInit {
  todasPessoas: any[] = [];
  todasPessoasFOR: any[] = [];
  pessoasModificadasForIn: any[] = [];
  pessoasModificadasForOf: any[] = [];
  pessoasModificadasReduceESpread: any[] = [];
  pessoasModificadasReduce: any[] = [];
  constructor(private apiService: ApiService) {
    /**
     * Usando o Reduce com spread
     */
    apiService
      .getPeople(10)
      .then((data: any) => {
        this.todasPessoas = data.results;
        this.pessoasModificadasReduceESpread = this.todasPessoas.reduce(
          (novo: any, item) => {
            return [
              ...novo,
              {
                name: `${item.name.first} ${item.name.last}`,
                gender: item.gender,
                cell: item.cell,
                address: {
                  street: `${item.location.street.name} ${item.location.street.number}`,
                  city: item.location.city,
                  state: item.location.state,
                  country: item.location.country,
                },
              },
            ];
          },
          []
        );
        /**
         * Usando Reduce somente
         */
        this.pessoasModificadasReduce = this.todasPessoas.reduce(
          (novo: any, item) => {
            novo.push({
              name: `${item.name.first} ${item.name.last}`,
              gender: item.gender,
              cell: item.cell,
              address: {
                street: `${item.location.street.name} ${item.location.street.number}`,
                city: item.location.city,
                state: item.location.state,
                country: item.location.country,
              },
            });
            return novo
          },
          []
        );
      })
      .finally(() =>
        console.log(
          'no Finally',
          this.todasPessoas,
          'No reduce com spread',
          this.pessoasModificadasReduceESpread,
          'No reduce',
          this.pessoasModificadasReduce
        )
      );
  }

  ngOnInit(): void {
    this.apiService.getPeople(10).then((data: any) => {
      for (const key in data.results) {
        if (Object.prototype.hasOwnProperty.call(data.results, key)) {
          this.todasPessoasFOR.push(data.results[key]);
        }
      }
      console.log('No For In', this.todasPessoasFOR);
    });
    /**
     * Modificando o Objeto no FOR_IN
     */
    this.apiService.getPeople(10).then((data: any) => {
      for (const key in data.results) {
        if (Object.prototype.hasOwnProperty.call(data.results, key)) {
          this.pessoasModificadasForIn.push({
            name: `${data.results[key].name.first} ${data.results[key].name.last}`,
            gender: data.results[key].gender,
            cell: data.results[key].cell,
            address: {
              street: `${data.results[key].location.street.name} ${data.results[key].location.street.number}`,
              city: data.results[key].location.city,
              state: data.results[key].location.state,
              country: data.results[key].location.country,
            },
          });
        }
      }
      console.log('pessoasModificadasForIn', this.pessoasModificadasForIn);
    });
    /**
     * Modificando o Objeto no FOR_OF
     */

    this.apiService.getPeople(10).then((data: any) => {
      for (const iterator of data.results) {
        this.pessoasModificadasForOf.push({
          name: `${iterator.name.first} ${iterator.name.last}`,
          gender: iterator.gender,
          cell: iterator.cell,
          address: {
            street: `${iterator.location.street.name} ${iterator.location.street.number}`,
            city: iterator.location.city,
            state: iterator.location.state,
            country: iterator.location.country,
          },
        });
      }
      console.log('pessoasModificadasForOf', this.pessoasModificadasForOf);
    });
  } //end NG
}
