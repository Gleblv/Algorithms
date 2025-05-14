# Top K Frequent Elements

**Дано**: целочисленный массив `nums` и целое число `k`.

**Задача**: вернуть `k` наиболее часто встречающихся элементов в массиве.

**Гарантируется**, что ответ всегда **единственный** (не будет двух разных корректных вариантов).

**Порядок элементов в ответе может быть любым**.

---

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements within the array.

The test cases are generated such that the answer is always **unique**.

You may return the output in **any order**.

**Example 1:**

```java
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

```

Copy

**Example 2:**

```java
Input: nums = [7,7], k = 1

Output: [7]

```

Copy

**Constraints:**

- `1 <= nums.length <= 10^4`.
- `-1000 <= nums[i] <= 1000`
- `1 <= k <= number of distinct elements in nums`.
