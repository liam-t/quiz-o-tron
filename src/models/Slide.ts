import { SlideTypes } from 'types';

export class Slide {
  constructor(
    readonly title: string,
    readonly slideType: SlideTypes,
    readonly copy?: string,
    readonly imageUrl?: string,
  ) {}
}
