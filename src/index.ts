let age: number = 20;

if (age < 50)
  age += 10;

console.log(age);

function calculateTax(income: number, textYear = 2022) {
  if (textYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// Objects 

type Employee = {
  readonly id: number
  name?: string
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log('Retired on ' + date);
  }
};

