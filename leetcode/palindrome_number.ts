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

function test(x: number, is_palindrome: boolean) {
    let correct = (is_palindrome && isPalindrome(x)) || ((!is_palindrome) && (!isPalindrome(x)));
    console.log(correct ? "GOOD - " : "FAIL - ", x);
};

test(0, true);
test(1, true);
test(11, true);
test(21, false);
test(121, true);
test(123, false);
test(-1, false);
test(-121, false);

export {};
