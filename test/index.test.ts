import '../index';

describe('Array.prototype.remove', () => {
  it('should remove the specified item from the array', () => {
    const arr = [1, 2, 3, 4];
    arr.remove(3);
    expect(arr).toEqual([1, 2, 4]);
  });

  it('should not modify the array if the item is not found', () => {
    const arr = [1, 2, 3, 4];
    arr.remove(5);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe('Array.prototype.findAndRemove', () => {
  it('should remove the item that matches the predicate', () => {
    const arr = [1, 2, 3, 4];
    arr.findAndRemove((item) => item === 3);
    expect(arr).toEqual([1, 2, 4]);
  });

  it('should not modify the array if no item matches the predicate', () => {
    const arr = [1, 2, 3, 4];
    arr.findAndRemove((item) => item === 5);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe('Array.prototype.clear', () => {
  it('should remove all items from the array', () => {
    const arr = [1, 2, 3, 4];
    arr.clear();
    expect(arr).toEqual([]);
  });
});

describe('Array.prototype.isEmpty', () => {
  it('should return true if the array is empty', () => {
    const arr: number[] = [];
    expect(arr.isEmpty()).toBe(true);
  });

  it('should return false if the array is not empty', () => {
    const arr = [1, 2, 3, 4];
    expect(arr.isEmpty()).toBe(false);
  });
});