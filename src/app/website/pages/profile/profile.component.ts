import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | null = null;

  constructor(private as: AuthService) { }

  ngOnInit(): void {
    this.as.currentUser$
      .subscribe(profile => this.user = profile);
  }

}
