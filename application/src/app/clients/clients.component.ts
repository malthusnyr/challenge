import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  list = []

  constructor(private _listService: ListService) { }

  ngOnInit() {
    this._listService.getList()
    .subscribe(
      res => this.list = res,
      err => console.log(err)
    )
  }

}
