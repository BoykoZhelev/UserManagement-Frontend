import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() personData: any = { id: '', firstName: '', lastName: '', email: '', birthDate : '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  createPerson() {

    // tslint:disable-next-line:triple-equals
    if (this.personData.birthDate != '' && this.personData.firstName != '' && this.personData.lastName != '' && this.personData.email != '') {
            this.rest.addPerson(this.personData).subscribe((result) => {
        this.router.navigate(['/persons']);
      }, (err) => {
        console.log(err);
      });
    }
  }


}
