import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private titleService: Title,private renderer: Renderer2) {
    this.titleService.setTitle('Tarek Halloul - Resume');
  }
  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/CV_Tarek_Halloul.pdf');
    link.setAttribute('download', 'CV_Tarek_Halloul.pdf');
    link.click();
    link.remove();
  }
}
