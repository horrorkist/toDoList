import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryState, currentBoard } from "../atoms";
import ManageCategory from "./ManageCategory";

const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
`;

const Label = styled.label`
  font-size: 20px;
  color: white;
`;

function SelectCategory() {
  const [board, setBoard] = useRecoilState(currentBoard);
  const [category, setCategory] = useRecoilState(categoryState);
  useEffect(() => {
    const saveCurrentBoard = () => {
      localStorage.setItem("board", board + "");
    };
    saveCurrentBoard();
  }, [board]);
  return (
    <Wrapper>
      <SelectWrapper>
        <Label htmlFor="board">Category: </Label>
        <select
          onChange={(e) => {
            setBoard(e.currentTarget.value);
          }}
          name="board"
          id="board"
          value={board}
        >
          {Object.keys(category).map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
          {/* <option value={Categories.ToDo}>To Do</option>
          <option value={Categories.Doing}>Doing</option>
          <option value={Categories.Done}>Done</option> */}
        </select>
        <ManageCategory></ManageCategory>
      </SelectWrapper>
    </Wrapper>
  );
}

export default SelectCategory;
