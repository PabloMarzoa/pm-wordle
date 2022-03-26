import {NgModule} from "@angular/core";
import {VirtualKeyboardComponent} from "./view/virtual-keyboard.component";
import {CommonModule} from "@angular/common";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
    imports: [
        CommonModule,
        MatRippleModule
    ],
    declarations: [
        VirtualKeyboardComponent
    ],
    exports: [
        VirtualKeyboardComponent
    ],
    providers: [],
})
export class VirtualKeyboardModule {}
