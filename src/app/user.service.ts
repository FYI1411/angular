import { Injectable } from '@angular/core';
import { user } from './data/define/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  User: user | undefined
  
  getUser() {
    return this.User;
  }

  setUser(user_login: user) {
    this.User = user_login;
  }
}