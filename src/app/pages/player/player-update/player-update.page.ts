import { PlayerService } from './../../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.page.html',
  styleUrls: ['./player-update.page.scss'],
})
export class PlayerUpdatePage implements OnInit {
  player!: Player;
  isAlertOpen = false;
  isToastOpen = false;
  loading: any;
  errorMsg ="Falha atualizar o jogador, preencha os campos corretamente"
  playerForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nickname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor(
    private playerService: PlayerService,
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
    this.playerService.readById(id).subscribe(
      (player) => {
        console.log(player)
        this.playerForm.setValue(player);
        this.player = player;
        this.loading.dismiss();
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;
        console.log(err);
      }
    );
  }

  async updatePlayer() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });
    if (this.playerForm.valid) {
      this.player = {
        id: this.playerForm.controls['id'].value,
        nickname: this.playerForm.controls['nickname'].value,
        email: this.playerForm.controls['email'].value,
        password: this.playerForm.controls['password'].value,
        birthday: this.playerForm.controls['birthday'].value,
        name: this.playerForm.controls['name'].value,
      };
      this.loading.present();
      this.playerService.update(this.player).subscribe(
        () => {
          this.loading.dismiss();
          this.isToastOpen = true;
          setTimeout(()=>{this.router.navigate(['/']);},500)
        },
        (err: any) => {
         
          this.isAlertOpen = true;
          this.errorMsg= err.error.message
          console.log(err);
          this.isAlertOpen = true;
          setTimeout(()=>{this.isAlertOpen = false},1000)
          this.loading.dismiss();
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
