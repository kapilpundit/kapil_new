import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ICandidate, Candidate } from './models/candidate';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  candidates: Candidate[] = [
    {id: 'bjp_1', name: 'Narendra Modi', legislativeAssembly: 'Banaras', party: 'BJP', 
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/PM_Modi_2015.jpg/220px-PM_Modi_2015.jpg', votes: 0},
    {id: 'cong_1', name: 'Rahul Gandhi', legislativeAssembly: 'Amethi', party: 'Congress', 
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rahul_Gandhi_%28headshot%29.jpg/220px-Rahul_Gandhi_%28headshot%29.jpg', votes: 0},
    {id: 'tmc_1', name: 'Mamta Banerjee', legislativeAssembly: 'Kolkata', party: 'TMC', 
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Mamata_2015.jpg/220px-Mamata_2015.jpg', votes: 0}
  ];

  votes = new BehaviorSubject<number>(0);
  
  votecount: number = 0;

  constructor() { }

  listCandidates(): ICandidate[] {
    return this.candidates;
  }

  addVote(id: string) {
    const candidateIndex = this.candidates.findIndex(candidate => candidate.id == id);
    ++this.candidates[candidateIndex].votes;
    this.votes.next(++this.votecount);
   
  }

  removeVote(id: string) {
    const candidateIndex = this.candidates.findIndex(candidate => candidate.id == id);

    if (this.candidates[candidateIndex].votes == 0) {
      return;
    }
    --this.candidates[candidateIndex].votes;
    this.votes.next(--this.votecount);    
    
  }
}
