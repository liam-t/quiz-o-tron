import React from 'react';
import styled from 'styled-components/macro';


interface Props {
  className?: string,
  onClick?: () => void,
}


const FlexHeightElement:React.FC<Props> = ({ children, className, onClick }) => (
  <FlexHeightElementOuter className={className} onClick={onClick}>
    {children}
  </FlexHeightElementOuter>
);
export default FlexHeightElement;


const FlexHeightElementOuter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
