import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/model/player.model';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.page.html',
  styleUrls: ['./player-add.page.scss'],
})
export class PlayerAddPage implements OnInit {
  constructor(private playerService: PlayerService, private route: Router) {}
  
  isAlertOpen = false;
  errorMsg = '';
  isToastOpen = false;
  
  ngOnInit() {}
  
  playerForm = new FormGroup({
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required, Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl('', [
      Validators.required, Validators.min(1)
    ]),
    name: new FormControl('', [
      Validators.required, Validators.minLength(4)
    ]),
  });

  player: Player = {
    id:0,
    nickname: '',
    email: '',
    password: '',
    birthday: '',
    name: '',
  };

  submitForm() {
    console.log(this.playerForm.value);
  }

  createPlayer(): void {
    this.player.nickname = this.playerForm.controls[`nickname`].value;
    this.player.email = this.playerForm.controls[`email`].value;
    this.player.password = this.playerForm.controls[`password`].value;
    this.player.name = this.playerForm.controls[`name`].value;
    this.player.birthday = this.playerForm.controls[`age`].value;
    //let age = this.playerForm.controls[`age`].value;
    //if (age) this.player.age = parseInt(age);

    if (this.playerForm.valid) {
      this.playerService.create(this.player).subscribe(
        () => {
          this.isToastOpen = true;
          setTimeout(()=>{this.route.navigate(['/']);},500)
        },
        (err) => {
          this.isAlertOpen = false;
          
          this.errorMsg= err.error.message
          console.log(err);
          this.isAlertOpen = true;
          setTimeout(()=>{this.isAlertOpen = false},1000)
        }
      );
    } else {
      this.isAlertOpen = true;
    }
  }

  goToHome() {
    this.route.navigate(['/home']);
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
