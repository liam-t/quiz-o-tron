import React from 'react';
import styled from 'styled-components/macro';
// import { capitalCase } from 'change-case';
import Film from 'models/Film';

interface IProps {
  data: Film[];
}

const defaultProps = {};

interface Headers {
  id: keyof Film;
  name: string; // lock this down to film name?
  formatter?: (input: number) => string;
}


const Table:React.FC<IProps> = ({ data }: IProps) => {
  const [selectedSortingId, setSelectedSortingId] = React.useState('episodeRef');
  const [sortInvert, setSortInvert] = React.useState(true);

  // redo this in parent component called StarWarsTable that wraps Table as a generic component
  const headers:Headers[] = [{
    id: 'episodeRef',
    name: 'Episode Ref',
  }, {
    id: 'name',
    name: 'Name',
  }, {
    id: 'releaseYear',
    name: 'Release Year',
  }, {
    id: 'director',
    name: 'Director',
  }, {
    id: 'imdb',
    name: 'Imdb',
  }, {
    id: 'rottenToms',
    name: 'Rotten Toms',
  }, {
    id: 'metacritic',
    name: 'Metacritic',
  }, {
    id: 'budget',
    name: 'Budget',
  }, {
    id: 'boxOffice',
    name: 'Box Office',
  }, {
    id: 'ratio',
    name: 'Ratio',
    formatter: (val: number): string => String(Math.round((val + Number.EPSILON) * 100) / 100),
  }];
  const defaultFormatter = (val: number | string):string => String(val);

  const handleHeaderClick = (id: string) => {
    if (selectedSortingId === id) setSortInvert(!sortInvert);
    setSelectedSortingId(id);
  };

  const dataSorted = data.sort((a, b) => {
    const metricA = a[selectedSortingId as keyof Film];
    const metricB = b[selectedSortingId as keyof Film];
    const numberOpFunc = sortInvert
      ? (valA: number, valB: number) => valA - valB
      : (valA: number, valB: number) => valB - valA;
    const stringOpFunc = sortInvert
      ? (valA: string, valB: string) => valA.localeCompare(valB)
      : (valA: string, valB: string) => valB.localeCompare(valA);
    const mixedOpFuncBase = (valA: string | number, valB: string | number) => {
      if (typeof valA === 'number') return -1;
      if (typeof valB === 'number') return 1;
      return 0;
    };
    const mixedOpFunc = (valA: string | number, valB: string | number) => (sortInvert
      ? mixedOpFuncBase(valA, valB)
      : mixedOpFuncBase(valB, valA));
    if (typeof metricA === 'number' && typeof metricB === 'number') return numberOpFunc(metricA, metricB);
    if (typeof metricA === 'string' && typeof metricB === 'string') return stringOpFunc(metricA, metricB);
    return mixedOpFunc(metricA, metricB);
  });

  return (
    <TableOuter>
      <TableEl>
        <THead>
          <Tr>
            {headers.map(({ id, name }) => (
              <Th key={id} onClick={() => handleHeaderClick(id)}>{name}</Th>
            ))}
          </Tr>
        </THead>

        <TBody>
          {dataSorted.map((row, i) => (
            <Tr key={row.name}>
              {Object.entries(row).map(([key, val], i) => {
                const activeHeader = headers.find(({ id }) => id === key) || headers[0];
                const formatter = activeHeader.formatter || defaultFormatter;
                return (
                  <Td key={key}>{formatter(val)}</Td>
                );
              })}
            </Tr>
          ))}
        </TBody>
      </TableEl>
    </TableOuter>
  );
};
Table.defaultProps = defaultProps;
export default Table;


const TableOuter = styled.div`
  font-size: 12px;
`;
const TableEl = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TBody = styled.tbody``;
const THead = styled.thead``;
const Tr = styled.tr``;
const Td = styled.td`
  height: 2em;
  padding: 5px;
  border-top: 1px solid #ddd;
`;
const Th = styled(Td)`
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  border-top: none;
`;
