function removeDuplicates(nums: number[]): number {
    if (!nums.length) {
        return 0;
    }
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
};

function testRemoveDuplicates(nums: number[], expected: number[], expected_k: number) {
    console.log(nums);
    let k = removeDuplicates(nums);
    console.log(nums, k);
    let success = true;
    if (k !== expected_k) {
        success = false;
    } else {
        for (let i = 0; i < k; i++) {
            if (nums[i] !== expected[i]) {
                success = false;
                break;
            }
        }
    }
    console.log(`${success  ? "✔︎" : "✘"}`);
    console.log("--------------------------------------------------");
}

console.log("--------------------------------------------------");

testRemoveDuplicates([], [], 0);
testRemoveDuplicates([3], [3], 1);
testRemoveDuplicates([2, 3], [2, 3], 2);
testRemoveDuplicates([2, 2], [2], 1);
testRemoveDuplicates([2, 2, 3], [2, 3], 2);
testRemoveDuplicates([2, 3, 3], [2, 3], 2);
testRemoveDuplicates([2, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 2, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 3, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 3, 4, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 2, 2, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 3, 3, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 3, 4, 4, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 2, 3, 3, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 2, 3, 4, 4], [2, 3, 4], 3);
testRemoveDuplicates([2, 2, 3, 3, 4, 4], [2, 3, 4], 3);
testRemoveDuplicates([], [], 0);
