// Написать свой метод myFilter в прототипе массивов

const arr = [1, 5, -4, 3, -2, 0];

Array.prototype.myFilter = function <T, S extends T>(func: (value: T, index: number, array: T[]) => value is S): S[] {
  const result: S[] = [];
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (func(value, i, this)) {
      result.push(value);
    }
  }
  return result;
};

console.log(arr.myFilter((value) => value > 0));
