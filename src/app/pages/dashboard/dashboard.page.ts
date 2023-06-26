import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
games:any[]=[]
selectedGameId:number=1
totalMatchs=0
matchs:any[]=[]
isAlertOpen=false
errorMsg =`Por favor verifique sua conexão`
  constructor(
    private router: Router,

    private matchService: MatchService,
    private playerService: PlayerService,
    private gameService: GameService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    let islogged =localStorage.getItem("token")
    if(!islogged){
      this.router.navigateByUrl('/login');
    }
    this.gameService.read().subscribe(data=>this.games=data,
    
      (err) => {
   
        this.isAlertOpen = true;
        this.errorMsg= err.error.message
        console.log(err);
        this.isAlertOpen = true;
        setTimeout(()=>{this.isAlertOpen = false},1000)
       
        
      })
    this.matchService.matchWinner(this.selectedGameId).subscribe(data=>{
      console.log(data)    
      this.matchs=data[0]
      this.totalMatchs =data[1]
    },
    
        (err) => {
     
          this.isAlertOpen = true;
          this.errorMsg= err.error.message
          console.log(err);
          this.isAlertOpen = true;
          setTimeout(()=>{this.isAlertOpen = false},1000)
         
          
        })
   
  }
  onGameChange(event:any){
    console.log(this.selectedGameId,event)
    this.matchService.matchWinner(this.selectedGameId).subscribe(data=>{
      console.log(data)    
      this.matchs=data[0]
      this.totalMatchs =data[1]
    },
    
    (err) => {
 
      this.isAlertOpen = true;
      this.errorMsg= err.error.message
      console.log(err);
      this.isAlertOpen = true;
      setTimeout(()=>{this.isAlertOpen = false},1000)
     
      
    }
  
      )
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
