export interface WordSign {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: PropertyKey]: any;
}

/**
 * 下划线单词装驼峰
 * @param word 英文（有下划线）
 * @returns { String } 驼峰格式
 */
export const toHump = (word: string): string => {
  if (word.includes('_')) {
    const strs = word.split('_');
    const allHums = strs
      .slice(1)
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1));
    return [strs[0], ...allHums].join('');
  }
  return word;
};

/**
 * 驼峰单词转下划线
 * @param word 英文
 * @returns { String } 下划线格式
 */
export const toUnderline = (word: string): string => {
  return word.replaceAll(/A-Z/g, function (str) {
    return `_${str.toLowerCase()}`;
  });
};
