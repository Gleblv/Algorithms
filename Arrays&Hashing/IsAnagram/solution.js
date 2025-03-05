class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        /*
        Создаём массив count длиной 26 (по числу букв в английском алфавите), заполняем его нулями.
        count[i] будет хранить, сколько раз встречается буква 'a' + i (например, count[0] — количество 'a', count[1] — количество 'b' и т.д.).
        */ 
        const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            /*
            s.charCodeAt(i) — это числовой код буквы s[i].
            'a'.charCodeAt(0) — это код буквы 'a', он равен 97.
            s.charCodeAt(i) - 97 — это индекс буквы в count.
            */
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return count.every(v => v === 0);
    }
}

const test = new Solution();

console.log(test.isAnagram('racecar', 'carrace'));
console.log(test.isAnagram('jar', 'jam'));