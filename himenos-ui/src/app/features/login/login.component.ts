import {Component, HostListener, inject, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {SigninFormComponent} from "@app/features/login/signin-form/signin-form.component";
import {SignupFormComponent} from "@app/features/login/signup-form/signup-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'kady-login',
  standalone: true,
  imports: [
    NgClass,
    SigninFormComponent,
    SignupFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  pages: string[] = [];
  currentPage: number = 0;
  totalPages: number = 21; // Total number of images
  lastScrollTop: number = 0;
  router = inject(Router);
  ngOnInit() {
    if(localStorage.getItem('isLoggedIn'))
    {
      this.router.navigate(['/home'])
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const pageNumber = i.toString().padStart(3, '0'); // Format numbers to 3 digits
      this.pages.push(`assets/login-book/book-${pageNumber}.png`);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = window.scrollY;

    if (scrollTop > this.lastScrollTop && this.currentPage < this.totalPages - 1) {
      // Scrolling down
      this.currentPage++;
    } else if (scrollTop < this.lastScrollTop && this.currentPage > 0) {
      // Scrolling up
      this.currentPage--;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
