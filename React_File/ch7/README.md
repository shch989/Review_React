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

### useMemo Hook 사용

부모 컨포넌트에서 상속받은 숫자 배열을 자식 컨포넌트에서<br/>
정렬하고 리스트를 출력하는 예제이다. 자식 컨포넌트에서 코드가 재실행 하는 것을<br/>
방지하기 위해 useMemo를 사용하여 상속받은 배열에 변동이 있을 때만<br/>
코드가 재실행 되도록 선언한다.

```
import React, { useMemo } from 'react'

import 자식 from '상대경로/자식'

function 부모() {
  ...
  const 변수A = useMemo(() => [5, 3, 1, 10, 9], [])
  ...
  return (
    ...
    <자식 items={변수A}/>
    ...
  )
}
export default 부모
```

```
import React, { useMemo } from 'react'

function 자식(props) {
  ...
  const 변수B = useMemo(() => {
    return props.items.sort((a, b) => a - b)
  }, [props.items])
  ...
  return (
    ...
    <ul>
      {변수B.map((item) => {
        <li key={item}>{item}</li>
      })}
    </ul>
    ...
  )
}
export default 자식
```

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

useCallback에서 의존성[]에는 내용이 재실행 되더라도<br/>
보존되어 있어야하는 값을 넣는다.
