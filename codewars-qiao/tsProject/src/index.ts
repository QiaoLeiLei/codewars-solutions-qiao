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
