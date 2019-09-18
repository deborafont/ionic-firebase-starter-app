import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
})
export class CompletePage implements OnInit {

  validations_form: FormGroup;
  image: any;

  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
  }

  resetFields(){
    this.image = "./assets/imgs/default_image.jpg";
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }
}
