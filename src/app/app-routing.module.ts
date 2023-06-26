import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'game-add',
    loadChildren: () => import('./pages/game/game-add/game-add.module').then(m=> m.GameAddPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'player-add',
    loadChildren: () => import('./pages/player/player-add/player-add.module').then(m=> m.PlayerAddPageModule)
  },
  {
    path: 'match-add',
    loadChildren: () => import('./pages/match/match-add/match-add.module').then(m=> m.MatchAddPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'game-read',
    loadChildren: () => import('./pages/game/game-read/game-read.module').then( m => m.GameReadPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'match-read',
    loadChildren: () => import('./pages/match/match-read/match-read.module').then( m => m.MatchReadPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'player-read',
    loadChildren: () => import('./pages/player/player-read/player-read.module').then( m => m.PlayerReadPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'game-update/:id',
    loadChildren: () => import('./pages/game/game-update/game-update.module').then( m => m.GameUpdatePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'player-update/:id',
    loadChildren: () => import('./pages/player/player-update/player-update.module').then( m => m.PlayerUpdatePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'match-update/:id',
    loadChildren: () => import('./pages/match/match-update/match-update.module').then( m => m.MatchUpdatePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard] 
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
