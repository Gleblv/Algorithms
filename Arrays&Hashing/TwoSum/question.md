# Two Sum

Solved

Easy

---

Дан массив целых чисел `nums` и целое число `target`. Необходимо найти такие индексы `i` и `j`, что:

nums[i]+nums[j]=targetnums[i] + nums[j] = targetnums[i]+nums[j]=target

при этом `i ≠ j`.

Гарантируется, что для каждого входного массива существует ровно одна такая пара индексов.

Верните ответ в виде массива, где **меньший индекс идёт первым**.

---

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that _every_ input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

**Example 1:**

```java
Input:
nums = [3,4,5,6], target = 7

Output: [0,1]

```

Copy

Explanation: `nums[0] + nums[1] == 7`, so we return `[0,  1]`.

**Example 2:**

```java
Input: nums = [4,5,6], target = 10

Output: [0,2]

```

Copy

**Example 3:**

```java
Input: nums = [5,5], target = 10

Output: [0,1]

```

Copy

**Constraints:**

- `2 <= nums.length <= 1000`
- `-10,000,000 <= nums[i] <= 10,000,000`
- `-10,000,000 <= target <= 10,000,000`
