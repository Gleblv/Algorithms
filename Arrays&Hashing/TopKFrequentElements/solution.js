class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Создаем хеш-таблицу где ключ - число, значение - кол-во повторений
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        // Создаем массив с группами (массивами)
        const arr = new Array(nums.length + 1).fill(0).map(() => []);

        // Добавляем каждое число в группу иднекс которой равен кол-ву повторений этого числа
        for (const [num, count] of map) {
            arr[count].push(num);
        }

        const output = [];

        // Добавляем нужное кол-во чисел в итоговый массив
        for (let i = nums.length; i >= 0; i--) {
            for (const n of arr[i]) {
                output.push(n);

                if (output.length === k) {
                    return output;
                }
            }
        }
    }
}
