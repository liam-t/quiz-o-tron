import React from 'react';
import styled, { css, StyledComponent } from 'styled-components/macro';
import FlexHeightElement from 'components/FlexHeightElement';

interface IProps {
  flexHeight?: boolean,
}


const Container:React.FC<IProps> = ({
  children,
  flexHeight = false,
}) => {
  const Wrap = flexHeight
    ? ContainerOuterFlexHeight as StyledComponent<'div', any> /* eslint-disable-line */
    : ContainerOuter;
  return (
    <Wrap>{children}</Wrap>
  );
};
export default Container;

const sharedCss = css`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;
const ContainerOuter = styled.div`
  ${sharedCss};
`;
const ContainerOuterFlexHeight = styled(FlexHeightElement)`
  ${sharedCss};
`;
