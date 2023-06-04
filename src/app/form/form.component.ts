import { Component } from '@angular/core';
import { user } from '../data/define/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  model = new user('test', '123');

  submitted = false;

  constructor(private userService: UserService) { }

  onSubmit() { 
    this.submitted = true;
    this.userService.setUser(this.model);
  }

  newUser() {
    this.model = new user('test', '');
  }
}
