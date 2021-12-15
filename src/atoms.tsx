import { atom, selector } from "recoil";

export const Categories = {
  ToDo: "ToDo",
  Doing: "Doing",
  Done: "Done",
};

export interface ICategory {
  [key: string]: string;
}

interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<ICategory>({
  key: "categories",
  default: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories") || "")
    : Categories,
});

export const currentBoard = atom({
  key: "board",
  default: localStorage.getItem("board") || Categories.ToDo,
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
