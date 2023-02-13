# React Ch7

## useMemo Hook을 사용하여 불필요한 재사용 방지

### React.memo 사용

React.memo를 사용하면 어떤 props가 입력되는지 확인하고<br/>
입력되는 모든 props의 신규 값을 확인한 뒤<br/>
기존의 props의 값과 비교하도록 리액트에게 전달<br/>

```
import React from 'react'

function 함수(props) {
  ...
  return (
    ...
    <div>{props.text}</div>
    ...
  )
}
export default React.memo(함수)
```

React.memo를 모든 컴포넌트에 적용시키지 않는 이유는<br/>
이전 props와 비교하는 과정에서 리액트가 처리하는 작업이 늘어나기 때문<br/>
따라서 자식 컴포넌트가 해당 컴포넌트 안에 많을 경우 사용 권장<br/>

## useCallback Hook을 사용하여 함수 재생성 방지

### useCallback을 사용하는 이유와 사용법

컴포넌트가 재시작할 때 함수의 경수 같은 내용의 함수로 새롭게 작성된다<br/>
따라서 이로인해 useMemo를 사용해도 내용의 변동이 없어도 React가 재 랜더링을 한다<br/>
useCallback을 사용하면 선택한 함수를 리액트의 내부 저장 공간에 저장해서<br/>
함수나 객체, 배열이 재실행 될 때 이를 재사용할 수 있게 한다.

```
import React, { useCallback } from 'react'
import 자식 from '상대경로/자식'

function 부모() {
  ...
  const 이벤트 = useCallback(() => {
    ...
  }, [])
  ...
  return (
    ...
    <자식 onClick={이벤트} />
    ...
  )
}
export default 함수
```
