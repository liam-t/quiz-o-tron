import { Question } from './Question';

export class Round {
  constructor(
    readonly name: string,
    readonly questions: Question[],
    readonly description?: string,
    readonly imageUrl?: string,
  ) {}
}
