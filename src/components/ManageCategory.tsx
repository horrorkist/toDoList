import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { categoryState, ICategory, toDoState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 0;
  bottom: 0;
  right: -200px;
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
  margin-right: 20px;
  &.active {
    transform: scaleX(1);
    opacity: 1;
  }
`;

function ManageCategory() {
  const { register, handleSubmit, setValue } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
  } = useForm();
  const [category, setCategory] = useRecoilState(categoryState);
  const setAllToDos = useSetRecoilState(toDoState);

  const onAddSubmit = ({ newCategory }: any) => {
    const newCategories = {
      ...category,
      [newCategory]: newCategory,
    };
    setCategory(newCategories);
    setValue("newCategory", "");
  };

  const onDeleteSubmit = ({ deleteCategory }: any) => {
    if (!Object.keys(category).find((e: any) => e === deleteCategory)) {
      window.alert("No such category exists.");
      return;
    } else if (Object.keys(category).length === 1) {
      window.alert("You must have at least one category.");
      return;
    } else if (window.confirm("All ToDos in this category will be lost.")) {
      setCategory((oldCategories) => {
        const updated: ICategory = {};
        Object.keys(oldCategories).map((e) => {
          if (e !== deleteCategory) {
            updated[e] = oldCategories[e];
          }
        });
        return { ...updated };
      });
      setAllToDos((oldToDos) => {
        const updatedToDos = oldToDos.filter(
          (toDo) => toDo.category !== deleteCategory
        );
        return [...updatedToDos];
      });
      setValue2("deleteCategory", "");
    }
  };

  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const saveCategories = () => {
      localStorage.setItem("categories", JSON.stringify(category));
    };
    saveCategories();
  }, [category]);

  return (
    <Wrapper>
      <Button isActive={active} onClick={onClick}>
        <div></div>
        <div></div>
      </Button>
      <Form
        className={active ? "active" : ""}
        onSubmit={handleSubmit(onAddSubmit)}
      >
        <input
          {...register("newCategory", { required: true, maxLength: 15 })}
          type="text"
          placeholder="Add New Category..."
        />
        <button>Add</button>
      </Form>
      <Form
        className={active ? "active" : ""}
        onSubmit={handleSubmit2(onDeleteSubmit)}
      >
        <input
          {...register2("deleteCategory", { required: true, maxLength: 15 })}
          type="text"
          placeholder="Delete Category..."
        />
        <button>Delete</button>
      </Form>
    </Wrapper>
  );
}

export default ManageCategory;
