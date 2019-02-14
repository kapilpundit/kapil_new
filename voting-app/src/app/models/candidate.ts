export interface ICandidate {
    id?: string;
    name?: string;
    legislativeAssembly?: string;
    party?: string;
    pic?: string;
    votes?: number;
}

export class Candidate implements ICandidate {
    constructor(
        public id?: string,
        public name?: string,
        public legislativeAssembly?: string,
        public party?: string,
        public pic?: string,
        public votes?: number
    ) { }
}
