import { Routes } from '@angular/router';
import {LoginComponent} from "@app/features/login/login.component";
import {DashboardComponent} from "@app/features/dashboard/dashboard.component";
import {AuthGuard} from "@app/core/guards/auth.guard";

export const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] }

];
