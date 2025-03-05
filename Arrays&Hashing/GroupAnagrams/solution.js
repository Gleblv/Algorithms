class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) {
            return [[strs[0]]];
        }

        const map = new Map();

        for (let s of strs) {
            const count = new Array(26).fill(0);

            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if (map.has(key)) {
                map.set(key, [...map.get(key), s])
            } else {
                map.set(key, [s]);
            }
        }

        return Array.from(map.values());
    }
}

const test = new Solution();

console.log(test.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
console.log(test.groupAnagrams(["x"]));