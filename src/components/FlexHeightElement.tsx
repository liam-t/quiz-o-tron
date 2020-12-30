import React from 'react';
import styled from 'styled-components/macro';


interface Props {
  className?: string,
  onClick?: () => void,
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>,
}


const FlexHeightElement:React.FC<Props> = ({
  children,
  className,
  onClick,
  as,
  ...rest
}) => (
  <FlexHeightElementOuter as={as} className={className} onClick={onClick} {...rest}>
    {children}
  </FlexHeightElementOuter>
);
export default FlexHeightElement;


const FlexHeightElementOuter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
