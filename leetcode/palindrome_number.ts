function isPalindrome(x: number): boolean {
    let s = x.toString();
    let len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

function test(x: number, expected: boolean) {
    if (expected) {
        console.log(isPalindrome(x) ? "GOOD - " : "FAIL - ", x);
    } else {
        console.log(isPalindrome(x) ? "FAIL - " : "GOOD - ", x);
    }
}

test(0, true);
test(121, true);
test(-121, false);
