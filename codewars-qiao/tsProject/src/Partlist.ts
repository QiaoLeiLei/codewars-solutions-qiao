/**
 * @author : 乔磊磊
 * @date   : 2024/11/12 10:14
 * @Desc   :
 */
export function partlist(arr: string[]): string[][] {
    if (arr.length < 2) {
        return []
    }
    let result = []
    for (let i = 1; i < arr.length; i++) {
        let a = arr.slice(0, i).join(' ')
        let b = arr.slice(i).join(' ')
        result.push([a, b])
    }
    return result
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
