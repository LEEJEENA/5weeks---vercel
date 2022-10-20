// 콘솔 주석 확인 완료!
import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
    comment : [
        {
        id: 0,
        // 공백으로 수정 완료
        username : "",
        content : ""
        }
    ]
}
//깊은복사 얕은복사?!
//toolkit
const commentSlice = createSlice({
    name: "comment",// 이 모듈의 이름
    initialState,   // 이 모듈의 초기상태 값
    reducers: {     // 이 모듈의 Reducer 로직
         // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
        commentTodo: (state, action) => {
        state.comment = [...state.comment,{...action.payload}]
      },
        deleteTodo: (state, action) => {
        state.comment = [...state.comment.filter(comment => {
                              return comment.id !== action.payload
                        })]
      },
    },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { commentTodo, deleteTodo } = commentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default commentSlice.reducer;

