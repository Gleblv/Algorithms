class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let str = "";

    for (const s of strs) {
      str += s.length.toString() + "#" + s;
    }

    return str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const strs = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        if (j > str.length) {
          break;
        }

        j++;
      }

      const lenght = +str.slice(i, j);
      const arrStr = str.slice(j + 1, j + 1 + lenght);

      strs.push(arrStr);

      i = j + 1 + lenght;
    }

    return strs;
  }
}

const reader = new Solution();

console.log(reader.decode("2#we3#say1#:3#yes10#!@#$%^&*()"));
