import { Component, inject, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  

oneUser!: User | any;
activatedRoute = inject(ActivatedRoute)
usersServices = inject(UsersService)


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = String (params._iduser);
      

      this.oneUser = this.usersServices.getById(id).subscribe( (response) => {
        this.oneUser = response;
      
        
      } );


    })
  }

}
