import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "@app/shared/ui/button/button.component";

@Component({
  selector: 'kady-signup-form',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        ButtonComponent
    ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  placeholderUsername = "";
  currentIndex: number = 0;

}
