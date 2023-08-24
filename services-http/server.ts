@Component({
    selector: 'app',
    directives: [LessonsList],
    template: `

        <div>

            <input class="add-lesson" placeholder="Add Lesson">
            <lessons-list [lessons]="lessons"></lessons-list>

        </div>
})