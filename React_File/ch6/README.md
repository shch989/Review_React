# React Ch6

## useEffect Hook 사용

### React가 실행될 때 1번만 동작

```
  useEffect(() => {
    ...
    실행함수
    ...
  }, [])
```

### [ ]안의 값이 변할 때만 동작

```
  useEffect(() => {
    ...
    실행함수
    ...
  }, [의존성, 의존성, ...])
```

## useReducer Hook 사용

```
import React, { useReducer } from 'react'

const 리듀서 = (state, action) => {
  if(action.type === '조건A') {
    return {내용A: 'hello world', 내용B: state.내용B + 1}
  }
  if(action.type === '조건B') {
    return {내용A: action.값, 내용B: state.내용B - 1}
  }
  return
}

const [변수State, dispatch변수] = useReducer(리듀서, {
  내용A: '',
  내용B: 50,
})

const 함수A = () => {
  ...
  dispatch변수({ type: '조건A' })
  ...
  console.log(변수State)
}

const 함수B = () => {
  ...
  dispatch변수({ type: '조건B', 값: 'Goodbye world' })
  ...
  console.log(변수State)
}

```

## Context API 사용

### src 폴더에 context(store, state) 폴더를 생성

### context 폴더에서 auth-context(자유).js 파일 생성

```
import React from "react";

const 변수 = React.createContext({
  ...
  userLogin: false,
  onLogin: (email, password) => {}
  ...
})

export default 변수
```

### context의 범위를 지정

```
import React, { useState } from 'react'
import 변수 from '상대경로/store/auth-context'

function 컴포넌트A() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  ...
  return (
    <변수.Provider value={{ userLogin: isLoggedIn, onLogin: 함수 }}>
      ...
      <컴포넌트B />
      ...
    </변수.Provider>
  )
}
```

### useContext 사용

```
import React, {useContext} from 'react'
import 변수 from '상대경로/store/auth-context'

function 컴포넌트B() {
  const ctx = useContext(변수)
  ...
  return (
    ...
    {ctx.userLogin && <p>Hello world!</p>}
    ...
  )
}
```

## React Hooks 규칙

### 1. 리액트 훅은 리액트 함수에서만 호출해야 한다. 
### 2. 리액트 훅은 리액트 컴포넌트 함수 또는 사용자 정의 훅 함수의 최상위 수준에서만 호출해야 한다.
### 3. useEffect는 항상, 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가해야 한다.

## 로컬스토리지 관리

### 로컬스토리지에 저장

```
 localStorage.setItem(key, value)
```

### 로컬스토리지 value값 불러오기

```
 localStorage.getItem(key)
```

### 로컬스토리지에서 삭제

```
 localStorage.removeItem(key)
```
