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

### Html 코드를 보내줄 때 사용

```
res.send('<h1>Hello from Express!</h1>')
```

### 클라이언트와 서버 간에 정보를 전달할 때 사용

```
res.setHeader('Content-Type', 'text/html')
```

### status 코드를 설정할 때 사용

https://www.webfx.com/web-development/glossary/http-status-codes/<br/>

```
res.status(404)
```

### 파일을 보낼 때 사용

```
res.sendFile()
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

## Route 생성 및 관리

routes 폴더 생성 및 관리할 router 파일 생성<br/>
router 코드는 아래와 같이 작성<br/>

```
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  ...
})

router.post('/product', (req, res) => {
  ...
})

module.exports = router
```

app.js에서 router 파일 불러오기<br/>

```
const express = require('express')
...
const app = express()
...
const adminRoutes = require('./routes/admin')
...
app.use('/', adminRoutes)
...
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
```

## Views 파일 생성 및 사용법

MVC패턴에서 V는 View를 나타낸다.<br/>
백엔드의 데이터를 사용자에게 화면 상으로 보여주는 역활을 수행.<br/>
html, pug, ejs와 같은 템플릿 엔진을 사용<br/>
아래와 같이 코드를 작성하여 사용한다.

```
const path = require('path')
...
const router = express.Router()
...
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
})
...
module.exports = router
```
