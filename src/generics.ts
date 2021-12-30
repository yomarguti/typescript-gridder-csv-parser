class Collection<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayStrings = new Collection<string>(['a', 'b', 'c', 'd']);
const resArrayStrings = arrayStrings.get(2);
console.log('resArrayStrings:', resArrayStrings);

const arrayNumbers = new Collection([1, 3, 4, 5, 6]);
const resArrayNumber = arrayNumbers.get(1);
console.log('resArrayNumber:', resArrayNumber);

//Generics Constraits
class Vehicle {
  print(): void {
    console.log('Im a vehicle');
  }
}

class House {
  print(): void {
    console.log('Im a house');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]) {
  arr.forEach((item) => item.print());
}

printHouseOrCars([new House(), new House()]);
