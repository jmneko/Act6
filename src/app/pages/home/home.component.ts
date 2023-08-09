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
  totalPages: number =1;
  currentPage: number =1;
  usersService = inject(UsersService);

  
  ngOnInit(): void {
    this.goPage()
  }
async goPage(numberPage: number = 1): Promise<void> {

  try {
      let response = await this.usersService.getAll(numberPage)
      this.currentPage = response.page;
      this.arrUser = response.results;
      this.totalPages = response.total_pages;
      
    } catch {
      console.log(Error)}
  }
          

}
