# React Ch8

## Axios 사용

```
$ npm install --save axios
```

## React에서 GET요청 보내기(with fetch)

### https://백엔드_API_주소/semi

```
[
  {
    id: 1,
    email: "java@gmail.com",
    name: "semi",
    age: 24
  },
  {
    id: 25,
    email: "python@gmail.com",
    name: "semi",
    age: 17
  }
]
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
        const 유저목록 = data.results.map((movieData) => {
        return {
          id: data.id,
          email: data.email
          name: data.name,
          age: data.age,
        }
      })
      setUsers(유저목록)
    })
  }

  return (
    <React.Fragment>
      <자식 users={users} />
      <button onClick={함수}>Find User</button>
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
