class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Set оставит только уникальные значения
        const set = new Set(nums);

        // Если кол-во эл-ов у set меньше, то были повторяющиеся элементы
        if (set.size < nums.length) {
            return true;
        } else {
            return false;
        }
    }
}