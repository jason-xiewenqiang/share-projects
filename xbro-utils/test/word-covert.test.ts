import { test, expect } from 'vitest';
import { kebabCase, cameCase } from '../src/word-covert';

const humpWord = 'helloWorld';
const lineWord = 'hello_world';

test('测试单词转换：下划线（连接符）转驼峰', () => {
  const covert = cameCase(lineWord);
  expect(covert.toString() == humpWord.toString()).toBe(true);
});

test('测试单词转换：驼峰转下划线（连接符）', () => {
  const covert = kebabCase('helloWorld');
  expect(covert.toString() === lineWord.toString()).toBe(true);
});

test('测试单词转换：驼峰转下划线（连接符）', () => {
  const covert = kebabCase('HelloWorld');
  expect(covert.toString() === '_hello_world').toBe(true);
});
