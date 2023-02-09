# React Ch2

## 이벤트 핸들러 사용

### onClick 기능

```
function 함수명() {
  const 이벤트 = () => {}

  return (
      ...
      <button onClick={이벤트}>
        Click!
      </button>
      ...
    )
}
```

### onChange 기능
```
function 함수명() {
  const 이벤트 = (event) => {
    console.log(event.target.value)
  }

  return (
      ...
      <input type="text" onChange={이벤트}>
      ...
    )
}
```

### onSubmit 기능
```
function 함수명() {
  const 이벤트 = (event) => {
    event.preventDefault()
    ...
  }

  return (
      ...
      <form onSubmit={이벤트}>
        ...
        <button type="submit">Click!</button>
      <form>
      ...
    )
}
```

## useState 사용 방법

### 버튼을 클릭하면 초기값의 내용이 신규값으로 바뀌는 예시

```
import React, {useState} from 'react'

function 함수명() {
  const [변수, set변수] = useState(초기값)

  const 이벤트 = () => {
    set변수(신규값)
  }

  return (
      ...
      <button onClick={이벤트}>
        {변수}
      </button>
      ...
    )
}

```
