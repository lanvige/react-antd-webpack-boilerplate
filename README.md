# REACT-ANTD-WEBPACK-BOILERPLATE

这是一个基于 React.js, ant design 和 Webpack 2 的最佳实践。

- React 15 & React Router 4
- Ant Design 3
- Webpack 3

项目主要关注点在于如何构建一个大型的工程，使用这套如何的前提下，之前的最佳实践是否依然可行，和其配置方案。

这其中包括

- 工程组织、结构
- 性能优化方案


## 回望过去

回想 Rails 时代，最佳方案大抵是这样吧：

会有一个项目的 `framework_and_overrides.css.scss` 文件，这里，可以制作属于自己的 framework 底层，它可以直接依赖 bootstrap，但一般不会这样做，而且依赖 bootstrap 的某些具体的库。定制 bootstrap，然后做出扩展，就像下面：


``` css
// import the CSS framework
@import "bootstrap";
@import "jasny-bootstrap";

// make all images responsive by default
img {
  @extend .img-responsijve;
  margin: 0 auto;
}

// override for the 'Home' navigation link
.navbar-brand {
  font-size: inherit;
}
```

然后在编译时，来配置文件的入口，入口文件及其依赖会被打包在一起。

``` ruby
Rails.application.config.assets.precompile += %w( framework_and_overrides.css app_mobile.css app_admin.css app_error.css )
Rails.application.config.assets.precompile += %w( framework_and_overrides.js app_mobile.js app_admin.js )
```

然后在页面中引用就可以了。

``` js
= stylesheet_link_tag 'framework_and_overrides', media: 'all', 'data-turbolinks-track' => true
```

## 第一性原理

虽然 React 通过组件改变了一些东西，但细想本质，原理还是不会变化的。在浏览器里的那些原则。


JS/CSS/HTML 单独的情况被改变了。它变成了一个合成的包了。叫 component。

js中可以直接引用 css，js 中也必须要引用另一个 js 才能使使用它。这不再是之前的分享式的原则了。

像 rails 那样 framework_and_overrides 在开发期间是没有什么依赖的，而且 js css 是分离的。

就是说在开发新的 app 级别的 component 时，不用依赖 framework，或者说它两是解耦的，但在 react 中，就不是，它一定要 import framework，才能使用。

这就要在打包时关注这一点。

所以 import react 和 import react.xxx 是有区别的了。


## 工具和流程

webpack 是整体的方案，关于性能

