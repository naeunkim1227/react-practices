# 02.Component - ex02ð
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
- JSXì´ê¸° ëë¬¸ì color: red; ë¤ìê³¼ ê°ì íìì¼ë¡ ë£ì ì ìë¤. ê°ì²´ë¥¼ ë£ì´ì£¼ì´ì¼ íë¤.


#### 02. Normal CSS (css-loader options : {module : false})
- assets ì¶ê°



#### 03. Normal CSS (css-loader options : {module : true})
#### 04. CSS Module
#### 05. SASS & SCSS
#### 06. React Madal
#### 07. Marerial UI


ì¤í

npm run debug src=01 css-modules=true
npm run debug src={01|02|03|04|....} css-modules={true|false}


1. webpack.config ìì 

true, false ì¤ì í´ ë°ë¼ ì¤í ì¬ë¶ë¥¼ ì¤ì íê¸° ìí´ ìì íë¤.

```javascript
{
            test: /\.(sa|sc|c)ss$/i,
            use:[ 
                'style-loader',
                {loader:'css-loader' , options: {modules : env['css-modules'] != 'false' },
                'sass-loader']
        },

```