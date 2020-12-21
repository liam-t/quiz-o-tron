import React from 'react';
import styled from 'styled-components';
import FlexHeightElement from 'components/FlexHeightElement';

interface Props {
  title: string,
  description?: string,
  image?: string,
  onClick: () => void,
}
const defaultProps = {};


const RoundTitleScreen:React.FC<Props> = ({
  title,
  description,
  image,
  onClick,
}) => (
  <RoundTitleScreenOuter onClick={onClick}>
    {image && <Img url={image} />}
    <Content>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Content>
  </RoundTitleScreenOuter>
);
RoundTitleScreen.defaultProps = defaultProps;
export default RoundTitleScreen;


const RoundTitleScreenOuter = styled(FlexHeightElement)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Content = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px;
  color: white;
  text-align: center;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0 0 0.5em;
  text-shadow: 0 0 2em rgba(0, 0, 0, 0.4);
`;
const Description = styled.p`
  margin: 0;
  max-width: 40em;
  margin: 0 auto;
`;
