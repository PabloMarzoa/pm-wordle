import {NgModule} from '@angular/core';
import {SuccessComponent} from "./views/succsess/success.component";
import {CommonModule} from "@angular/common";
import {DoneRouting} from "./done.routing";
import {MatButtonModule} from "@angular/material/button";
import {ErrorComponent} from "./views/error/error.component";

@NgModule({
    declarations: [
        SuccessComponent,
        ErrorComponent
    ],
    imports: [
        CommonModule,
        DoneRouting,
        MatButtonModule
    ],
    providers: [
    ]
})
export class DoneModule { }
