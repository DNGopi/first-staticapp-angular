import { Component, OnInit } from '@angular/core';
import {FilterPipe} from '../myfliter.pipe'



@Component({
  selector: 'app-emsapicall',
  templateUrl: './emsapicall.component.html',
  styleUrls: ['./emsapicall.component.css']
})

export class EmsapicallComponent implements OnInit {

  term: string = '';

  name:string;
  people: Array<any>;
  peopleFilter: any;

  constructor() {
    this.name = 'Angular2';
    
    this.people = [
      {name: 'John', age: 27, sex: 'male'},
      {name: 'Lara', age: 21, sex: 'female'},
      {name: 'Rick', age: 29, sex: 'male'},
      {name: 'Eva',  age: 27, sex: 'female'},
      {name: 'Mike', age: 27, sex: 'male'}
    ];
    
    this.peopleFilter = {age: 27, sex: 'male'};
  }

  
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ];






  ngOnInit(): void { 
  
}



}