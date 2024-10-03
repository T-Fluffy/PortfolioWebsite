import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email :string="halloultarek1@gmail.com";
  
  constructor(private titleService: Title) {
    this.titleService.setTitle('Tarek Halloul - Contact');
  }

}
