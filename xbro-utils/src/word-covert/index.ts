export interface WordSign {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: PropertyKey]: any;
}

/**
 * 下划线单词装驼峰
 * @param word 英文（有下划线）
 * @example <caption>cameCase('hello_world')</caption>
 * // returns helloWorld
 * @returns { String } 驼峰格式
 * @see {@link more} for further information.
 * @see {@link https://www.lodashjs.com/docs/lodash.camelCase|lodash.camelCase}
 */
export const cameCase = (word: string, connector = '_'): string => {
  if (word.includes(connector)) {
    const strs = word.split(connector);
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
 * @example <caption>kebabCase('helloWorld')</caption>
 * // returns hello_world
 * @returns { String } 下划线格式
 * @see {@link more} for further information.
 * @see {@link https://www.lodashjs.com/docs/lodash.kebabCase|lodash.kebabCase}
 */
export const kebabCase = (word: string, connector = '_'): string => {
  const cases = word.match(/[A-Z][a-z]{0,}/g) || [];
  const firstWord = word.replace(cases.join(''), '');
  return (
    firstWord +
    cases.reduce((result: string, word: string) => {
      return result + connector + word.toLowerCase();
    }, '')
  );
};
