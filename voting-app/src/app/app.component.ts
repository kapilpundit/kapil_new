import { Component, OnInit } from '@angular/core';
import { VotingService } from './voting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Voting App';

  constructor(
    private _votingService: VotingService
  ) {}

  ngOnInit() {
    // this._votingService.votes.subscribe(count => {
    //   console.log(count);
    // });
    
  }
}
