export const parseNumber = (input: string | number):number => {
  if (typeof input === 'number') return input;
  const cleaned = input.replace(/[^\d.-]/g, '');
  return Number(cleaned);
};

export const parseString = (input: string | number):string => String(input);
