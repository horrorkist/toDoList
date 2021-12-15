import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CATEGORY, currentBoard } from "../atoms";
import AddCategory from "./AddCategory";

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
            setBoard(+e.currentTarget.value);
          }}
          name="board"
          id="board"
          value={board}
        >
          <option value={CATEGORY.TODO}>To Do</option>
          <option value={CATEGORY.DOING}>Doing</option>
          <option value={CATEGORY.DONE}>Done</option>
        </select>
        <AddCategory></AddCategory>
      </SelectWrapper>
    </Wrapper>
  );
}

export default SelectCategory;
