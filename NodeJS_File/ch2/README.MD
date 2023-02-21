# NodeJS Ch2

## NodeJS의 Templating Engines

### EJS

```
<p><%= name %></p>
```

일반 HTML을 사용하고 단순한 JavaScript를 사용할 수 있게 한다.

### PUG

```
p #{name}
```

최소한의 HTML과 확장 가능하지만 일반적으로 일련의 요소나<br/>
작업 종류만을 제공하는 맞춤형 템플릿 언어

### Handlebars

```
<p>{{ name }}</p>
```

HTML을 사용하지만 동시에 제한된 기능의 맞춤형 템플릿 언어도 사용

## PUG 시작

```
$ npm install --save pug
```

### PUG 환경 세팅

```
const app = express();
...
app.set('view engine', 'pug')
app.set('views', 'views')
...
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
  })
```

### PUG Templating File 불러오기

```
router.get('/', (req, res, next) => {
  ...
  res.render('main.pug')
});
```

## Handlebars 시작

```
$ npm install --save express-handlebars
```

### Handlebars 환경 세팅

```
const app = express();
...
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
...
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
  })
```

### Handlebars Templating File 불러오기

```
router.get('/', (req, res, next) => {
  ...
  res.render('main.hbs');
});
```

## EJS 시작

```
$ npm install --save ejs
```
