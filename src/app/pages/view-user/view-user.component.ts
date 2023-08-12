import { Component, inject, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

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


  async deleteUser(id: string): Promise<void> {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de eliminar al usuario?',
      text: "No podrás volver a recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await this.usersServices.delete(id);
          swalWithBootstrapButtons.fire(
            '¡Borrado!',
            'El usuario ha sido borrado',
            'success'
          );
          this.router.navigate(['/home']);
        } catch (error) {
          console.log(error);
          Swal.fire('Error', 'An error occurred while deleting the user.', 'error');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El usuario NO ha sido borrado ;)',
          'error'
        );
      }
    });
  }
}