import { test, expect } from 'vitest';

import walk, { NodeItem } from '../src/tree-walker';

const tree: NodeItem[] = [
  {
    id: '1',
    name: '1',
    children: [
      { id: '1-1', name: '1-1', parentId: '1' },
      { id: '1-2', name: '1-2', parentId: '1' },
      { id: '1-3', name: '1-3', parentId: '1' },
      { id: '1-4', name: '1-4', parentId: '1' },
    ],
  },
  {
    id: '2',
    name: '2',
    children: [
      { id: '2-1', name: '2-1', parentId: '2' },
      { id: '2-2', name: '2-2', parentId: '2' },
      { id: '2-3', name: '2-3', parentId: '2' },
      { id: '2-4', name: '2-4', parentId: '2' },
      {
        id: '2-5',
        name: '2-5',
        parentId: '2',
        children: [{ id: '2-5-1', name: '2-5-1', parentId: '2-5' }],
      },
    ],
  },
];

// 匹配目标节点
const findNode = (id: string) => {
  let node;
  const ctrl = { stop: false };
  walk(
    tree,
    (item) => {
      if (item.id === id) {
        node = item;
        ctrl.stop = true;
      }
    },
    [],
    ctrl,
  );
  return !!node;
};

const getNodePath = (id: string) => {
  let path = '';
  const ctrl = { stop: false };
  walk(
    tree,
    (item, index, parent) => {
      if (item.id === id) {
        console.log(index);
        path = [...parent.map((p) => p.id), item.id].join('/');
        ctrl.stop = true;
      }
    },
    [],
    ctrl,
  );
  return path;
};

test('test tree exit "1"', () => {
  expect(findNode('1')).toBe(true);
});

test('test tree not exit "3"', () => {
  expect(findNode('3')).toBe(false);
});

test('test tree exit treeId "2"', () => {
  expect(findNode('2')).toBe(true);
});

test('test tree treeIdPath "2-5-1" tobe "2/2-5/2-5-1"', () => {
  expect(getNodePath('2-5-1')).toBe('2/2-5/2-5-1');
});

test('test tree treeIdPath "2-5-2" to be ""', () => {
  expect(getNodePath('2-5-2')).toBe('');
});
