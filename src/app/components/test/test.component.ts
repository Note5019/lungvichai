import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('home/showData/8').subscribe((data) => {
      if (data !== undefined) {
        console.log('OK');
      } else {
        console.log('Fail');
      }
    });
  }
}
