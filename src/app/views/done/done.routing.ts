import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuccessComponent} from "./views/succsess/success.component";
import {ErrorComponent} from "./views/error/error.component";

const routes: Routes = [
    {path: '', redirectTo: 'great', pathMatch: 'full'},
    {
        path: 'great',
        component: SuccessComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoneRouting { }
