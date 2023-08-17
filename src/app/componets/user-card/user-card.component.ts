import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() miUser: User | any;
  usersServices = inject(UsersService);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  oneUser!: User | any;




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
          await this.usersServices.deleteOneUserList(id);
          swalWithBootstrapButtons.fire(
            '¡Borrado!',
            'El usuario ha sido borrado',
            'success'
          );
          this.router.navigate(['/home']);
        } catch (error) {
          console.log(error);
          Swal.fire('Error', 'Ha ocurrido un error en el borrado del usuario', 'error');
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
