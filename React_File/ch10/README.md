# React Ch10

## Redux Toolkit 설치

```
$ npm install --save @reduxjs/toolkit react-redux
```

## Redux Toolkit 기본 적성법(store/리덕스A.js)

```
import { createSlice } from '@reduxjs/toolkit'

const 초기상태 = { counter: 0, showCounter: true }

const 변수ASlice = createSlice({
  name: '식별자',
  initialState: 초기상태,
  reducers: {
    ...
    함수A(state) {
      state.counter++
    },
    함수B(state) {
      state.counter--
    },
    함수C(state, action) {
      state.counter = state.counter + action.payload
    },
    함수D(state) {
      state.showCounter = !state.showCounter
    },
    ...
  },
})

export const 변수AActions = 변수ASlice.actions
export default 변수ASlice.reducer
```

## 여러개의 리듀서를 하나의 store로 만들기(store/index.js)

```
import { configureStore } from '@reduxjs/toolkit'

import 변수AReducer from './리덕스A'
import 변수BReducer from './리덕스B'

const store = configureStore({
  reducer: { KeyA: 변수AReducer, KeyB: 변수BReducer },
})

export default store
```

## Redux Toolkit로 읽기 및 Dispatch 하기
```
import { useSelector, useDispatch } from 'react-redux'
import { 변수AActions } from '../store/리덕스A'

const 컨포넌트 = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.KeyA.counter)
  const show = useSelector((state) => state.KeyB.showCounter)

  const 이벤트A = () => {
    dispatch(변수AActions.함수A())
  }

  const 이벤트B = () => {
    dispatch(변수AActions.함수C(5))
  }

  const 이벤트C = () => {
    dispatch(변수AActions.함수B())
  }

  const 이벤트D = () => {
    dispatch(변수AActions.함수D())
  }

  return (
    <React.Fragment>
      <div>{counter}</div>
      <div>
        <button onClick={이벤트A}>Increment</button>
        <button onClick={이벤트B}>Increase by 5</button>
        <button onClick={이벤트C}>Decrement</button>
      </div>
      <button onClick={이벤트D}>Toggle Counter</button>
    </React.Fragment>
  )
}


export default Counter
```

