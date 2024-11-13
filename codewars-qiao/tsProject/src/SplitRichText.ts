/**
 * @author : 乔磊磊
 * @date   : 2024/11/12 16:17
 * @Desc   :
 */
/**
 * Splits rich text into an array of strings while preserving color information.
 * @param {string} text - The rich text to be split.
 * @returns {string[]}
 */
export function splitRichText(text: string): string[] {
  const tagRegex = /(<\/?[^>]+>)/g;
  const parts = text.split(tagRegex);
  const filteredParts = parts.filter(item => item !== '');
  const result = [];

  let currentColor = '';
  for (let i = 0; i < filteredParts.length; i++) {
    if (filteredParts[i].startsWith('<color=')) {
      currentColor = filteredParts[i];
    } else if (filteredParts[i] === '</color>') {
      currentColor = '';
    } else if (filteredParts[i].trim() !== '') {
      result.push(currentColor + filteredParts[i] + (currentColor ? '</color>' : ''));
    }
  }

  return result;
}

console.log(splitRichText('<color=#0fffff>这是</color><color=#ff0000>富文本</color>222222<color=#00ff00>打字机</color><color=#0000ff>效果</color>'));

export function richTextToText(text: string): string {
  return text.replace(/<\/?[^>]+>/g, '');
}

console.log(richTextToText('<color=#0fffff>这是</color><color=#ff0000>富文本</color>11111111<color=#00ff00>打字机</color><color=#0000ff>效果</color>'));

export function getRichColor(text: string): string[] {
  const tagRegex = /(<\/?[^>]+>)/g;
  const parts = text.split(tagRegex);
  const result: string[] = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith('<color=')) {
      result.push(parts[i])
    } else if (parts[i] === '</color>') {
      result.push(parts[i])
    }
  }
  return result;
}
console.log(getRichColor('<color=#0fffff>这是</color><color=#ff0000>富文本</color>11111111<color=#00ff00>打字机</color><color=#0000ff>效果</color>'));
