# React Ch9

## 커스텀 훅 사용.

### src 파일에 hooks 폴더 생성

### 커스텀 훅 js 파일 생성

### 변수 이름은 use로 시작하도록 한다 (필수)

```
import { useState, useEffect } from 'react'

const use커스텀 = () => {
  const [변수A, set변수A] = useState(0)

  useEffect(() => {
    ...
  }, [])

  return 변수A
}

export default use커스텀
```

### 위 커스텀 훅의 예시에서는 '변수'를 반환 함으로써

### 다른 컴포넌트에서 '변수'의 값을 불러올 수 있도록 한다.

```
import React from 'react';

import use커스텀 from '상대경로/hooks/파일명';

const 컴포넌트 = () => {
  const 변수B = use커스텀()

  return <div>{변수B}</div>;
};

export default 컴포넌트;

```

## 커스텀 훅 재사용 예시

### true일 경우 Hello를 출력하고 false일 경우 GoodBye를 출력하는 훅

```
import { useState, useEffect } from 'react'

const use커스텀 = (값 = true) => {
  const [변수A, set변수A] = useState('')

  useEffect(() => {
    ...
    if (값) {
      set변수A = 'Hello'
    } else {
      set변수A = 'Goodbye'
    }
    ...
  }, [값])

  return 변수A
}

export default use커스텀
```

### Hello를 출력하는 컴포넌트

```
import React from 'react';

import use커스텀 from '상대경로/hooks/파일명';

const Hello = () => {
  const 변수B = use커스텀(true)

  return <div>{변수B}</div>;
};

export default Hello;

```

### GoodBye를 출력하는 컴포넌트

```
import React from 'react';

import use커스텀 from '상대경로/hooks/파일명';

const GoodBye = () => {
  const 변수B = use커스텀(false)

  return <div>{변수B}</div>;
};

export default GoodBye;

```
