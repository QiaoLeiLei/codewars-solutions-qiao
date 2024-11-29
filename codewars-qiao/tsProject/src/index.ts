/**
 * @author : 乔磊磊
 * @date   : 2024/10/29 15:07
 * @Desc   :
 */
export function number(array: string[]): string[] {
    return array.map((el, i) => `${i + 1}: ${el}`)
}
var strArr = ["a","b","c"]
console.log(number(strArr))
console.log(strArr)


// 获取所有纯元音组成的子字符串的数据
export function getVowelsSubstrings(str: string): string[] {
    const vowels = 'aeiou';
    let substrings: string[] = [];
    let currentSubstring = '';

    for (let char of str) {
        if (vowels.includes(char)) {
            currentSubstring += char;
        } else {
            if (currentSubstring) {
                substrings.push(currentSubstring);
                currentSubstring = '';
            }
        }
    }

    if (currentSubstring) {
        substrings.push(currentSubstring);
    }

    return substrings;
}

export function solve(s: string) {
    let arr = getVowelsSubstrings(s)
    arr.sort()
    return arr.pop();
}
solve("ccaeiougtaeff")

function extractNumbersFromString(str: string): number[] {
    const regex = /\d+/g; // 正则表达式，用于匹配一个或多个数字
    const matches = str.match(regex); // 使用match方法找到所有匹配的数字
    return matches ? matches.map(Number) : []; // 将匹配的字符串转换为数字并返回
}

// 示例使用
const stringWithNumbers = "Hello 123, how are you 456?";
const numbers = extractNumbersFromString(stringWithNumbers);
console.log(numbers); // 输出: [123, 456]