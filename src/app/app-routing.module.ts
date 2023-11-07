import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ChatComponent } from './features/chat/chat.component';
import { MotivationComponent } from './features/motivation/motivation.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./features/home/home.module')
        .then(m => m.HomeModule),
  },
  {
    path: 'chat',
    component: ChatComponent,
    loadChildren: () => import('./features/chat/chat.module')
        .then(m => m.ChatModule),
  },
  {
    path: 'motivation',
    component: MotivationComponent,
    loadChildren: () => import('./features/motivation/motivation.module')
        .then(m => m.MotivationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
