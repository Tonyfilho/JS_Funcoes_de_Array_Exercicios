import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
/**
 * cell: "06-02-01-92-51"
dob: {date: '1989-10-26T01:12:09.500Z', age: 33}
email: "melina.barbier@example.com"
gender: "female"
id: {name: 'INSEE', value: '2NNaN35523243 64'}
location: {street: {…}, city: 'Boulogne-Billancourt', state: 'Ille-et-Vilaine', country: 'France', postcode: 26227, …}
login: {uuid: 'c09e6a27-2397-44ef-8f39-1dd046aa92d4', username: 'organicbutterfly884', password: 'charles1', salt: 'mKDp50V9', md5: 'ced13f2599c2507019051c637b3131f5', …}
name: {title: 'Mrs', first: 'Mélina', last: 'Barbier'}
nat: "FR"
phone: "02-66-51-82-55"
picture: {large: 'https://randomuser.me/api/portraits/women/28.jpg', medium: 'https://randomuser.me/api/portraits/med/women/28.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg'}
registered: {date: '2002-06-12T18:40:00.355Z', age: 20}
 */
@Component({
  selector: 'app-api-real',
  templateUrl: './api-real.component.html',
})
export class ApiRealComponent implements OnInit {
  localData: any[] = [];
  soMulheres: string[] = [];
  soHomens: string[] = [];
  todosPaisesUSA: string[] = [];
  maioresDe50: any[] = [];
  menoresDe30: any[] = [];
  maioresDe50Reduce: any[] = [];
  todosHomensReduce: any[] = [];
  todosMulheresReduce: any[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getPeople(10).then((data: any) => {
      this.localData = data.results;
      console.log(this.localData);
      //Bloco Mulheres e Homens
      this.soMulheres = this.localData.filter(
        (pessoa) => pessoa.gender == 'female'
      );
      this.soHomens = this.localData.filter((sexo) => sexo.gender == 'male');
      //Bloco Maiores e Menores de 18
      this.maioresDe50 = this.localData
        .map((obj: any) => obj.dob)
        .filter((idade) => idade.age >= 50);
      this.menoresDe30 = this.localData
        .map((obj) => obj.dob)
        .filter((idade) => idade.age < 30);
      //Reduce e MAP
      this.maioresDe50Reduce = this.localData.reduce(
        (novo, atual, index: number, localArray: any[]) => {
          localArray
            .map((obj: any) => obj.dob)
            .map((obj: any) => obj.age >= 50)[index]
            ? novo.push(atual)
            : null;
          return novo;
        },
        []
      );
      this.todosMulheresReduce = this.localData.reduce(
        (novoRetorno: any[], atual, index: number, arrayLocal: any[]) => {
          const isFemale = arrayLocal.map((obj) => obj.gender == 'female'); //Lembre-se que o retorno é um ARRAY de BOOLEAN; [true, false, false, false, false, false, true, false, false, true]
          isFemale[index] ? novoRetorno.push(atual) : null; // passamos o Index, pois isFemale é um array de boolean, caso não passe tudo será true, pois irá entender se o array existe ou não existe.
          return novoRetorno;
        },
        []
      );
      this.todosHomensReduce = this.localData.reduce(
        (novoRetorno: any, atual, index: number, arrayAtual: any[]) => {
          const isMale = arrayAtual.map((obj) => obj.gender == 'male');
           isMale[index] ? novoRetorno.push(atual) : null;
           return novoRetorno;
        },
        []
      );

      /**
       * Bloco de console.logs
       */
      console.group('Pessoas Filtradas');
      console.log(this.soMulheres);
      console.log(this.soHomens);
      console.groupEnd();
      console.group('Pessoas Filtradas Maiores e Menores de 50');
      console.log(this.maioresDe50);
      console.log(this.menoresDe30);
      console.groupEnd();
      console.group('TODOS os OBJETOS  Filtrados Usando REDUCE MAP ');     
      console.log('Todos Maiores de 50',this.maioresDe50Reduce);
      console.log('Todas Mulheres',this.todosMulheresReduce);
      console.log('Todos Homens',this.todosHomensReduce);
      console.groupEnd();
    });
  }

  ngOnInit(): void {}
}
