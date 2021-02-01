import { ApiService } from './../api.service';
import { Person } from './../pojos/Person';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
persons:Person[]=[];
/* {
  "name":"Ahmed"
},
{
  "name":"Ahmed"
},{
  "name":"Ahmed"
} */
  constructor(private service:ApiService ) {}

  ngOnInit(): void {
    this.getAllPersons();
  }
  getAllPersons() {
    this.service.gerAllPersons().subscribe(

      res=> {this.persons=res;},
      err=>{alert("erroe");}
    );
    throw new Error('Method not implemented.');
  }

}
