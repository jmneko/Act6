import { Component, inject, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  

  oneUser!: User | any;
  activatedRoute = inject(ActivatedRoute);
  usersServices = inject(UsersService);
  router = inject(Router);


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {

      let id = String (params._iduser);
      this.oneUser = this.usersServices.getById(id).subscribe( (response) => {
        this.oneUser = response;
        
      });
    })
  }

  async deleteUser(id: string): Promise <void> {

    alert('¿De verdad quieres borrar este usuario?')
    let response = await this.usersServices.delete(id);
    if(response){
      this.router.navigate(['/home']);
    }
  }

}
