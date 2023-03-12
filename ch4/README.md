# React Ch4

## Styled Components 시작하기

```
$ npm install --save styled-components
```

## Styled Components 실행

```
import styled from 'styled-components'

const 변수 = styled.HTML태그`
  ...
  SCSS/SASS 코드
  ...
`
const 함수 = () => {
  return (
    ...
    <변수>
      ...
    </변수>
    ...
  )
};

```

## Styled Components에서 props 사용

```
import react, { useState } from 'react'
import styled from 'styled-components'

const 변수A = styled.HTML태그`
  ...
  color: ${props => (props.변수B ? 'red' : 'black)}
  ...
`
const 함수 = () => {
  const [click, setClick] = useState(false)
  return (
    ...
    <변수A 변수B={!click}>
      ...
    </변수A>
    ...
  )
};

```
