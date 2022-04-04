import {Component, Input} from "@angular/core";
import {WordsService} from "../../../services/words.service";
import {LetterStyles} from "../../../views/wordle-page/models/letter-styles";

@Component({
    templateUrl: 'words-collection.component.html',
    styleUrls: ['words-collection.component.scss'],
    selector: 'words-collection-component'
})
export class WordsCollectionComponent {
    public currentWord: string = '';
    public currentWordLength: number = 5;
    public wordIndex: number[] = [];
    public tries: number[] = [];
    public randomWord = '';
    public lettersStyles = LetterStyles;

    @Input() selectedWords: string[] = [];

    constructor(
        private wordsService: WordsService
    ) {
        this.randomWord = this.wordsService.getRandomWord();
        for (let i = 0; i <= this.currentWordLength - 1; i++) {
            this.wordIndex.push(i);
        }
        this.tries = this.wordsService.tries;
    }

    public getLetter(trieIndex: number, letterIndex: number): string {
        if (this.selectedWords && this.selectedWords[trieIndex] && this.selectedWords[trieIndex][letterIndex]) {
            return this.selectedWords[trieIndex][letterIndex];
        } else {
            return '';
        }
    }

    public getLetterStyle(letter: string, letterIndex: number, trieIndex: number): LetterStyles {
        if (letter !== '' && this.randomWord.indexOf(letter) !== -1) {
            return this.randomWord[letterIndex] === letter ? LetterStyles.correctLetterAndPosition : this.getLetterStyleByOccurrences(letter, letterIndex, trieIndex);
        } else {
            return LetterStyles.regularLetter;
        }
    }

    private getLetterStyleByOccurrences(letter: string, letterIndex: number, trieIndex: number): LetterStyles {
        const randomWordLetters: string [] = this.randomWord.match(/.{1,1}/g) as string[];
        const trieWordLetters: string[] = this.selectedWords[trieIndex].match(/.{1,1}/g) as string[];
        let randomWordOccurrences = 0;
        randomWordLetters.forEach(l => {
            if (l === letter) {
                randomWordOccurrences = randomWordOccurrences + 1;
            }
        });

        let trieWordOccurrences = 0;
        for (let i = 0; i <= letterIndex; i++) {
            if (trieWordLetters[i] === letter) {
                trieWordOccurrences = trieWordOccurrences + 1;
            }
        }
        return trieWordOccurrences <= randomWordOccurrences - this.perfectsMatch(letter, randomWordLetters, trieWordLetters, letterIndex) ? LetterStyles.correctLetter : LetterStyles.regularLetter;
    }

    private perfectsMatch(letter: string, randomWordLetters: string[], trieWordLetters: string[], letterIndex: number): number { // NOTA: se descotarán los match perfectos mayores del índice para no señalarlos dos veces como letra contenida
        let perfectMatchs = 0;
        for (let i = 0; i <= randomWordLetters.length; i++) {
            if (randomWordLetters[i] === trieWordLetters[i] && trieWordLetters[i] === letter && i > letterIndex) {
                perfectMatchs = perfectMatchs + 1;
            }
        }
        return perfectMatchs;
    }
}
