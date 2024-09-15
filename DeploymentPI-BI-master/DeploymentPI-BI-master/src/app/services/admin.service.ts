import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
private userRole: string = ''; // Initialize with an empty string
private userRoleSubject = new BehaviorSubject<string>(this.userRole);
userRole$ = this.userRoleSubject.asObservable();

constructor() { }

setUserRole(role: string) {
  this.userRole = role;
  this.userRoleSubject.next(this.userRole);
}

getUserRole(): string {
  return this.userRole;
}

}
