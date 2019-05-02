import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.persons = [];
    this.rest.getPersons().subscribe((data: {}) => {
      console.log(data);
      this.persons = data;
    });
  }

  // add() {
  //   this.router.navigate(['/product-add']);
  // }

  // delete(id) {
  //   this.rest.deleteProduct(id)
  //     .subscribe(res => {
  //         this.getProducts();
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

}
