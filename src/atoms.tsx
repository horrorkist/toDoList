import { atom, selector } from "recoil";

export enum CATEGORY {
  "TODO",
  "DOING",
  "DONE",
}

interface IToDo {
  text: string;
  id: number;
  category: CATEGORY;
}

export const currentBoard = atom({
  key: "board",
  default: Number(localStorage.getItem("board")) || CATEGORY.TODO,
});

export const categoryState = atom({
  key: "categories",
  default: [],
});

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default:
    localStorage.getItem("toDos") !== null
      ? JSON.parse(localStorage.getItem("toDos") || "")
      : [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(currentBoard);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
