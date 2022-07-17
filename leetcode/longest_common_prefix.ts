import { assert } from "console";

function longestCommonPrefix(strs: string[]): string {
    let i = 0;

    if (strs.length < 1) {
        return "";
    }

    for (let i = 0; i < strs[0].length; i++) {
        for (let word_idx = 1; word_idx < strs.length; word_idx++) {
            if (strs[word_idx].length <= i || strs[0].charAt(i) !== strs[word_idx].charAt(i)) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

function testLongestCommonPrefix(strs: string[], expected: string) {
    let observed = longestCommonPrefix(strs);
    assert(observed === expected, `${strs}: observed=${observed}, expected=${expected}`);
};

testLongestCommonPrefix([""] , "");
testLongestCommonPrefix(["", ""] , "");
testLongestCommonPrefix(["flow", ""] , "");
testLongestCommonPrefix(["", "flow"] , "");
testLongestCommonPrefix(["flower", "", "flow"] , "");
testLongestCommonPrefix(["flow"] , "flow");
testLongestCommonPrefix(["flowr", "flow"] , "flow");
testLongestCommonPrefix(["flow", "flowr"] , "flow");
testLongestCommonPrefix(["flower", "flow"] , "flow");
testLongestCommonPrefix(["flow", "flower"] , "flow");
testLongestCommonPrefix(["flower", "flow", "flight"], "fl");
testLongestCommonPrefix(["dog", "racecar", "car"] , "");
