import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector, toDoState } from "../atoms";
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
  const [category, setCategory] = useRecoilState(categoryState);

  const onClick = (id: number, category: string) => {
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
            {Object.keys(category).map((element) => {
              if (toDo.category !== element) {
                return (
                  <button
                    key={element}
                    onClick={() => onClick(toDo.id, element)}
                  >
                    {element}
                  </button>
                );
              }
            })}
            {/* {toDo.category !== Categories.ToDo ? (
              <button onClick={() => onClick(toDo.id, Categories.ToDo)}>
                To Do
              </button>
            ) : null}
            {toDo.category !== Categories.Doing ? (
              <button onClick={() => onClick(toDo.id, Categories.Doing)}>
                Doing
              </button>
            ) : null}
            {toDo.category !== Categories.Done ? (
              <button onClick={() => onClick(toDo.id, Categories.Done)}>
                Done
              </button>
            ) : null} */}
            <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
          </Buttons>
        </ToDo>
      ))}
    </Wrapper>
  );
}

export default ToDoList;
