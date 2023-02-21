# NodeJS Ch3

## MVC 패턴 이란?

### Models Views Controllers 3가지로 구성된 디자인 패턴

### Models

- 데이터를 나타내는 코드의 한 부분
- 데이터를 저장하거나 파일로부터 데이터를 주고 받는 등의 작업을 함

### Views

- 사용자가 보게 되는 회면을 보여줌
- 뷰를 생성하기 위해 템플릿 엔진에 주입하는 데이터와 약간 통합됨

### Controllers + Routes

- Models과 Views 사이의 연결점
- Controllers는 중개인으로서 중간 논리를 포함한다

## MVC 패턴 작성법

### app.js

```
const express = require('express');
...
const mainRoutes = require('./routes/main');
...
app.use('/main', mainRoutes);
...
app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
})
```

### routes/main.js

```
const express = require('express');
const router = express.Router();
...
const mainController = require('../controllers/main')
...
router.get('/first', mainController.getAddFirst);
...
module.exports = router;
```

### controllers/main.js

```
exports.getAddFirst = (req, res, next) => {
  ...
}
```

### models/main.js (DB사용 X)
```
const items = []

module.exports = class Item {
  constructor(t) {
    this.title = t;
  }

  save() {
    items.push(this)    
  }
  static fetchAll() {
    return items
  }
}
```
