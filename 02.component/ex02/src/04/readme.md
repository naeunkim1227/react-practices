# 02.Component - ex02😖
## Component Styling(Working with UI)

### 01. Inline Styling
### 02. Normal CSS (css-loader options : {module : false})
### 03. Normal CSS (css-loader options : {module : true})
### 04. CSS Module
### 05. SASS & SCSS
### 06. React Madal
### 07. Marerial UI


---

#### 01. Inline Styling
- JSX이기 때문에 color: red; 다음과 같은 형식으로 넣을 수 없다. 객체를 넣어주어야 한다.


#### 02. Normal CSS (css-loader options : {module : false})
- assets 추가



#### 03. Normal CSS (css-loader options : {module : true})
#### 04. CSS Module
#### 05. SASS & SCSS
#### 06. React Madal
#### 07. Marerial UI


실행

npm run debug src=01 css-modules=true
npm run debug src={01|02|03|04|....} css-modules={true|false}


1. webpack.config 수정

true, false 설정해 따라 실행 여부를 설정하기 위해 수정한다.

```javascript
{
            test: /\.(sa|sc|c)ss$/i,
            use:[ 
                'style-loader',
                {loader:'css-loader' , options: {modules : env['css-modules'] != 'false' },
                'sass-loader']
        },

```