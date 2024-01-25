[@xbro/xbro-utils](README.md) / Exports

# @xbro/xbro-utils

## Table of contents

### Type Aliases

- [NodeItem](modules.md#nodeitem)

### Functions

- [walk](modules.md#walk)

## Type Aliases

### NodeItem

Ƭ **NodeItem**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`NodeItem`](modules.md#nodeitem)[] |
| `id?` | `string` |
| `parentId?` | `string` \| `number` |

#### Defined in

[tree-walker/index.ts:1](https://github.com/jason-xiewenqiang/share-projects/blob/4445489/xbro-utils/src/tree-walker/index.ts#L1)

## Functions

### walk

▸ **walk**(`nodeList`, `callback`, `parents?`, `ctrl?`, `childrenKey?`): `void`

树结构遍历函数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nodeList` | [`NodeItem`](modules.md#nodeitem)[] | `undefined` | 节点数组 |
| `callback` | (`item`: [`NodeItem`](modules.md#nodeitem), `i`: `number`, `parents`: [`NodeItem`](modules.md#nodeitem)[], `ctrl`: \{ `stop`: `boolean`  }) => `void` | `undefined` | 遍历节点回调，传入：节点，节点索引，父级节点数组，控制器(stop - 设置为true时，可以停止遍历) |
| `parents` | [`NodeItem`](modules.md#nodeitem)[] | `undefined` | 各级父级节点 |
| `ctrl` | `Object` | `undefined` | 控制是否停止遍历 |
| `ctrl.stop` | `boolean` | `false` | - |
| `childrenKey` | `string` | `'children'` | 子项的键 |

#### Returns

`void`

#### Defined in

[tree-walker/index.ts:17](https://github.com/jason-xiewenqiang/share-projects/blob/4445489/xbro-utils/src/tree-walker/index.ts#L17)
