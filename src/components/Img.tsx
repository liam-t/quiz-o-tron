import React, { Suspense } from 'react';
import { PuffLoader as Loader } from 'react-spinners';
import { useImage } from 'react-image';
import styled, { keyframes } from 'styled-components/macro';


interface Props {
  src: string,
  className?: string,
}


const Img: React.FC<Props> = ({
  src: srcProp,
  className,
}) => {
  const { src } = useImage({ srcList: srcProp });
  return (
    <div className={className}>
      <ImgElement src={src} alt="" className={className} />
    </div>
  );
};

const WithSuspense: React.FC<Props> = (props) => (
  <Suspense fallback={<FallbackElement><Loader /></FallbackElement>}><Img {...props} /></Suspense>
);

export default WithSuspense;

const ImgElement = styled.img`
  max-width: 100%;
`;

const FallbackElement = styled.div`
  animation: ${keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
  `} 300ms 300ms both;
`;
