import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WordlePageComponent} from "./view/wordle-page.component";

const routes: Routes = [
    {path: '', redirectTo: 'game', pathMatch: 'full'},
    {
        path: 'game',
        component: WordlePageComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WordlePageRouting {}
