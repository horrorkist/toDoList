import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { CATEGORY, toDoSelector, toDoState } from "../atoms";
import { useEffect } from "react";

const Wrapper = styled.div``;

const ToDo = styled.div`
  width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: 1px solid white;
  margin-bottom: 15px;
  background-color: #081229;
  font-size: 20px;
`;

const Buttons = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    border: none;
    cursor: pointer;
  }
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [allToDos, setAllToDos] = useRecoilState(toDoState);

  const onClick = (id: number, category: CATEGORY) => {
    const targetIndex = allToDos.findIndex((toDo) => toDo.id === id);
    setAllToDos((oldToDos) => {
      return [
        ...oldToDos.slice(0, targetIndex),
        {
          id,
          text: oldToDos[targetIndex].text,
          category,
        },
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = (id: number) => {
    const targetIndex = allToDos.findIndex((toDo) => toDo.id === id);
    setAllToDos((oldToDos) => {
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  useEffect(() => {
    const saveToDos = () => {
      localStorage.setItem("toDos", JSON.stringify(allToDos));
    };
    saveToDos();
  }, [allToDos]);

  return (
    <Wrapper>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id}>
          <span>{toDo.text}</span>
          <Buttons>
            {toDo.category !== CATEGORY.TODO ? (
              <button onClick={() => onClick(toDo.id, CATEGORY.TODO)}>
                To Do
              </button>
            ) : null}
            {toDo.category !== CATEGORY.DOING ? (
              <button onClick={() => onClick(toDo.id, CATEGORY.DOING)}>
                Doing
              </button>
            ) : null}
            {toDo.category !== CATEGORY.DONE ? (
              <button onClick={() => onClick(toDo.id, CATEGORY.DONE)}>
                Done
              </button>
            ) : null}
            <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
          </Buttons>
        </ToDo>
      ))}
    </Wrapper>
  );
}

export default ToDoList;
