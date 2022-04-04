import {Component} from "@angular/core";
import {WordsService} from "../../../services/words.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'wordle-page.component.html',
    styleUrls: ['wordle-page.component.scss']
})
export class WordlePageComponent {

    public selectedWords: string[] = [];
    public randomWord = 'amata';
    public currentWordLength: number = 5;
    public tries = 0;
    public correctPositionedLetters: string[] = [];
    public correctLetters: string[] = [];

    constructor(
        private snackBar: MatSnackBar,
        private router: Router,
        private wordsService: WordsService
    ) {
        this.wordsService.calculateRandomWordIndex();
        this.randomWord = this.wordsService.getRandomWord();
        this.tries = this.wordsService.tries.length;
        console.log('test-word', this.randomWord);
    }

    onWordSelected(word: string): void {
        if (this.selectedWords.length < this.tries && this.checkWordLength(word) && this.checkIfWordExists(word)) {
            this.selectedWords.push(word);
            this.checkLetters(word);
            if (word === this.randomWord) {
                setTimeout(() => {
                    this.router.navigate(['./done/great']);
                });
            } else if (this.selectedWords.length === this.tries) {
                setTimeout(() => {
                    this.router.navigate(['./done/error']);
                });
            }
        }
    }

    private checkWordLength(word: string): boolean {
        if (word.length === this.currentWordLength) {
            return true;
        } else {
            this.snackBar.open('Palabra demasiado corta', '',{duration: 3000, verticalPosition: 'top'});
            return false;
        }
    }

    private checkIfWordExists(word: string): boolean {
        if (this.wordsService.wordExists(word)) {
            return true;
        } else {
            this.snackBar.open('La palabra seleccionada no existe', '',{duration: 3000, verticalPosition: 'top'});
            return false;
        }
    }

    private checkLetters(word: string): void {
        const wordLetters: string [] = this.randomWord.match(/.{1,1}/g) as string[];
        let i = 0;
        wordLetters.forEach(letter => {
            if (word.indexOf(letter) !== -1) {
                if (this.correctLetters.findIndex(occurrence => occurrence === letter) === -1) {
                    this.correctLetters.push(letter);
                }
            }
            if (word[i] === letter) {
                if (this.correctPositionedLetters.findIndex(occurrence => occurrence === letter) === -1) {
                    this.correctPositionedLetters.push(letter);
                }
                const correctIndex = this.correctLetters.findIndex(occurrence => occurrence === letter);
                if (correctIndex !== -1) {
                    this.correctLetters.slice(correctIndex, 1);
                }
            }
            i = i + 1;
        });
    }
}
