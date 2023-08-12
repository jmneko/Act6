import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() miUser: User | any;
  usersServices = inject(UsersService);
  router = inject(Router)
  oneUser!: User | any;


  async deleteUser(id: any): Promise <void> {

    alert('¿De verdad quieres borrar este usuario?')
    let response = await this.usersServices.deleteOneUserList(id);
    if(response){
      this.router.navigate(['/home']);
    }
  }

}
