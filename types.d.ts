declare global {
  interface Array<T> {
    /**
     * Removes the first occurrence of the specified item from the array.
     * @param item The item to remove.
     * @returns The modified array.
     */
    remove(item: T): this;

    /**
     * Finds the first element that matches the predicate and removes it from the array.
     * @param predicate A function to test each element of the array.
     * @returns The modified array.
     */
    findAndRemove(predicate: (value: T, index: number, array: T[]) => boolean): this;

    /**
     * Removes all elements from the array.
     * @returns The modified array.
     */
    clear(): this;

    /**
     * Checks if the array is empty.
     * @returns `true` if the array is empty, otherwise `false`.
     */
    isEmpty(): boolean;
  }
}

export {};
