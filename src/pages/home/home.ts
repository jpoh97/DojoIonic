import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  informationUser:any = [];
  username:string = ""
  repositorios:string = ""
  descripcion:string = ""
  repos:any = HomePage
  exist:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private github: GithubProvider) {

  }

  myFunction() {
    this.github.buscarUsuario(this.username)
        .then((data) => {
          this.exist = true;
          this.informationUser = data;
          console.log(this.informationUser);
        }).catch( (err) => {
          console.log(err);
        });
  }


}
