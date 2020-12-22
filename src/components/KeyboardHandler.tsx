import React from 'react';


interface Props {
  onKeyDown: (e: string) => void,
}


const KeyboardHandler:React.FC<Props> = ({ onKeyDown }) => {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => onKeyDown(e.key);

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onKeyDown]);

  return null;
};
export default KeyboardHandler;
