import { test, expect } from "vitest";

const tree = [
  {
    id: "1",
    name: "1",
    parentId: null,
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
    parentId: null,
    children: [
      { id: "2-1", name: "2-1", parentId: "2" },
      { id: "2-2", name: "2-2", parentId: "2" },
      { id: "2-3", name: "2-3", parentId: "2" },
      { id: "2-4", name: "2-4", parentId: "2" },
    ],
  },
];
