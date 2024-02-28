//-------------------------------------------------
//JEDNOHuBKY
//1.
const middle = (array: number[]): void => {
  const length: number = array.length;

  if (length === 0) {
    return console.log(-1);
  }

  const isEven: boolean = length % 2 === 0;
  const isOdd: boolean = length % 2 !== 0;

  let result: number = 0;
  if (isEven) {
    result = length / 2;
  } else if (isOdd) {
    result = (length - 1) / 2;
  }
  return console.log(array[result]);
};

middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6, 7]);
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
middle([1, 2, 3, 4]);
middle([]);

//-------------------------------------------------
// Napište funkci fairSplit, která obdrží řetězec rozdělí jej na dvě poloviny. Pokud je délka řetězce lichá, bude první polovina o jeden znak delší. Funkce vrátí pole s dvěma řetězci. Například pro řetězec "TypeScript" vrátíte pole ["TypeS", "cript"].

const fairSplit = (value: string): string[] => {
  const length: number = value.length;
  const isEven: boolean = length % 2 === 0;
  const halfLength: number = Math.floor(length / 2);

  if (isEven) {
    return [value.slice(0, halfLength), value.slice(halfLength)];
  }
  return [value.slice(0, halfLength + 1), value.slice(halfLength + 1)];
};

console.log(fairSplit('TypeScript'));
console.log(fairSplit('javscript'));
console.log(fairSplit('tři'));

// //------------------------------------------------
// Napište funkci rotate, která obdrží řetězec, a vrátí nový řetězec, ve kterém jsou všechny znaky posunuty o jedno doprava. Například pro řetězec "TypeScript" vrátíte "pTypeScri".

const rotate = (value: string): string => {
  const letter: string = value.slice(value.length - 1);
  const remain: string = value.slice(0, value.length - 1);
  const newString: string = letter + remain;
  return newString;
};

console.log(rotate('Typescript'));
console.log(rotate('javscript'));
console.log(rotate('tři'));

// //----------------------------------------------------------
// Upravte funkci rotate tak, aby jako druhý parametr přijímala výčtový typ udávající směr rotace. Například pro řetězec "TypeScript" a směr right vrátíte "pTypeScri", pro směr left vrátíte "ypeScripT".

const rotateToSide = (value: string, side: 'left' | 'right'): string | null => {
  const length: number = value.length;

  if (side === 'right') {
    const letter: string = value[length - 1];
    const remain: string = value.slice(0, length - 1);
    return letter + remain;
  }

  if (side === 'left') {
    const letter: string = value[0];
    const remain: string = value.slice(1);
    return remain + letter;
  }

  return null;
};

console.log(rotateToSide('Typescript', 'right'));
console.log(rotateToSide('Typescript', 'left'));
