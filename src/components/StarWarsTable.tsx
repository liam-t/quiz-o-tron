import React from 'react';
import styled from 'styled-components';
import Table from 'components/Table';
import Film from 'models/Film';
import numeral from 'numeral';
import { getNumeral } from 'helpers';
import { Header } from 'types';


interface IProps {
  data: Film[];
}
const defaultProps = {};

const StarWarsTable:React.FC<IProps> = ({ data }: IProps) => {
  const headers:Header[] = [{
    id: 'episodeRef',
    name: 'Episode',
    formatter: (val): string => {
      if (typeof val === 'number') return getNumeral(val);
      return '-';
    },
  }, {
    id: 'name',
    name: 'Title',
  }, {
    id: 'releaseYear',
    name: 'Released',
  }, {
    id: 'director',
    name: 'Director',
  }, {
    id: 'imdb',
    name: 'Imdb Score',
    formatter: (n: number): string => (
      Number.isInteger(n / 10)
        ? `${n / 10}.0`
        : `${n / 10}`
    ),
  }, {
    id: 'rottenToms',
    name: 'Rotten Toms Score',
    formatter: (n: number): string => `${n}%`,
  }, {
    id: 'metacritic',
    name: 'Metacritic Score',
    formatter: (n: number): string => `${n}%`,
  }, {
    id: 'budget',
    name: 'Budget',
    formatter: (n: number): string => numeral(n).format('$0,0'),
  }, {
    id: 'boxOffice',
    name: 'Box Office Takings',
    formatter: (n: number): string => numeral(n).format('$0,0'),
  }, {
    id: 'ratio',
    name: 'Ratio',
    formatter: (n: number): string => String(Math.round((n + Number.EPSILON) * 100) / 100),
  }];

  return (
    <StarWarsTableOuter>
      <Table data={data} headers={headers} />
    </StarWarsTableOuter>
  );
};
StarWarsTable.defaultProps = defaultProps;
export default StarWarsTable;


const StarWarsTableOuter = styled.div``;
