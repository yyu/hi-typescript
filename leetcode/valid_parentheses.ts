const r2l = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
]);

function isValid(s: string): boolean {
    let stk: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        let counterpart = r2l.get(ch);
        if (counterpart === undefined) {
            stk.push(ch);
        } else {
            if (stk.length <= 0) {
                return false;
            }
            let top = stk.pop();
            if (top !== counterpart) {
                return false;
            }
        }
    }

    return stk.length == 0;
};

function test_parentheses(s: string, expected: boolean) {
    let v = isValid(s);
    console.log(`${String(v) === String(expected) ? "GOOD" : "FAIL"} - ${s}`);
}

test_parentheses("()", true);
test_parentheses("[]", true);
test_parentheses("{}", true);
test_parentheses("(", false);
test_parentheses(")", false);
test_parentheses("[", false);
test_parentheses("]", false);
test_parentheses("{", false);
test_parentheses("}", false);
test_parentheses("(]", false);
test_parentheses("(()", false);
test_parentheses("())", false);
test_parentheses("()]", false);
test_parentheses("[()", false);
test_parentheses("([]{}))", false);
test_parentheses("((())", false);
test_parentheses("(()))", false);
test_parentheses("()[]{}", true);
test_parentheses("()[{}]", true);
test_parentheses("({})[]", true);
test_parentheses("([]{})", true);
test_parentheses("{()[]}", true);
test_parentheses("([]){}", true);
test_parentheses("(()[]){}", true);
test_parentheses("(()[]{})", true);
test_parentheses("()[]{[()]}", true);