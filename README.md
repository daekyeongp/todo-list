# Project folder structure

```
 π¦ public
   βββπ index.html
 π¦ src
  βββπ components 
  β   βββπ TodoInsert.js
  β   βββπ TodoInsert.scss
  β   βββπ TodoList.js
  β   βββπ TodoList.scss
  β   βββπ TodoListItem.js
  β   βββπ TodoListItem.scss
  β   βββπ TodoTemplate.js
  β   βββπ TodoTemplate.scss
  βββπ App.js
  βββπ index.css
  βββπ index.js
```

---

# Component Description (path: src/components/)

##### 1. TodoTemplate: μΌμ  κ΄λ¦¬λ₯Ό λ³΄μ¬μ£Όλ μ»΄ν¬λνΈλ‘, νλ©΄μ κ°μ΄λ° μ λ ¬ νλ κΈ°λ₯μνλ©°, chilerenμΌλ‘ λ΄λΆ JSXλ₯Ό propsλ‘ λ°μ μμ λ λλ§ νλ€.
π [[Todo-List] 1. νλ‘μ νΈ κ΅¬μ±](https://velog.io/@daekyeong/Todo-List-1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1) <br/>
π [[Todo-List] 2. μ»΄ν¬λνΈ μμ±](https://velog.io/@daekyeong/Todo-List-2.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1)

##### 2. TodoInsert: μλ‘μ΄ ν­λͺ©μ μλ ₯νκ³  μΆκ°ν  μ μλ μ»΄ν¬λνΈλ‘, stateλ₯Ό ν΅ν΄ μΈνμ μνλ₯Ό κ΄λ¦¬νλ€.
π [[Todo-List] 1. νλ‘μ νΈ κ΅¬μ±](https://velog.io/@daekyeong/Todo-List-1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1) <br/>
π [[Todo-List] 2. μ»΄ν¬λνΈ μμ±](https://velog.io/@daekyeong/Todo-List-2.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1) <br/>
π [[Todo-List] 3. κΈ°λ₯ κ΅¬ν](https://velog.io/@daekyeong/Todo-List-3.-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)

##### 3. TodoListItem: κ° μΌμ μ λν μ λ³΄λ₯Ό λ³΄μ¬μ£Όλ μ»΄ν¬λνΈλ‘, todo κ°μ²΄λ₯Ό propsλ‘ λ°μμμ μνμ λ°λΌ λ€λ₯Έ μ€νμΌμ UIλ₯Ό λ³΄μ¬μ€λ€.
π [[Todo-List] 1. νλ‘μ νΈ κ΅¬μ±](https://velog.io/@daekyeong/Todo-List-1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1) <br/>
π [[Todo-List] 2. μ»΄ν¬λνΈ μμ±](https://velog.io/@daekyeong/Todo-List-2.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1) <br/>
π [[Todo-List] 3. κΈ°λ₯ κ΅¬ν](https://velog.io/@daekyeong/Todo-List-3.-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84) <br/>
π [[Todo-List] 4. μ»΄ν¬λνΈ μ±λ₯ κ°μ  (1)](https://velog.io/@daekyeong/Todo-List-4.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-1) <br/>
π [[Todo-List] 5. μ»΄ν¬λνΈ μ±λ₯ κ°μ  (2)](https://velog.io/@daekyeong/Todo-List-5.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-2) <br/>

##### 4. TodoList: todos λ°°μ΄μ propsλ‘ λ°μμ μ΄λ₯Ό λ°°μ΄ λ΄μ₯ ν¨μ mapμ μ΄μ©ν΄μ μ¬λ¬ κ°μ TodoListItem μ»΄ν¬λνΈλ‘ λ³ννμ¬ λ³΄μ¬μ€λ€.
π [[Todo-List] 1. νλ‘μ νΈ κ΅¬μ±](https://velog.io/@daekyeong/Todo-List-1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1) <br/>
π [[Todo-List] 2. μ»΄ν¬λνΈ μμ±](https://velog.io/@daekyeong/Todo-List-2.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1) <br/>
π [[Todo-List] 3. κΈ°λ₯ κ΅¬ν](https://velog.io/@daekyeong/Todo-List-3.-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84) <br/>
π [[Todo-List] 5. μ»΄ν¬λνΈ μ±λ₯ κ°μ  (2)](https://velog.io/@daekyeong/Todo-List-5.-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-2)

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

**Note: this is a one-way operation. Once you `eject`, you canβt go back!**

If you arenβt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youβre on your own.

You donβt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnβt feel obligated to use this feature. However we understand that this tool wouldnβt be useful if you couldnβt customize it when you are ready for it.
