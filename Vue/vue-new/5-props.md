# 传递属性

前面组件内使用数据介绍过了，那么如何往子组件中传递数据呢？这就用到属性的技巧。

### 静态属性

方式非常简单，父组件中这样写

Post.vue

```
<PostBody title="Git 技巧"></PostBody>
```

PostBody

```
<template>
  {{ title }}
</template>

<script>
  props: ['title'],
</script>
```

然后到 PostBody 组件内部声明一下，就可以直接使用 title 这个变量了。

### 动态属性

上面的方式，只能传入固定值，而实际中，我们经常需要传变量。

这样，我们就需要用到 v-bind 指令了。

PostBody.vue

```html
<template>
  <PostBody :title="title"></PostBody>
</template>
<script>
    data: () => ({
      title: 'React 技巧'
    }),
</script>
```

`v-bind:` 也可以[简写为冒号](https://cn.vuejs.org/v2/guide/syntax.html#v-bind-缩写)，下面来初始化 title 数据。

浏览器中，可以看到 title 显示出来了。
