import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    templateUrl: 'virtual-keyboard.component.html',
    styleUrls: ['virtual-keyboard.component.scss'],
    selector: 'virtual-keyboard-component'
})
export class VirtualKeyboardComponent {

    public line1 = ['q','w','e','r','t','y','u','i','o','p'];
    public line2 = ['a','s','d','f','g','h','j','k','l','ñ'];
    public line3 = ['z','x','c','v','b','n','m'];
    public currentWord: string = '';
    public currentWordLength: number = 5;
    public currentWordIndex: number[] = [];

    @Input() fundedLetters: string[] = [];
    @Input() foundedAndLocatedLetters: string[] = [];
    @Input() correctPositionedLetters: string[] = [];
    @Input() correctLetters: string[] = [];

    @Output() selectWord: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        for (let i = 0; i <= this.currentWordLength - 1; i++) {
            this.currentWordIndex.push(i);
        }
    }

    public addLetter(letter: string): void {
        if (this.currentWord.length < this.currentWordLength) {
            this.currentWord += letter;
        }
    }

    public sendWord(): void {
        this.selectWord.emit(this.currentWord);
        this.currentWord = '';
    }

    public removeLastLetter(): void {
        if (this.currentWord.length > 0) {
            this.currentWord = this.currentWord.slice(0, -1);
        }
    }

    public correctLetter(letter: string): boolean {
        return this.correctLetters.findIndex(occurrence => occurrence === letter) !== -1;
    }

    public correctLetterAndPosition(letter: string): boolean {
        return this.correctPositionedLetters.findIndex(occurrence => occurrence === letter) !== -1;
    }
}
