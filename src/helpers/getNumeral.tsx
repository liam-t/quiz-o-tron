function getNumeral(num: number): string {
  let numCopy = num;
  let str = '';
  const roman: {[key:string]:number} = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  Object.keys(roman).forEach((key): void => {
    const val: number = roman[key];
    const q = Math.floor(numCopy / val);
    numCopy -= q * roman[key];
    str += key.repeat(q);
  });

  return str;
}

export default getNumeral;
