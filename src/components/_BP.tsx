import React from 'react';
import styled from 'styled-components/macro';


interface Props {}


const Boilerplate:React.FC<Props> = ({}) => (
  <BoilerplateOuter>
    Hi, I&apos;m Boilerplate!
  </BoilerplateOuter>
);
export default Boilerplate;


const BoilerplateOuter = styled.div``;
