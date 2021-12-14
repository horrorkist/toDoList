import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentBoard, toDoState } from "../atoms";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm();
  const board = useRecoilValue(currentBoard);
  const [allToDos, setAllToDos] = useRecoilState(toDoState);

  const onSubmit = ({ toDo }: any) => {
    setAllToDos((oldToDos) => {
      return [...oldToDos, { text: toDo, id: Date.now(), category: board }];
    });
    setValue("toDo", "");
  };

  useEffect(() => {
    const saveToDos = () => {
      localStorage.setItem("toDos", JSON.stringify(allToDos));
    };
    saveToDos();
  }, [allToDos]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: true, maxLength: 20 })}
          type="text"
          placeholder="Add a ToDo..."
        />
        <button>Add</button>
      </form>
    </Wrapper>
  );
}

export default CreateToDo;
