function romanToInt0(s: string): number {
    let roman_tables: {[key:string]:number}[] = [
        {},
        {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        },
        {
            "II": 2,
            "XX": 20,
            "CC": 200,
            "MM": 2000,
            "IV": 4,
            "XL": 40,
            "CD": 400,
            "VI": 6,
            "LX": 60,
            "DC": 600,
            "IX": 9,
            "XC": 90,
            "CM": 900,
        },
        {
            "III": 3,
            "XXX": 30,
            "CCC": 300,
            "MMM": 3000,
            "VII": 7,
            "LXX": 70,
            "DCC": 700,
        },
        {
            "VIII": 8,
            "LXXX": 80,
            "DCCC": 800,
        },
    ];

    let result = 0;
    let len = s.length;
    let i = 0;

    function greedy_find(): number {
        for (let nr_digits = 4; nr_digits > 0; nr_digits--) {
            if (i + nr_digits <= len) {
                let subs = s.substring(i, i + nr_digits);
                let r2i = roman_tables[nr_digits];
                for (const roman_digits in r2i) {
                    if (subs === roman_digits) {
                        result += r2i[roman_digits];
                        return i + nr_digits;
                    }
                }
            }
        }
        throw new Error("should never reach here");
    }

    while (i < len) {
        i = greedy_find();
    }

    return result;
};

const RomanTables: Map<string, number>[] = [
    new Map(),
    new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]),
    new Map([
        ["II", 2],
        ["XX", 20],
        ["CC", 200],
        ["MM", 2000],
        ["IV", 4],
        ["XL", 40],
        ["CD", 400],
        ["VI", 6],
        ["LX", 60],
        ["DC", 600],
        ["IX", 9],
        ["XC", 90],
        ["CM", 900],
    ]),
    new Map([
        ["III", 3],
        ["XXX", 30],
        ["CCC", 300],
        ["MMM", 3000],
        ["VII", 7],
        ["LXX", 70],
        ["DCC", 700],
    ]),
    new Map([
        ["VIII", 8],
        ["LXXX", 80],
        ["DCCC", 800],
    ]),
];

function greedy_find(s: string, i: number, result: number) {
    let len = s.length;
    for (let nr_digits = 4; nr_digits > 0; nr_digits--) {
        if (i + nr_digits <= len) {
            let subs = s.substring(i, i + nr_digits);
            let r2i = RomanTables[nr_digits];
            for (const [roman, arabic] of r2i) {
                if (subs === roman) {
                    return [i + nr_digits, result + arabic];
                }
            }
        }
    }
    throw new Error("should never reach here");
};

function romanToInt(s: string): number {
    let result = 0;
    let len = s.length;
    let i = 0;

    while (i < len) {
        [i, result] = greedy_find(s, i, result);
    }

    return result;
};

function test(s: string, n: number) {
    let x = romanToInt(s);
    if (x === n) {
        console.log(`GOOD - ${s} = ${n}`);
    } else {
        console.log(`FAIL - ${s} = ${n} but got ${x}`);
    }
};

test("I", 1);
test("II", 2);
test("III", 3);
test("IV", 4);
test("V", 5);
test("VI", 6);
test("VII", 7);
test("VIII", 8);
test("IX", 9);
test("X", 10);
test("XI", 11);
test("XII", 12);
test("XIII", 13);
test("XIV", 14);
test("XV", 15);
test("XVI", 16);
test("XVII", 17);
test("XVIII", 18);
test("XIX", 19);
test("XX", 20);
test("XXII", 22);
test("XXVII", 27);
test("LVIII", 58);
test("XXXIX", 39);
test("CCXLVI", 246);
test("DCCLXXXIX", 789);
test("MMCDXXI", 2421);
test("CLX", 160);
test("CCVII", 207);
test("MIX", 1009);
test("MLXVI", 1066);
test("MDCCLXXVI", 1776);
test("MCMXVIII", 1918);
test("MCMLIV", 1954);
test("MCMXCIV", 1994);
test("MMXIV", 2014);
test("MMMCMXCIX", 3999);
test("MMXXII", 2022);

export {};
