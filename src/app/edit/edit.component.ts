import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() personData: any = { id: '', firstName: '', lastName: '', email: '', birthDate : '' };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getPerson(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.personData = data;
    });
  }

  updatePerson() {
    // tslint:disable-next-line:triple-equals max-line-length
    if (this.personData.birthDate != '' && this.personData.firstName != '' && this.personData.lastName != '' && this.personData.email != '') {
      this.rest.updatePerson(this.route.snapshot.params.id, this.personData).subscribe((result) => {
        this.router.navigate(['/persons']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
