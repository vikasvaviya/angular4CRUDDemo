import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = [];
  updateuser;
  isadd = true;
  constructor(public http: Http) {}
  ngOnInit() {
    this.get();
  }
  get() {
    this.http.get('http://localhost:3000/api/get').map((res) => res.json()).subscribe(data => {
      this.user = data;
    });
  }
  add(user) {
    this.http.post('http://localhost:3000/api/post', user).subscribe(data => {
      this.get();
    });
  }
  delete(id) {
    this.http.delete('http://localhost:3000/api/delete/' + id).subscribe(data => {
      this.get();
    });
  }
  edit(user) {
    this.updateuser = user;
    this.isadd = false;
  }
  update(user) {
    this.http.post('http://localhost:3000/api/put/' + this.updateuser._id, user).subscribe(data => {
      this.get();
    });
  }
}
