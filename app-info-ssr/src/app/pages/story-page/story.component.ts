import { Component } from "@angular/core";

@Component({
    selector: 'app-story-page',
    templateUrl: './story.component.html',
    styleUrls: ['./styles/story.component.scss']
})
export class StoryComponent {
    public items: string[] = [
        'Кроватка',
        'Коляска',
        'Купание',
        'Кормление',
        'Одежда для малыша',
        'Подгузники',
        'Детская аптечка'
    ]
}
