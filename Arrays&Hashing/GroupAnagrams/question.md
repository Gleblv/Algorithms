# Group Anagrams

Solved

Medium

Дан массив строк `strs`. Нужно сгруппировать все анаграммы вместе в подсписки. Можно вернуть результат в любом порядке.

**Анаграмма** — это строка, содержащая **те же самые символы**, что и другая строка, но в **любом порядке**.

---

Given an array of strings `strs`, group all _anagrams_ together into sublists. You may return the output in **any order**.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

**Example 1:**

```java
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

```

Copy

**Example 2:**

```java
Input: strs = ["x"]

Output: [["x"]]

```

Copy

**Example 3:**

```java
Input: strs = [""]

Output: [[""]]

```

Copy

**Constraints:**

- `1 <= strs.length <= 1000`.
- `0 <= strs[i].length <= 100`
- `strs[i]` is made up of lowercase English letters.
