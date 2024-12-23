if (!Array.prototype.remove) {
  Array.prototype.remove = function <T>(this: T[], item: T): T[] {
    const index = this.indexOf(item);
    if (index > -1) {
      this.splice(index, 1);
    }
    return this;
  };
}

if (!Array.prototype.findAndRemove) {
  Array.prototype.findAndRemove = function <T>(
    this: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T[] {
    const index = this.findIndex(predicate);
    if (index > -1) {
      this.splice(index, 1);
    }
    return this;
  };
}

if (!Array.prototype.clear) {
  Array.prototype.clear = function <T>(this: T[]): T[] {
    this.length = 0;
    return this;
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function <T>(this: T[]): boolean {
    return this.length === 0;
  };
}
