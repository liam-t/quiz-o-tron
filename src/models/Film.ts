class Film {
  constructor(
    public episodeRef: string | number,
    public name: string,
    public releaseYear: number,
    public director: string,
    public imdb: number,
    public rottenToms: number,
    public metacritic: number,
    public budget: number,
    public boxOffice: number,
    public ratio: number,
  ) {}
}
export default Film;
