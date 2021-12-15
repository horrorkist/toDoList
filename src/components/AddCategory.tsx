import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 0;
  bottom: 0;
  right: -220px;
`;

const Button = styled.div<{ isActive: boolean }>`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    position: absolute;
    :first-child {
      width: 20px;
      height: 2px;
      background-color: white;
    }
    :last-child {
      display: ${(props) => (props.isActive ? "none" : "block")};
      width: 2px;
      height: 20px;
      background-color: white;
    }
  }
`;

const Form = styled.form`
  transform: scaleX(0);
  opacity: 0;
  transition: all 0.5s ease;
  transform-origin: center left;
  &.active {
    transform: scaleX(1);
    opacity: 1;
  }
`;

function AddCategory() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = ({ newCategory }: any) => {
    console.log(newCategory);
    setValue("newCategory", "");
  };
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <Wrapper>
      <Button isActive={active} onClick={onClick}>
        <div></div>
        <div></div>
      </Button>
      <Form
        className={active ? "active" : ""}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("newCategory", { required: true, maxLength: 15 })}
          type="text"
          placeholder="Add New Category..."
        />
        <button>Add</button>
      </Form>
    </Wrapper>
  );
}

export default AddCategory;
