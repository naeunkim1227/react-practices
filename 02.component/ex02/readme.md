# 02.Component - ex02๐(CSS)
## Component Styling(Working with UI)

### 01. Inline Styling
### 02. Normal CSS (css-loader options : {module : false})
### 03. Normal CSS (css-loader options : {module : true})
### 04. CSS Module
### 05. SASS & SCSS
   ------------------------------------------------------
        CSS in JS(Styled Components), Less & Styleable
   ------------------------------------------------------

### 06. Font Awesome : Working with UI 1
### 07. React Madal : Working with UI 2
### 08. Marerial UI : Working with UI 3


---

#### 01. Inline Styling
- JSX์ด๊ธฐ ๋๋ฌธ์ color: red; ๋ค์๊ณผ ๊ฐ์ ํ์์ผ๋ก ๋ฃ์ ์ ์๋ค. ๊ฐ์ฒด๋ฅผ ๋ฃ์ด์ฃผ์ด์ผ ํ๋ค.


#### 02. Normal CSS (css-loader options : {module : false})
- assets ์ถ๊ฐ



#### 03. Normal CSS (css-loader options : {module : true})
#### 04. CSS Module  (css-loader options : {module : true})

false๋ก ์ค์ ํ  ๊ฒ์ฐ ์ค๋ณต๋ className์ด ์์ผ๋ฉด ๊ฐ์ฅ์์์ ์ ์ฉ๋ css๊ฐ ์ ์ฉ๋๋ค..?

import styles from './assets/css/Banner02.css'
๋ค์๊ณผ ๊ฐ์ด ํด์ฑ์ ์์ผ์ 

{styles.Header}๋ก ์ ๊ทผ


#### 05. SASS & SCSS
#### 06. React Madal
#### 07. Marerial UI


์คํ

npm run debug src=01 css-modules=true
npm run debug src={01|02|03|04|....} css-modules={true|false}


1. webpack.config ์์ 

module : true, false ์ค์ ํด ๋ฐ๋ผ ์คํ ์ฌ๋ถ๋ฅผ ์ค์ ํ๊ธฐ ์ํด ์์ ํ๋ค.

```javascript
{
            test: /\.(sa|sc|c)ss$/i,
            use:[ 
                'style-loader',
                {loader:'css-loader' , options: {modules : env['css-modules'] != 'false' },
                'sass-loader']
        },

```