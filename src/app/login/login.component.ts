import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Router 
//dependency Injection 
//Router is dependency

  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
   username = "MedaPrashanthKumar";
   password = "dummy";
   invalidLogin =false;
   errorMessage ="Invalid Credentails";
   

   
   handleLogin(){
    
    // if(this.username==="MedaPrashanthKumar" && this.password==="dummy")
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {
      //reDirectto welcome page
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
   }
}
