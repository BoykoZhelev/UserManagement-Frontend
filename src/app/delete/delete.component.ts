import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() personData: any = { id: '', firstName: '', lastName: '', email: '', birthDate : '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getPerson(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.personData = data;
      let aux = this.personData.split(/[- :]/);
      let vDate = new Date(aux[0], aux[1], aux[2]);
      this.personData.birthDate = vDate;
      console.log(this.personData);
    });
  }

  deletePerson() {
    this.rest.deletePerson(this.route.snapshot.params.id).subscribe((result) => {
      this.router.navigate(['/persons']);
    }, (err) => {
      console.log(err);
    });
  }
}
