import { LoadingController } from '@ionic/angular';
import { Game } from '../../../model/game.model';
import { GameService } from '../../../services/game.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.page.html',
  styleUrls: ['./game-add.page.scss'],
})

export class GameAddPage implements OnInit {
  gameForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    censorship: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    type: new FormControl('', [Validators.required, Validators.minLength(3)]),
    playerNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  game: Game = {
    id: 0,
    name: '',
    censorship: '',
    type: '',
    playerNumber: 0,
  };
  
  constructor(
    private route: Router,
    private gameService: GameService,
    public loadingController: LoadingController
  ) {}

  isAlertOpen = false;
  errorMsg = '';
  loading: any;
  isToastOpen = false;

  ngOnInit() {}

  async presentLoading(msg: any) {
    this.loading = await this.loadingController.create({
      message: msg,
    });
    await this.loading.present();
  }


  submitForm() {
    console.log(this.gameForm.value);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  async createGame() {
    this.game.name = this.gameForm.controls[`name`].value;
    this.game.censorship = this.gameForm.controls[`censorship`].value;
    this.game.type = this.gameForm.controls[`type`].value;
    let pn = this.gameForm.controls[`playerNumber`].value;
    if (pn) this.game.playerNumber = parseInt(pn);

    if (this.gameForm.valid) {
      let msg = ``;
      this.loading = await this.loadingController.create({
        message: msg,
      });
      await this.loading.present();
      this.gameService.create(this.game).subscribe(
        () => {
          this.loading.dismiss();
          this.isToastOpen = true;
          setTimeout(()=>{this.route.navigate(['/']);},500)
        },
        (err) => {
          this.loading.dismiss();
          this.isAlertOpen = true;
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

}
