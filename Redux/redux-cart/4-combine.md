# 😄 store 中存储多类数据

除了商品列表，还需要一个购物车，所以首先要解决购物车数据的存储问题。

### 使用 combineRedcuers() 存储多类数据

涉及到 reducer 的拆分，和用 combineReducers 合并 reducer 。

reducers/index.js

```js
import { combineReducers } from 'redux'
import cart from './cart'
import products from './products'

const rootReducer = combineReducers({
  cart,
  products
})

export default rootReducer
```


到 reducers/index.js 中，先导入 combineReducers 接口。然后把 rootReducer 拆分成两个 reducer ，一个叫 cart ，保存到 cart.js 中，一个叫  products ，保存到 products.js 文件中。最后用 combineReducers 把二者合并，组成 rootReducer 。


reducers/products.js

```js
const initialState = [
  {
    id: '324',
    name: '苹果电脑'
  },
  {
    id: '452',
    name: '橘子'
  }
]

const products = (state = initialState, action) => {
  return state
}

export default products
```

reducers/products.js 中，把从 rootReducer 拷贝过来的数据粘贴到这里，当前 reducer 只负责 products 数据，所以 initialState 直接赋值为对象数组，未来这个数组在状态树中的属性名，是由当前 reducer 的名字，在这里也就是 products  来决定的。reducer 中依然是直接返回 state 。然后把 products 这个 reducer 默认导出。


reducers/cart.js

```js
const initialState = []

const cart = (state = initialState, action) => {
  return state
}

export default cart
```

reducers/cart.js 情况是类似的，初始值是空数组，所以直接写到函数的括号内即可，没有必要专门定义 initialState 常量了。


Products.js

```js
  render() {
    const { products } = store.getState()
    console.log(store.getState())
    const productList = products.map(t => <div key={t.id}>{t.name}</div>)
    return (
```

展示组件 Products.js 中，打印一下状态树的值。

浏览器中，打开开发者工具，可以看到是一个包含 cart 和 products 两个属性的对象。

### 添加 Cart 组件

添加 Cart 组件，把状态树中 cart 部分的数据显示出来。


Main.js

```js
import React, { Component } from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import CartContainer from '../containers/CartContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    )
  }
```

到 Main.js 中导入 CartContainer ，下面 JSX 中加一条分割线，然后把 CartContainer 显示到下面。

CartContainer.js

```js
import React from 'react'
import Cart from '../components/Cart'

const CartContainer = () => <Cart />

export default CartContainer
```

创建 containers/CartContainer.js 文件。导入 React ，导入 Cart 展示组件，定义一个无状态组件，把展示组件直接返回，最后默认导出容器组件。

Cart.js

```js
import React, { Component } from 'react'
import store from '../store'

class Cart extends Component {
  render () {
    const { cart } = store.getState()
    const hasProduct = cart.length > 0
    const productList = cart.map(t => (
      <div key={t}>
        {t}
      </div>
    ))
    return (
      <div>
        {
          hasProduct ? productList : '请添加商品'
        }
      </div>
    )
  }
}

export default Cart
```

创建展示组件 components/Cart.js 。导入 React 和 Component ，导入 store 。创建一个类组件叫做 Cart 。render 函数中首先从状态树中解构拿到 cart 数据。用 hasProduct 保存 cart 是否为空的状态。cart 暂时只保存商品 id ，所以 map 一下把 JSX 保存到 productList 常量中，return 语句中，判断如果 cart 为空，就显示‘请添加商品’，否则就显示商品列表。

浏览器中，可以看到 Cart 组件部分显示出了“请添加商品”几个字，如果测试性的到 reducers/cart.js 的初始值中添加几个 id 进来，页面上是可以显示出来的。
