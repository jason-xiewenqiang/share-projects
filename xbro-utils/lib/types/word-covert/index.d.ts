export interface WordSign {
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
export declare const cameCase: (word: string, connector?: string) => string;
/**
 * 驼峰单词转下划线
 * @param word 英文
 * @example <caption>kebabCase('helloWorld')</caption>
 * // returns hello_world
 * @returns { String } 下划线格式
 * @see {@link more} for further information.
 * @see {@link https://www.lodashjs.com/docs/lodash.kebabCase|lodash.kebabCase}
 */
export declare const kebabCase: (word: string, connector?: string) => string;
