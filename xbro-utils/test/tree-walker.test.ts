import { test, expect } from "vitest";

import { NodeItem, walk } from '../src/tree-walker';

const tree: NodeItem[] = [
  {
    id: "1",
    name: "1",
    children: [
      { id: "1-1", name: "1-1", parentId: "1" },
      { id: "1-2", name: "1-2", parentId: "1" },
      { id: "1-3", name: "1-3", parentId: "1" },
      { id: "1-4", name: "1-4", parentId: "1" },
    ],
  },
  {
    id: "2",
    name: "2",
    children: [
      { id: "2-1", name: "2-1", parentId: "2" },
      { id: "2-2", name: "2-2", parentId: "2" },
      { id: "2-3", name: "2-3", parentId: "2" },
      { id: "2-4", name: "2-4", parentId: "2" },
    ],
  },
];

const findNode = (id: string) => {
  let node;
  const ctrl = { stop: false };
  walk(tree, (item) => {
    if (item.id === id) {
      node = item;
      ctrl.stop = true;
    }
  }, [], ctrl);
  return !!node
}

test('test tree exit "1"', () => {

  expect(findNode('1')).toBe(true);

})

test('test tree not exit "3"', () => {

  expect(findNode('3')).toBe(false);

})

test('test tree exit treeId "2"', () => {

  expect(findNode('2')).toBe(true);

})
