import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUser: User[] = [];
  usersService = inject(UsersService);

  
  ngOnInit(): void {

    this.usersService.getAll()
    .then( (response) => {
      this.arrUser = response.results;
    })
    .catch( (error) => {
      console.log(error);
    })
  }
}
