// Subpage 2 - 작성한 글 보러가기

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/modules/todosSlice";
import styled from "styled-components";
// import { STNavBtn, STListBtn } from "./custombutton/styles";

const List = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos)
  const navigate = useNavigate();

  const onTodoDelete = (payload) => {
    dispatch(deleteTodo(payload))
  }

  return (
    <STListWrap>
      <STHeader>
        <StNavBtn onClick={() => { navigate("/") }}>HOME</StNavBtn>
        <h1>Today's Diary</h1>
        <StNavBtn onClick={()=> {navigate(-1)}}>BACK</StNavBtn>
      </STHeader>
      <div>
            {
              todos.map(todo=>(
                <div key={todo.id}>
                  <STListContent>
                    <div>
                      <h3>제목 : {todo.title}</h3>
                    </div>
                    <div>
                      {/* 버튼으로 페이지 넘어가게 수정 */}
                      <Link to={`/todo/${todo.id}`} key={todo.id}>
                        <STListBtn>보러가기</STListBtn>
                      </Link>
                      <STListBtn onClick={()=>onTodoDelete(todo.id)}>삭제하기</STListBtn>
                    </div>                    
                  </STListContent>
                </div>
                ))
            }
      </div>
    </STListWrap>
  )
}


export default List;

// 1019 12:11 수정
const STListContent = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
`;

// 1019 12:11 수정
const STListWrap = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 800px;

  display: flex;
  flex-direction: column;

  margin: auto;
`;

export const StNavBtn = styled.button`
  width: 70px;
  height: 40px;

  color: white;
  text-align: center;
  background-color: teal;

  border: 2px solid teal;
  border-radius: 20px;
`;


export const STListBtn = styled.button`
  background-color: teal;
  color: white;

  width: 100px;
  height: 50px;

  border: 2px solid teal;
  border-radius: 20px;

  margin-right: 10px;
`;

const STHeader = styled.button`
  background-color: #f7f7f7;
  border: 2px solid #f7f7f7;

  width: 80%;
  max-width: 1000px;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto 100px;
  padding: 30px;
`;
