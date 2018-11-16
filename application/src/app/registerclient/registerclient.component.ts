import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-registerclient',
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.css']
})

export class RegisterclientComponent implements OnInit {

  registerUserData = {}


  constructor(private _listService: ListService) {
    
   }  

  ngOnInit() {     
    
  }

 
  registerUser(){
    //Chama o registerUser service, que pega o registerUserData    
    this._listService.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
