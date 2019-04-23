import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MoviesPage } from '../movies/movies.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public navCtrl: NavController,private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmitLogin(){

    //this.navCtrl.push(movies);
    if (this.email=='usuario' ) {
      if(this.password=='1234') {
          //console.log(this.email);
    this.navCtrl.navigateForward('movies');
     } }
    // this.authService.login(this.email, this.password);
     // this.authService.login(this.email);

  }

}
