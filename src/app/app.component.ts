import { Component ,OnInit } from '@angular/core';
import { tofsnap } from './models/tof-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  facesnapsTab!:tofsnap[];

  ngOnInit(): void {




}
}
