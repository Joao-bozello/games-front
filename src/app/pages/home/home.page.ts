import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    let isLogged = localStorage.getItem('player');
    console.log(isLogged)
    if(!isLogged) this.router.navigateByUrl('/login');

  }

  goToPlayer(): void {
    this.router.navigate(["/player-read"]);
  }

  goToMatch(): void {
    this.router.navigate(["/match-read"]);
  }

  goToGame(): void {
    this.router.navigate(["/game-read"]);
  }
  goToDashboard(): void {
    this.router.navigate(["/dashboard"]);
  }
}
