import {Component} from "@angular/core";
import {WordsService} from "../../../services/words.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    templateUrl: 'wordle-page.component.html',
    styleUrls: ['wordle-page.component.scss']
})
export class WordlePageComponent {

    public selectedWords: string[] = [];
    public randomWord = 'amata';
    public currentWordLength: number = 5;

    constructor(
        private snackBar: MatSnackBar,
        private wordsService: WordsService
    ) {
        this.randomWord = this.wordsService.getRandomWord()
        console.log('test-word', this.randomWord);
    }

    onWordSelected(word: string): void {
        if (this.selectedWords.length < 5 && this.checkWordLength(word) && this.checkIfWordExists(word)) {
            this.selectedWords.push(word);
            if (word === this.randomWord) {
                setTimeout(() => {}); // TODO: Navegar a acierto
            } else if (this.selectedWords.length === 5) {
                setTimeout(() => {}); // TODO: Navegar a error
            }
        }
    }

    private checkWordLength(word: string): boolean {
        if (word.length === this.currentWordLength) {
            return true;
        } else {
            this.snackBar.open('Palabra demasiado corta', '',{duration: 3000});
            return false;
        }
    }

    private checkIfWordExists(word: string): boolean {
        if (this.wordsService.wordExists(word)) {
            return true;
        } else {
            this.snackBar.open('La palabra seleccionada no existe', '',{duration: 3000});
            return false;
        }
    }
}
