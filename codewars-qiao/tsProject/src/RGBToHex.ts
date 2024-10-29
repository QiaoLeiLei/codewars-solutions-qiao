/**
 * @author : 乔磊磊
 * @date   : 2024/10/29 15:07
 * @Desc   : RGB颜色转换为十六进制颜色
 */
export function rgb(r: number, g: number, b: number): string {
    const toHex = (value: number): string => {
        // 将数值限制在0到255之间
        value = Math.max(0, Math.min(255, value));
        // 将数值转换为16进制，并转换为大写字母
        const hex = value.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    };

    // 返回16进制颜色值
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(rgb(255, 255, 255)); // 输出：FFFFFF