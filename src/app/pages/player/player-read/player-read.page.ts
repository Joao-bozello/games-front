import { Router } from '@angular/router';
import { Player } from '../../../model/player.model';
import { PlayerService } from '../../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-player-read',
  templateUrl: './player-read.page.html',
  styleUrls: ['./player-read.page.scss'],
})
export class PlayerReadPage implements OnInit {
  loading: any;
  players: any[] = [];
  isAlertOpen = false;
  isToastOpen = false;

  constructor(
    private playerService: PlayerService,
    private route: Router,
    public loadingController: LoadingController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadData();
    let islogged =localStorage.getItem("token")
    if(!islogged){
      this.router.navigateByUrl('/login');
    }
  }

  async loadData() {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });
    this.loading.present();
    this.playerService.read().subscribe(
      (data) => {
        this.players = data;
        this.loading.dismiss();
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;

        console.log(err);
      }
    );
  }
  async presentLoading(msg: any) {
    this.loading = await this.loadingController.create({
      message: msg,
    });
    this.loading.present();
  }

  async deletePlayer(id: string) {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });

    this.playerService.delete(id).subscribe(
      () => {
        this.loadData();
        this.loading.dismiss();
        this.isToastOpen = true;
      },
      (err) => {
        this.loading.dismiss();
        this.isAlertOpen = true;

        console.log(err);
      }
    );
    this.loadData()
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  goToAdd() {
    this.route.navigate(['/player-add']);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  goToUpdate(id: any): void {
    this.route.navigate([`/player-update/${id}`]);
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {},
    },
  ];
}
