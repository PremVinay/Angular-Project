import { Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomePageComponent } from '../home-page/home-page.component';
export const routes: Routes = [
    {path:'' , component: HomePageComponent},
    { path: 'login', component:LoginPageComponent},
    {path:'register',component:RegisterPageComponent}

];
