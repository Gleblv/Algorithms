class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(nums.length).fill(1);

    // При проходе слева направо мы вместо числа nums[i] подставляем в массив res по индексу i произведение всех чисел слева от nums[i]
    // nums = [4, 6, 7, 9];
    // res = [1, 4, 24, 168];
    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }

    let postfix = 1;

    // На первом проходе res[i] содержит произведение всех элементов слева от i.
    // Но нам ещё нужно домножить на произведение всех элементов справа от i.
    // И вот тут мы вводим postfix — это переменная, которая в момент обработки i содержит произведение всех элементов правее индекса i.
    // oldRes = [1, 4, 24, 168];
    // res = [378, 252, 216, 168]
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= postfix;
      postfix *= nums[i];
    }

    return res;
  }
}

const test = new Solution();

console.log(test.productExceptSelf([1, 2, 4, 6]));
console.log(test.productExceptSelf([-1, 0, 1, 2, 3]));
