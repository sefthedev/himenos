import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {ToolbarComponent} from "@app/features/dashboard/toolbar/toolbar.component";
import {PageComponent} from "@app/features/dashboard/page/page.component";
import {QuillModule} from "ngx-quill";
import {LoginService} from "@app/core/services/login.service";

@Component({
  selector: 'kady-dashboard',
  standalone: true,
  imports: [ToolbarComponent, PageComponent, QuillModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  router = inject(Router)
  loginService = inject(LoginService)
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
