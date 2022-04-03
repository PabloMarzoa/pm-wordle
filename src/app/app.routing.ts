import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'wordle', pathMatch: 'full'},
    {
        path: 'wordle',
        loadChildren: () => import('./views/wordle-page/wordle-page.module').then(m => m.WordlePageModule)
    },
    {
        path: 'done',
        loadChildren: () => import('./views/done/done.module').then(m => m.DoneModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRouting { }
