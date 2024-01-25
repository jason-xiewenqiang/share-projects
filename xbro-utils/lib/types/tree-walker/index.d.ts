export type NodeItem = {
    id?: string;
    parentId?: string | number;
    children?: NodeItem[];
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
export declare function walk(nodeList: NodeItem[], callback: (item: NodeItem, i: number, parents: NodeItem[], ctrl: {
    stop: boolean;
}) => void, parents?: NodeItem[], ctrl?: {
    stop: boolean;
}, childrenKey?: string): void;
