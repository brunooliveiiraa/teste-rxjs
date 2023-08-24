import { Component } from '@angular/core';
import { LessonsService } from './lessons.service'; // Certifique-se de que o nome do serviço está correto
import { Lesson } from './lesson'; // Certifique-se de que a classe Lesson está importada corretamente

@Component({
  selector: 'app',
 
  template:``


  

})
export class AppComponent {
  lessons: Lesson[] | undefined;

  constructor(private lessonsService: LessonsService) {
    const lessons$ = this.lessonsService.loadLessons();

    lessons$.subscribe(
      lessons => this.lessons = lessons
    );
  }
}
