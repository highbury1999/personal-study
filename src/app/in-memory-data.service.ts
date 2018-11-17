import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' ,address:'123'},
      { id: 11, name: 'Mr. Nice' ,address:'123'},
      { id: 12, name: 'Narco' ,address:'123'},
      { id: 13, name: 'Bombasto' ,address:'123'},
      { id: 14, name: 'Celeritas' ,address:'123'},
      { id: 15, name: 'Magneta',address:'123' },
      { id: 16, name: 'RubberMan' ,address:'123'},
      { id: 17, name: 'Dynama',address:'123' },
      { id: 18, name: 'Dr IQ' ,address:'123'},
      { id: 19, name: 'Magma',address:'123' },
      { id: 20, name: 'Tornado' ,address:'123'},
      { id: 21, name: 'Tornado' ,address:'123'},
      { id: 22, name: 'Tornado' ,address:'123'},

    ];
    return {heroes};
  }
}
