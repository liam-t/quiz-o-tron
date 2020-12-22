import { Round } from './Round';

export class Quiz {
  constructor(
    readonly name: string,
    readonly imageUrl: string,
    readonly rounds: Round[],
  ) {}
}
