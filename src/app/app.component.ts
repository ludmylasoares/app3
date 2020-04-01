import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
  // Configurações do seu app web Firebase.
  var firebaseConfig = {
    apiKey: "AIzaSyC686X51_NG7QfuuRLho4My2pP_nrGuWRU",
    authDomain: "jta-instagram-clone-afe26.firebaseapp.com",
    databaseURL: "https://jta-instagram-clone-afe26.firebaseio.com",
    projectId: "jta-instagram-clone-afe26",
    storageBucket: "jta-instagram-clone-afe26.appspot.com",
    messagingSenderId: "75601319813",
    appId: "1:75601319813:web:0803d8a1a4faf4f86716ec",
    measurementId: "G-B8KGVYLY01"
  };
  // Iniciação Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  }
}