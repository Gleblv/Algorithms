class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            /*
            Отнимая от target nums[i] мы получаем число x которое в сумме с nums[i] дает target
            После мы проверяем записывали мы x в map в формате {число: индекс числа в nums}
            Если такое число есть, то мы знаем два числа и их индексы которые в сумме дают target
            Если нет то записываем его в map
            */
            const diff = target - nums[i];

            if (map.has(diff)) {
                return [map.get(diff), i];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}

const test = new Solution();

console.log(test.twoSum([3,4,5,6], 7));
console.log(test.twoSum([4,5,6], 10));