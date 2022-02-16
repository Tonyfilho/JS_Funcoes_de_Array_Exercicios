import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  /**
   * name
   */
};

public async getPeople(quantity: number): Promise<string> {
    const response = await fetch(`https://randomuser.me/api/?results=${quantity}`)

    return response.json()
  }

 
}
