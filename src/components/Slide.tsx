import React from 'react';
import styled from 'styled-components/macro';
import FlexHeightElement from 'components/FlexHeightElement';
import Img from 'components/Img';
import { Slide as SlideModel } from 'models';

interface Props extends SlideModel {
  onClick: () => void,
}
const defaultProps = {};


const Slide:React.FC<Props> = ({
  title,
  copy,
  imageUrl,
  onClick,
}) => (
  <SlideOuter onClick={onClick}>
    {imageUrl && <ImgStyled src={imageUrl} key={imageUrl} />}
    <Content>
      <Title>{title}</Title>
      {copy && <Description>{copy}</Description>}
    </Content>
  </SlideOuter>
);
Slide.defaultProps = defaultProps;
export default Slide;


const SlideOuter = styled(FlexHeightElement)`
  position: relative;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
const ImgStyled = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  flex: 1 0 auto;
  min-height: 300px;
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
  margin: 0;
  /* text-shadow: 0 0 2em rgba(0, 0, 0, 0.4); */
`;
const Description = styled.p`
  margin: 0.5em 0 0;
  max-width: 40em;
  margin: 0 auto;
`;
