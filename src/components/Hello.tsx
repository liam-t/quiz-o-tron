import React from 'react';

interface Props {
  name?: string;
}

const Hello:React.FC<Props> = ({ name }: Props) => (
  <div>
    {name && <p>{name}</p>}
  </div>
);

export default Hello;
