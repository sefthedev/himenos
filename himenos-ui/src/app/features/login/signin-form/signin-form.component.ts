import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from "@app/shared/ui/button/button.component";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {LoginService} from "@app/core/services/login.service";

@Component({
  selector: 'kady-signin-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, RouterLink],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss'
})
export class SigninFormComponent implements OnInit {
  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  placeholderUsername = "";
  currentIndex: number = 0;

  router = inject(Router)
  loginService = inject(LoginService)


  userNames: string[] = ["", "m", "ma", "max", "max1", "max19", "max199", "max1999", "max1999", "max199", "max19",
    "max1", "max", "ma", "m", "", "", "a", "al", "ale", "alex", "alexi", "alexis", "alexist", "alexisth", "alexisthe",
    "alexistheg", "alexisthego", "alexisthegoa", "alexisthegoat", "alexisthegoat", "alexisthegoa", "alexisthego",
    "alexistheg", "alexisthe", "alexisth", "alexist", "alexis", "alexi", "alex", "ale", "al", "a", "", "", "u", "uc",
    "uca", "ucan", "ucant", "ucants", "ucantse", "ucantsee", "ucantseem", "ucantseeme", "ucantseemee", "ucantseemee1",
    "ucantseemee1", "ucantseemee", "ucantseeme", "ucantseem", "ucantsee", "ucantse", "ucants", "ucant", "ucan", "uca",
    "uc", "u", "", "", "l", "le", "let", "lets", "letsg", "letsgo", "letsgop", "letsgopi", "letsgopik", "letsgopika",
    "letsgopika", "letsgopik", "letsgopi", "letsgop", "letsgo", "letsg", "lets", "let", "le", "l", "", "", "t", "th",
    "thi", "this", "thist", "thisti", "thistim", "thistime", "thistime0", "thistime01", "thistime01", "thistime0",
    "thistime", "thistim", "thisti", "thist", "this", "thi", "th", "t", ""]

  ngOnInit(): void {
    setInterval(() => {
      this.placeholderUsername = this.userNames[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.userNames.length;
    }, 600)
  }


  onSubmit() {
    if (this.signinForm.valid) {
      this.loginService.login(
        this.signinForm.controls["username"].value!,
        this.signinForm.controls["password"].value!
      ).subscribe({
        next: (response) => {
          this.loginService.setToken(response.token); // Ensure token is correctly extracted
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
