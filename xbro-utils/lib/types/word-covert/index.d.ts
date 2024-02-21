export interface WordSign {
    [key: PropertyKey]: any;
}
/**
 * 下划线单词装驼峰
 * @param word 英文（有下划线）
 * @returns { String } 驼峰格式
 */
export declare const toHump: (word: string) => string;
/**
 * 驼峰单词转下划线
 * @param word 英文
 * @returns { String } 下划线格式
 */
export declare const toUnderline: (word: string) => string;
