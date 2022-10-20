import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { STNavBtn, STmoveBtn } from "../components/custombutton/styles";

const Home = () => {

  const navigate = useNavigate();

  return (
    <STHomeLayout>
      <STHeader>
        <StNavBtn onClick={() => { navigate("/") }}>Home</StNavBtn>
        <h1>오늘의 일기 - WIL/TIL</h1>
      </STHeader>
      <div>
        <STmoveBtn onClick={() => { navigate("/post")}}>작성하기 연결</STmoveBtn>
        <STmoveBtn onClick={() => { navigate("/list")}}>작성된 글 연결</STmoveBtn>
      </div>
      
    </STHomeLayout>
  )
}
export default Home;

const STHomeLayout = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

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


export const STmoveBtn = styled.button`
  width: 200px;
  height: 120px;

  color: teal;
  font-size: x-large;
  font-weight: 700px;
  background-color: transparent;

  border: 3px solid teal;
  border-radius: 15px;
  margin: auto 30px;
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
