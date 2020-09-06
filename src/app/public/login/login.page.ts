import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;

  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastController: ToastController) {
    this.myForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
  }

  login() {
    console.log(this.myForm.controls['username'].value);
    if (this.myForm.controls['username'].value == 'test' &&
      this.myForm.controls['password'].value == '1234') {
      this.authService.login();
    }else{
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña Incorrecta',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

}
