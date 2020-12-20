import React from 'react';
import styled from 'styled-components';


interface Props {}
const defaultProps = {};


const Boilerplate:React.FC<Props> = ({}) => (
  <BoilerplateOuter>
    hi
  </BoilerplateOuter>
);
Boilerplate.defaultProps = defaultProps;
export default Boilerplate;


const BoilerplateOuter = styled.div``;
