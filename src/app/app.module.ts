import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';

const appRoutes: Routes = [
  {
    path: 'persons',
    component: PersonsComponent,
    data: { title: 'Persons List' }
  },
  {
    path: 'details/:id',
    component: EditComponent,
    data: { title: 'Person Details' }
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
    data: { title: 'Person  delete' }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { title: 'Person  create' }
  },
  { path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
