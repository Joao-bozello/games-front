import { Game } from './../../../model/game.model';
import { Router } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.page.html',
  styleUrls: ['./game-read.page.scss'],
})
export class GameReadPage implements OnInit {
  loading: any;
  games: any[] = [];
  game!: Game;
  public alertButton = ['OK'];

  isAlertOpen = false;
  isToastOpen = false;
  
  constructor(
    private gameService: GameService,
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
    this.gameService.read().subscribe(
      (data) => {
        this.games = data;
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

  async deleteGame(id: string) {
    let msg = ``;
    this.loading = await this.loadingController.create({
      message: msg,
    });

    this.gameService.delete(id).subscribe(
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
    this.route.navigate(['/game-add']);
  }

  goToUpdate(id: any): void {
    this.route.navigate([`/game-update/${id}`]);
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
