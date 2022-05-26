import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) {

  }
  welcomeMessageFromService = String ;
  errorMessageFromService = String;
  message = "Some welcome Message";
  name = "";
  ngOnInit(): void {
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getwelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
       error => this.handleErrorResponse(error),
      //response => console.log(response.message)
    );
    console.log('last line of getwelcomeMessage');//Asynchronous Call 
     //console.log("Get Welcome Message");
  }

  getwelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
       //error => this.handleErrorResponse(error),
      //response => console.log(response.message)
    );
    console.log('last line of getwelcomeMessage');//Asynchronous Call 
     //console.log("Get Welcome Message");
  }

  handleSuccessfulResponse(response:any){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error:any){
    //console.log(error);
    // console.log(error.error);
    // console.log(error.error.message)
      this.errorMessageFromService = error.message ;
  }
}

