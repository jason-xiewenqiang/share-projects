export type NodeItem = {
  id?: string;
  parentId?: string | number;
  children?: NodeItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

/**
 * 树结构遍历函数
 * @param nodeList 节点数组
 * @param callback 遍历节点回调，传入：节点，节点索引，父级节点数组，控制器{stop:设置为true时，可以停止遍历}
 * @param parents 各级父级节点
 * @param ctrl 控制是否停止遍历
 * @param childrenKey 子项的键
 */
export function walk(
  nodeList: NodeItem[],
  callback: (
    item: NodeItem,
    i: number,
    parents: NodeItem[],
    ctrl: { stop: boolean },
  ) => void,
  parents = [] as NodeItem[],
  ctrl = { stop: false },
  childrenKey = 'children',
) {
  if (Array.isArray(nodeList)) {
    for (let i = 0, l = nodeList.length; i < l; i++) {
      callback(nodeList[i], i, parents, ctrl);
      if (!ctrl.stop) {
        const children = nodeList[i]?.[childrenKey] || [];
        const node = nodeList[i];
        parents.push(node);
        if (children && children.length) {
          walk(children, callback, [...parents], ctrl);
        }
        parents.pop();
      } else {
        break;
      }
    }
  }
}
