// import { useRef, useEffect } from 'react';

// const useEventListener = <T>(
//   eventName: string,
//   handler: <K extends keyof WindowEventMap>(event: K) => void,
//   element = window,
// ): void => {
//   const savedHandler = useRef<typeof handler>();

//   useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);

//   useEffect(() => {
//     const isSupported = element && element.addEventListener;
//     if (!isSupported) return undefined;

//     const eventListener = (event: T) => savedHandler.current(event);
//     element.addEventListener(eventName, eventListener);
//     return () => element.removeEventListener(eventName, eventListener);
//   }, [eventName, element]);
// };

// export { useEventListener };

export const nothing = {};
