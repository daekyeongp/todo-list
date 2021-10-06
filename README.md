# Project folder structure

```
 📦 public
   └──📜 index.html
 📦 src
  ├──📂 components 
  │   ├──📜 TodoInsert.js
  │   ├──📜 TodoInsert.scss
  │   ├──📜 TodoList.js
  │   ├──📜 TodoList.scss
  │   ├──📜 TodoListItem.js
  │   ├──📜 TodoListItem.scss
  │   └──📜 TodoTemplate.js
  │   └──📜 TodoTemplate.scss
  ├──📜 App.js
  ├──📜 index.css
  └──📜 index.js
```

---

# Component Description (path: src/components/)

##### 1. TodoTemplate: 일정 관리를 보여주는 컴포넌트로, 화면을 가운데 정렬 하는 기능을하며, chileren으로 내부 JSX를 props로 받아 와서 렌더링 한다.

##### 2. TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트로, state를 통해 인풋의 상태를 관리한다.

##### 3. TodoListItem: 각 일정에 대한 정보를 보여주는 컴포넌트로, todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여준다.

##### 4. TodoList: todos 배열을 props로 받아와 이를 배열 내장 함수 map을 이용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여준다.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
