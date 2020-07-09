import React from 'react';
import styled from 'styled-components';


interface IProps {}
const defaultProps = {};


const Boilerplate:React.FC<IProps> = ({}: IProps) => (
  <BoilerplateOuter>
    hi
  </BoilerplateOuter>
);
Boilerplate.defaultProps = defaultProps;
export default Boilerplate;


const BoilerplateOuter = styled.div``;
