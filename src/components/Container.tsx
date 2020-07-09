import React from 'react';
import styled from 'styled-components/macro';


interface IProps {
  children: React.ReactChild;
}
const defaultProps = {};


const Container:React.FC<IProps> = ({ children }: IProps) => (
  <ContainerOuter>
    {children}
  </ContainerOuter>
);
Container.defaultProps = defaultProps;
export default Container;


const ContainerOuter = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
