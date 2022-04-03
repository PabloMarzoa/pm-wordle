import {Component} from "@angular/core";
import {WordsService} from "../../../../services/words.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.scss']
})
export class ErrorComponent {

    public randomWord: string = '';

    constructor(
        private wordleService: WordsService,
        private router: Router
    ) {
        this.randomWord = this.wordleService.getRandomWord();
    }

    public restart(): void {
        this.router.navigate(['./wordle/game'])
    }
}
