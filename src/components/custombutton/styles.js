import styled from "styled-components";

// Home - 홈, 이전으로
export const StNavBtn = styled.button`
  width: 70px;
  height: 40px;

  color: white;
  text-align: center;
  background-color: teal;

  border: 2px solid teal;
  border-radius: 20px;
`;

// Home - 작성하기, 작성된 글 연결
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

// Post-추가하기, Todo-수정
export const STDoneBtn = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px auto;

  color: white;
  background-color: teal;
  border: 2px solid teal;
  border-radius: 15px;

  font-size: large;
  font-weight: 700px;
`;

// List - 보러가기, 삭제하기
export const STListBtn = styled.button`
  background-color: teal;
  color: white;

  width: 100px;
  height: 50px;

  border: 2px solid teal;
  border-radius: 20px;

  margin-right: 10px;
`;

// Todo - 수정완료, 수정취소
export const STTodoDoneBtn = styled.button`
  width: 150px;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 70px;

  color: white;
  background-color: teal;
  border: 2px solid teal;
  border-radius: 15px;

  font-size: large;
  font-weight: 700px;
`

// Comment - 추가하기, 삭제하기
export const STCommentBtn = styled.button`
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  

  color: white;
  background-color: teal;
  border:none;
  border-radius: 6px;
  height:37px;
  font-size: 16px;
  font-weight: 700px;
`;