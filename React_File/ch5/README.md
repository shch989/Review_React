# React Ch5

## JSX의 제한 사항 해결법

### div 태그로 감싸기

```
const 함수 = () => {
  return (
    <div>
      <h2>...</h2>
      <p>...</p>
    </div>
  );
};
```

### <> 태그로 감싸기

```
const 함수 = () => {
  return (
    <>
      <h2>...</h2>
      <p>...</p>
    </>
  );
};
```

### <Fragment> or <React.Fragment> 태그로 감싸기

```
import React, { Fragment } from 'react';

const 함수 = () => {
  return (
    <Fragment>
      <h2>...</h2>
      <p>...</p>
    </Fragment>
  );
};
```

### Wrapper.jsx components 활용

```
function Wrapper(props) {
  return props.children
}

export default Wrapper
```

## React Portals

### public 폴더에 있는 index.html에서 root추가

```
<!DOCTYPE html>
<html lang="ko">
  <head>
  ...
  </head>
  <body>
    ...
    <div id="루트A"></div>
    <div id="루트B"></div>
    <div id="root"></div>
    ...
  </body>
</html>
```

### React DOM을 사용해서 Portals 사용

```
import React from 'react'
import ReactDOM from 'react-dom'

const 함수A = (props) => {
  return <div onClick={props.상속A}>...</div>
}

const 함수B = (props) => {
  return <div onClick={props.상속B}>...</div>
}

const 메인함수 = () => {
  const 이벤트A = () => {
    ...
  }

  const 이벤트B = () => {
    ...
  }

  return (
    <div>
      {ReactDOM.createPortal(
        <함수A 상속A={이벤트A}/>,
        document.getElementById('루트A')
      )}
      {ReactDOM.createPortal(
        <함수B 상속B={이벤트B}/>,
        document.getElementById('루트B')
      )}
    </div>
  )
}
```

## useRef 사용 예시

### input의 value값을 console로 불러오는 코드

```
import React, { useRef } from "react";

function 함수() {
  const textInputRef = useRef()

  const 이벤트 = () => {
    console.log(textInputRef.current.value)
  }

  return (
    <div>
      <form onSubmit={이벤트}>
        ...
        <input id="todo" type="text" ref={textInputRef}/>
        <button type="submit">Add</button>
        ...
      </form>
    </div>
  );
}
```
