import React, { Suspense as ReactSuspense } from 'react';
import { CircleLoader } from 'react-spinners';


interface Props {
  fallback?: React.FC,
}

const FallbackDefault: React.FC = () => (
  <CircleLoader />
);

const Suspense:React.FC<Props> = ({
  children,
  fallback: Fallback = FallbackDefault,
}) => (
  <ReactSuspense fallback={<Fallback />}>
    {children}
  </ReactSuspense>
);
export default Suspense;
