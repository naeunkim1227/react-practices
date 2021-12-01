# 02. Component > ex03 : Component - React Event

### 01. src/01: Inline Handler
### 02. src/02: Functional Handler 
### 03. src/03: SyntheticEvent (이벤트 합성) : DOM이벤트 객체 < React이벤트 객체 
### 04. src/04: Some Examples of Event Handler
### 05. src/05: Event Handler Using 'ref' I     (Functional Component) 
### 06. src/06: Event Handler Using 'ref' II    (Class Component)

### Run Examples
```bash
$ npm run debug src={no}
```


---


### 02. src/02: Functional Handler 

useState
useRef
useEffect
Hook 함수


#### state

#### render



### 03. src/03: SyntheticEvent (이벤트 합성) : 
    DOM이벤트 객체 < React이벤트 객체 
    React이벤트 객체는 Dom이벤트 요소 사용가능


### 04. src/04: Some Examples of Event Handler

    native DOM    |     React DOM
                sync
    

    보통 React DOM을 사용해서 작동시킨다.

    native에 있는 DOM에 직접 접근하고 싶음 그때, Ref를 사용하면 된다.

      //Ref 사용 - nativeDOM에 있는 element를 사용한다.
    const imageRef = useRef(null);

    //jQuery.$(imageRef.current) 다음과 같이 nativeDOM을 사용할 수 있게 된다.



  
  
  global(#root) 를 사용하면 해싱하지 않는다. 모든 구역에 적용하고 싶은 css에 작성해주면 된다.       