import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userForm: FormGroup;
  usersService = inject(UsersService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  oneUser!: User | any;

  constructor() {

    this.userForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),

      image: new FormControl("", [
        Validators.required,
      ]),

      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]\w{3,14}$/)
      ])

    }, []);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {

      let id = String (params._iduser);
    
      this.oneUser = this.usersService.getById(id).subscribe( (response) => {
        this.oneUser = response;

        this.userForm = new FormGroup({
          _id: new FormControl(response._id, []),

          name: new FormControl(response.first_name, [
            Validators.required,
            Validators.minLength(3),
          ]),

          lastName: new FormControl(response.last_name, [
            Validators.required,
            Validators.minLength(3),
          ]),

          email: new FormControl(response.email, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ]),

          image: new FormControl(response.image, [
            Validators.required,
          ]),

          password: new FormControl(response.password, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]\w{3,10}$/)
          ])
    
        }, []);
      });
    })
  }


  async getDataForm(): Promise<void> {

    if (this.userForm.value._id) {
    //ACTUALIZAR
      let response = await this.usersService.update(this.userForm.value)
      if (response.id){
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error, usuario NO actualizado',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }

    } else {

    //INSERTAR
      let response = await this.usersService.insert(this.userForm.value);
      if(response.id) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario introducido correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error, usuario no introducido',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }

  }

  checkControl(controlName: string, Validator: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(Validator) && this.userForm.get(controlName)?.dirty;
  }

  FormEdit(): boolean {
    return !!this.userForm.value._id;
  }

  getSubmitButtonText(): string {
    return this.FormEdit() ? 'Actualizar' : 'Guardar';
  }

}
