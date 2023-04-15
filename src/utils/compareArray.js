export const isSameUser = (a, b) => a.id === b.id;

export const compareArr = (arrA, arrB, compareFunction) =>
  arrA.filter(arrAValue => !arrB.some(arrBValue => compareFunction(arrAValue, arrBValue)));
