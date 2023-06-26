import { Match } from '../../../model/match.model';
import { MatchService } from 'src/app/services/match.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { PlayerService } from 'src/app/services/player.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.page.html',
  styleUrls: ['./match-add.page.scss'],
})
export class MatchAddPage implements OnInit {
  matchForm = new FormGroup({
    player1: new FormControl('', Validators.required),
    player2: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    winner: new FormControl('', Validators.required),
    game: new FormControl('', Validators.required),
  });
  loading: any;
  isAlertOpen = false;
  errorMsg = '';
  isToastOpen = false;

  match: Match = {
    id:0,
    player1: '',
    player2: '',
    time: 0,
    winner: '',
    game: '',
  };
  players: any[] = [];
  games: any[] = [];
  constructor(
    private route: Router,
    private matchService: MatchService,
    private playerService: PlayerService,
    private gameService: GameService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {

  
    this.playerService.read().subscribe(data=>{
   
      this.players=data
      console.log(`player`,this.players)})
      this.gameService.read().subscribe(data=>{
   
        this.games=data
        console.log(`player`,this.players)})
   
  }
  
  async presentLoading(msg: any) {
    this.loading = await this.loadingController.create({
      message: msg,
    });
    await this.loading.present();
  }

  submitForm() {
    console.log(this.matchForm.value);
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async createMatch() {
    this.match.game = this.matchForm.controls[`game`].value;
    this.match.player1 = this.matchForm.controls[`player1`].value;
    this.match.player2 = this.matchForm.controls[`player2`].value;
    this.match.winner = this.matchForm.controls[`winner`].value;
    let t = this.matchForm.controls[`time`].value;
    if (t) this.match.time = parseInt(t);

    if (this.matchForm.valid) {
      let msg = ``;
      this.loading = await this.loadingController.create({
        message: msg,
      });
      await this.loading.present();
      this.matchService.create(this.match).subscribe(
        () => {
          this.loading.dismiss();
          this.isToastOpen = true;
          setTimeout(()=>{this.route.navigate(['/home']);},500)
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
