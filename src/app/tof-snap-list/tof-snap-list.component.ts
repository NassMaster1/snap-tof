import { Component, OnInit } from '@angular/core';
import { tofsnap } from '../models/tof-snap.model';
import {TofSnapsService} from "../services/tof-snaps.service";

@Component({
  selector: 'app-tof-snap-list',
  templateUrl: './tof-snap-list.component.html',
  styleUrls: ['./tof-snap-list.component.scss']
})
export class TofSnapListComponent implements OnInit {

  facesnapsTab!:tofsnap[];

  constructor(private tofSnapsService:TofSnapsService) { }

  ngOnInit(): void {
    this.facesnapsTab=this.tofSnapsService.getAllFacesnaps();
  }

}
