class Film {
  constructor(
    private episodeRef: string | number,
    private name: string,
    private releaseYear: number,
    private director: string,
    private imdb: number,
    private rottenToms: number,
    private metacritic: number,
    private budget: number,
    private boxOffice: number,
    private ratio: number,
  ) {}
}
export default Film;
