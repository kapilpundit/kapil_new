import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { ICandidate } from '../models/candidate';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  candidates: ICandidate[];
  panelOpenState = false;
  picStyle: object;
  

  constructor(
    private _votingService: VotingService
  ) {
    this.picStyle = {
      'width': '30px'
    };
  }

  ngOnInit() {
    this.candidates = this._votingService.listCandidates();    
  }

  //-----------------------------------------
  addVote(id: string) {
    this._votingService.addVote(id);
  }

  removeVote(id: string) {
    this._votingService.removeVote(id);
  }

}
