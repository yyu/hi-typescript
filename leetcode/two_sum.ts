function twoSum(nums: number[], target: number): number[] {
    var num_map = new Map<number, number>();

    for (const [idx, val] of nums.entries()) {
        let k = target - val;
        let j = num_map.get(k);
        if (j !== undefined) {
            return [j, idx];
        } else {
            num_map.set(val, idx);
        }
    }
    return [];
};

function test(nums: number[], target: number, expected: number[]) {
    let result = twoSum(nums, target);
    if (result.length == 2 && result[0] == expected[0] && result[1] == expected[1]) {
        console.log("GOOD - ", nums, ", ", target, ": ", expected);
    } else {
        console.log("FAIL - ", nums, ", ", target, ": ", expected, ". Got ", result);
    }
}

test([2, 7, 11, 15], 9, [0, 1]);
test([3, 2, 4], 6, [1, 2]);
test([3, 3], 6, [0, 1]);

test([1, 3, 5, 7], 4, [0, 1]);
test([1, 3, 5, 7], 8, [1, 2]);
test([1, 3, 5, 7], 6, [0, 2]);
test([1, 3, 5, 7], 12, [2, 3]);