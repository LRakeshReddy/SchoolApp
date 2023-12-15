import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  
  logDetails() {
    let userName = (document.getElementById("urUserName") as HTMLInputElement)
    console.log(userName.value)
  }
}
