import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fake-container',
  templateUrl: './fake-container.component.html',
  styleUrls: ['./fake-container.component.css']
})
export class FakeContainerComponent implements OnInit {
  manParam:number;
  constructor(private route: ActivatedRoute) {
    let paramUserId = this.route.snapshot.params['id']
    console.log(paramUserId)
    this.manParam = paramUserId
  }

  ngOnInit() {
  }

}
