import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fake2',
  templateUrl: './fake2.component.html',
  styleUrls: ['./fake2.component.css']
})
export class Fake2Component implements OnInit {
  fake2Param:number;
  constructor(private route: ActivatedRoute) {
    let paramUserId = this.route.snapshot.params['id']
    this.fake2Param = paramUserId
  }

  ngOnInit() {
  }

}
