function kgToLbs(weight: string | number): number {
  // Narrowing
  if(typeof weight === 'number'){
    return weight * 2.2;
  } else {
    return parseFloat(weight) * 2.2;
  }
}

console.log(kgToLbs(20));
console.log(kgToLbs('20'));
