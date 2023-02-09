# React Ch1

## 1. 리액트 설치

### 새로운 리액트 폴더 생성

```
$ npx create-react-app <project-name>
```

### 현재 폴더에서 리액트 파일 생성

```
$ npx create-react-app ./
```

### 실행

```
$ npm start
```

<br/>

## 2. 컴포넌트란?

### 화면을 재사용할 수 있게 여러 조각으로 나눈 것을 컴포넌트라고 한다. 리액트에서는 src 폴더에서 components 폴더를 생성하여 컴포넌트를 생성하고 관리한다.

<br />

## 3. JSX에서 중괄호의 역활

### JSX에서 중괄호의 역활은 JSX에서 자바스크립트를 실행 시킬 수 있도록 한다.

## 4. props의 역활
### props는 부모 컴포넌트로부터 자식 컴포넌트에게 데이터를 상속해줄 때 사용한다.
```
-부모요소-
function 부모() {
  const 변수A = 데이터
  return (
    <div>
      ...
      <ExpenseItem 변수B={변수A} />
      ...
    </div>
  )
}
```
```
-자식요소-
function 자식(props) {
  return (
    ...
    <div>{props.변수B}</div>
    ...
    )
}
```

## 4-1. props.children 사용
```
function 부모() {
  return (
    ...
    <자식>Hello World!</자식>
    ...
  )
}
```
```
function 자식(props) {
  return (
    ...
      <div>{props.children}</div>
    ...
  )
}
```

## 부록

### 1) VSC 추천 확장 툴

1. Korean Language Pack for Visual Studio
2. ES7 React/Redux/GraphQL/React-Native
3. Material Icon Theme
4. Prettier - Code formatter

### 2) React index.css 초기 설정

```
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
  background-color: #3f3f3f;
}
```
