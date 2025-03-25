import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
  
   users: {
    name: string;
    age: number;
    role: string;
    lastActive: string;
  }[] = [
    {
      name: "Vinay",
      age: 28,
      role: "Admin",
      lastActive: "2025-03-20"
    },
    {
      name: "Deshik",
      age: 25,
      role: "Editor",
      lastActive: "2025-03-22"
    },
    {
      name: "Asif",
      age: 30,
      role: "Viewer",
      lastActive: "2025-03-18"
    },
    {
      name: "Jeswanth",
      age: 27,
      role: "Contributor",
      lastActive: "2025-03-24"
    },
    {
      name: "Prasanth",
      age: 29,
      role: "Moderator",
      lastActive: "2025-03-21"
    }
  ];
  
}
