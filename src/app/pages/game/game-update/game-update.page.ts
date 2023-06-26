import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../model/game.model';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.page.html',
  styleUrls: ['./game-update.page.scss'],
})
export class GameUpdatePage implements OnInit {
  game!: Game;
  loading: any;
  isAlertOpen = false;
  isToastOpen = false;
  errorMsg ="Falha ao salvar jogo, preencha os campos corretamente"
  gameForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    name: new FormControl('', Validators.required),
    censorship: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    playerNumber: new FormControl(0, Validators.required),
  });

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });

    this.loading.present();
    const id = this.route.snapshot.paramMap.get('id')!;
    this.gameService.readById(id).subscribe(
      (game) => {
        this.gameForm.setValue(game);
        this.game = game;
        this.loading.dismiss();
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;
        console.log(err);
      }
    );
  }

  async updateGame() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });
    if (this.gameForm.valid) {
      this.game = {
        id: this.gameForm.controls['id'].value,
        name: this.gameForm.controls['name'].value,
        censorship: this.gameForm.controls['censorship'].value,
        type: this.gameForm.controls['type'].value,
        playerNumber: this.gameForm.controls['playerNumber'].value,
      };
      this.loading.present();
      this.gameService.update(this.game).subscribe(
        () => {
          this.loadData();
          this.loading.dismiss();
          this.isToastOpen = true;
          setTimeout(()=>{this.router.navigate(['/game-read']);},500)
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
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
