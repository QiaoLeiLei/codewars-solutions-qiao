/**
 * @author : 乔磊磊
 * @date   : 2024/11/12 16:17
 * @Desc   :
 */
/**
 * Splits rich text into an array of strings while preserving color information.
 * @param {string} text - The rich text to be split.
 * @returns {string[]} An array of strings with color information preserved.
 */
export function splitRichText(text: string) {
  const tagRegex = /(<\/?[^>]+>)/g;
  const parts = text.split(tagRegex);
  const result = [];

  let currentColor = '';
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith('<color=')) {
      currentColor = parts[i];
    } else if (parts[i] === '</color>') {
      currentColor = '';
    } else if (parts[i].trim() !== '') {
      result.push(currentColor + parts[i] + (currentColor ? '</color>' : ''));
    }
  }

  return result;
}

console.log(splitRichText('<color=#0fffff>这是</color><color=#ff0000>富文本</color><color=#00ff00>打字机</color><color=#0000ff>效果</color>'));