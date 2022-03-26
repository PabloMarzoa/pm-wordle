import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'wordle', pathMatch: 'full'},
    {
        path: 'wordle',
        loadChildren: () => import('./views/wordle-page/wordle-page.module').then(m => m.WordlePageModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
