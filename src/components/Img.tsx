import React from 'react';
import { PuffLoader as Loader } from 'react-spinners';
import styled, { keyframes } from 'styled-components/macro';


interface Props {
  src: string,
  className?: string,
}


const Img: React.FC<Props> = ({
  src: srcProp,
  className,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const preloadedImg = new Image();
    preloadedImg.src = srcProp;
    const handler = (e: Event): void => setIsLoaded(true);
    preloadedImg.addEventListener('load', handler);
    return () => preloadedImg.removeEventListener('load', handler);
  }, [srcProp]);

  if (!isLoaded) {
    return (
      <FallbackElement>
        <Loader />
      </FallbackElement>
    );
  } else {
    return (
      <Wrap>
        <ImgElement
          src={srcProp}
          className={className}
          alt=""
        />
        <Flat />
      </Wrap>
    );
  }
};
export default Img;

const Wrap = styled.div`
  animation: ${keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
  `} 300ms 100ms both;
`;

const ImgElement = styled.img``;

const Flat = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FallbackElement = styled.div`
  animation: ${keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
  `} 300ms 300ms both;
`;
