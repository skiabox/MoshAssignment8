import { Component, OnInit } from '@angular/core';
import {FollowService} from '../../services/follow.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public followers: any[];

  constructor(private service: FollowService) { }

  public ngOnInit(): void {
    this.service.getAll()
      .subscribe((followers: any[]) => this.followers = followers);
  }

}
