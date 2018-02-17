import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localStorage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.styl']
})
export class LocalStorageComponent implements OnInit {
  public idb: IDBDatabase;
  innerText: String = "Testing Local and Sessional Storage, try changing the input fields." +
   "Openning this app/website in a new tab would lose track of sessional, but keep local storage." +
   "Firefox would have different local storage then chrome";
  inputSessional: String = "Sessional Storage";
  inputLocal: String = "Local Storage";

  constructor() { }

  ngOnInit() {
    this.testStorage();
  }

  testStorage() {
    // check for support
    if (typeof(Storage) !== "undefined") {
      if (localStorage.inputLocal) {
          this.inputLocal = localStorage.inputLocal;
      }
      if (sessionStorage.inputSessional) {
        this.inputSessional = sessionStorage.inputSessional;
      }
      // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      this.innerText = "Sorry, your browser does not support web storage...";
    }
  }
  
  inputChangeSessional(input: any) {
    sessionStorage.inputSessional = input.target.value;
  }

  inputChangeLocal(input: any) {
    localStorage.inputLocal = input.target.value
  }


    // if (!('indexedDB' in window)) {
    //   console.log('This browser doesn\'t support IndexedDB');
    //   return;
    // } else {
    //   console.log('IndexedDB support');
    // }

    // const dbPromise = idb.open('test-db3', 1, function(upgradeDb) {
    //   if (!upgradeDb.objectStoreNames.contains('people')) {
    //     upgradeDb.createObjectStore('people', {keyPath: 'email'});
    //   }
    //   if (!upgradeDb.objectStoreNames.contains('notes')) {
    //     upgradeDb.createObjectStore('notes', {autoIncrement: true});
    //   }
    //   if (!upgradeDb.objectStoreNames.contains('logs')) {
    //     upgradeDb.createObjectStore('logs', {keyPath: 'id', autoIncrement: true});
    //   }
    // });
  

}
