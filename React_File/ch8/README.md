# React Ch8

## Axios 사용

```
$ npm install --save axios
```

## React에서 GET요청 보내기(with fetch)

### https://백엔드*API*주소/semi

```
{
  "users": [
    {
      "id": 1,
      "email": "java@gmail.com",
      "name": "semi",
      "age": 24
    },
    {
      "id": 25,
      "email": "python@gmail.com",
      "name": "semi",
      "age": 17
    }
  ]
}
```

### fetch를 사용하여 GET요청

```
import React, { useState } from 'react'

import 자식 from '상대경로/자식'

function 부모() {
  const [users, setUsers] = useState([])

  function 함수() {
    fetch('https://백엔드_API_주소/유저ID')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const 유저목록 = data.users.map((user) => {
        return {
          id: user.id,
          email: user.email
          name: user.name,
          age: user.age,
        }
      })
      setUsers(유저목록)
    })
  }

  return (
    <React.Fragment>
      <자식 users={users} />
      <button onClick={함수}>Find Users</button>
    </React.Fragment>
  )
}
```

### 요청에 대한 JSON값 출력

```
function 자식(props) {
  ...
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <p>{user.age}</p>
        <li/>
      ))}
    </ul>
  );
}
```

## 비동기 / 대기 사용

### 기존 방식

```
...
function 부모() {
  const [users, setUsers] = useState([])

  function 함수() {
    fetch('https://백엔드_API_주소/유저ID')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const 유저목록 = data.users.map((user) => {
        return {
          id: user.id,
          email: user.email
          name: user.name,
          age: user.age,
        }
      })
      setUsers(유저목록)
    })
  }
  ...
}
```

### async await 방식

```
...
function 부모() {
  const [users, setUsers] = useState([])

  async function 함수() {
    const 변수 = await fetch('https://백엔드_API_주소/유저ID')
    const 데이터 = await 변수.json()
    const 유저목록 = 데이터.users.map((user) => {
      return {
        id: user.id,
        email: user.email
        name: user.name,
        age: user.age,
      }
    })
    setUsers(유저목록)
  }
  ...
}
```

## HTTP 오류 처리

### HTTP status 번호

### https://www.webfx.com/web-development/glossary/http-status-codes/

```
import React, { useState } from 'react'

import 자식 from '상대경로/자식'

function 부모() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  async function 함수() {
    try {
      const 변수 = await fetch('https://백엔드_API_주소/유저ID')
      if(!변수.ok) {
        throw new Error('Error!)
      }
      const 데이터 = await 변수.json()
      const 유저목록 = 데이터.users.map((user) => {
        return {
          id: user.id,
          email: user.email
          name: user.name,
          age: user.age,
        }
      })
      setUsers(유저목록)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <React.Fragment>
      ...
      {error && <p>{error}</p>}
      ...
    </React.Fragment>
  )
}
```

## React에서 POST요청 보내기(with fetch)

```
import React, { useState } from 'react'

import 자식 from '상대경로/자식'

function 부모() {
  const [users, setUsers] = useState([])

  async function 함수() {
    const response = await fetch(
      'https://백엔드*API*주소/',
      {
        method: 'POST',
        body: JSON.stringify({
          "id": Math.random(),
          "email": "golang@gmail.com",
          "name": "semi",
          "age": 32
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
  }

  return (
    <React.Fragment>
      ...
      <button onClick={함수}>Add Users</button>
      ...
    </React.Fragment>
  )
}
```
