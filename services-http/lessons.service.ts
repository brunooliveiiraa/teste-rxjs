import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Importar o HttpClient corretamente
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; // Importar o operador map

import { Lesson } from "./lesson";

@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) { // Usar HttpClient em vez de Http

    }

    loadLessons(): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/lessons').pipe( // Usar pipe() para usar o operador map
            map((res: any) => res.json()) // Usar map dentro do pipe
        );
    }
}
