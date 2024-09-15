import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form:any={}
constructor(private router: Router, private adminService: AdminService) {}

OnSubmit() {
  const { email, password } = this.form;

   if (email === "fournisseur" && password === "fournisseur") {    
    this.adminService.setUserRole("fournisseur");
    this.router.navigate(['overview']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()

  } else if (email === "client" && password === "client") {
    this.adminService.setUserRole("client");
    this.router.navigate(['overview']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  }
  else if (email === "manager" && password === "manager") {
    this.adminService.setUserRole("manager");
    this.router.navigate(['overview']);
    console.log(this.adminService.getUserRole());
    this.adminService.getUserRole()
  }
}
}
