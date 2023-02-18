# NodeJS Ch1

## Express.js 설치 과정

```
$ npm init -y
```

```
$ npm install --save express
```

```
$ npm install -D nodemon
```

```
$ npm install --save body-parser
```

## Express.js 기본 템플릿

```
const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
```

## Express.js의 요청 4가지

| 이름   | 기능   |
| ------ | ------ |
| GET    | Read   |
| POST   | Create |
| PUT    | Update |
| DELETE | DELETE |

## 미들웨어 추가 및 작동 방식

JS코드는 위에서 아래로 읽는 방식이기 때문에<br/>
미들웨어 또한 코드가 위에서 아래로 실행된다.<br/>
아래의 코드에서 첫 번째 미들웨어가 실행되고<br/> 
next( ) 함수를 사용하므로서 다음 요청이 실행된다.<br/>

```
const express = require('express')
...
app.use((req, res, next) => {
  console.log('In the middleware!')
  next()
})

app.use('/', (req, res) => {
  res.send('Hello World!')
})
...
```

## 다른 라우트 사용법

```
const express = require('express')
...
app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/express', (req, res) => {
  res.send('Hello from Express!')
})
...
```

## Express.js의 함수

### 특정 라우트로 이동할 때 사용

```
res.redirect('/')
```

## Body-Parser 실행

```
const express = require('express')
const bodyParser = require('body-parser')

...

app.use(bodyParser.urlencoded({ extended: false }))

...

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
```
