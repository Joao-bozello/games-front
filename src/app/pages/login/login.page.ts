import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
player ={
  email:``,
  password:``
}
  constructor(private router: Router, private playerService:PlayerService) { }

  ngOnInit() {
  }
  login(){
    this.playerService.login(this.player).subscribe(data=>{
      localStorage.setItem('token',JSON.stringify( data.access_token));
      this.router.navigateByUrl('/home'); 
    })
    
  }

  goToCreatePlayer(){
    this.router.navigate(['/player-add']);
  }
}
