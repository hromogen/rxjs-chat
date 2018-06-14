import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
  })
export class UsersService {
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
};

export const usersServiceInjectables: Array<any> = [
    UsersService,
];