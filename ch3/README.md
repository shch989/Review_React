# React Ch3
## 데이터의 렌더링 목록
```
function 함수() {
  const 아이템 = [{...}, {...}, {...}]
  
  return (
    <div>
      ...
      {아이템.map((item) => (
        <div
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
      ...
    </div>
  )
}
```

## 조건부 연산자 2가지
### 1번 째 방법
```
function 함수() {
  const 아이템 = [{...}, {...}, {...}]
  
  return (
    <div>
      ...
      {아이템.length === 0 && <p>No Item!</p>}
      {아이템.map((item) => (
        <div
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
      ...
    </div>
  )
}
```
### 2번 째 방법
```
function 함수() {
  const 아이템 = [{...}, {...}, {...}]
  
  return (
    <div>
      ...
      {아이템.length === 0 ? (<p>No Item!</p>) : (
        아이템.map((item) => (
          <div
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))
      )}
      ...
    </div>
  )
}
```