import { parse, ParseResult } from 'papaparse';
import { promises } from 'fs';
import { join } from 'path';
import Film from '../models/Film';
import { parseString, parseNumber } from './helpers';

const { readFile, writeFile } = promises;

const dataDir = join(__dirname, '../', 'data');

interface ObjStringVal {
  [key: string]: string
}

const init = async (): Promise<void> => {
  const rawData = await readFile(join(dataDir, 'raw', 'starwars.csv'), 'utf-8');
  const opts = {
    header: true,
  };
  const parsedData:ParseResult<ObjStringVal> = parse(rawData, opts);
  const dataFilteredForMissingHeaders:ObjStringVal[] = parsedData.data.map((obj) => (
    Object.entries(obj).reduce((acc, [key, val]) => ({
      ...acc,
      ...(key ? { [key]: val } : {}),
    }), {})
  ));
  const films: Film[] = dataFilteredForMissingHeaders.map((row):Film => new Film(
    Number.isNaN(Number(row.episodeRef))
      ? parseString(row.episodeRef)
      : parseNumber(row.episodeRef),
    parseString(row.name),
    parseNumber(row.releaseYear),
    parseString(row.director),
    parseNumber(row.imdb),
    parseNumber(row.rottenToms),
    parseNumber(row.metacritic),
    parseNumber(row.budget),
    parseNumber(row.boxOffice),
    parseNumber(row.ratio),
  ));
  const jsonString = JSON.stringify(films, null, 2);
  await writeFile(join(dataDir, 'parsed', 'starwars.json'), jsonString);
};

export default init;
