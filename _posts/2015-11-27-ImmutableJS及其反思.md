---
layout: post
title: Immutable JavaScript 及其反思
date:   2015-11-27
categories: technology
description: 工欲善其事，必先利其器。
tag: tech
---

ImmutableJS 是让 JavaScript 支持不可变的数据结构的语言扩展，它是一种高效、便捷的扩展，也是 JS  实现函数式编程的基础。它提供了 No-Side-Effects（无负面影响） 的可能性，阻遏了全局污染和变量污染。（因为 JS 很多时候是基于引用来赋值的）

- 它的好处在于：没有副作用，不会修改原有的数据结构，高效（使用了 Hash Tries，类似于 Closure 对不可变数据结构的实现），支持惰性计算（Lazy-evaluation）、强大的列表操作能力，可以 Rollback 到某一个状态上，重现问题或者错误现场。
- Facebook 实现的 ImmutableJS 适合在实战项目中使用，并发挥其特点，为相对大型项目的研发提供数据的不可变性的支持。[Immutable JS](http://facebook.github.io/immutable-js)

函数式编程以其优势特点：No-Side-Effects、Pure Functions、函数层次抽象等可能成为前端未来的编程范式，React 采用一些函数式编程的思想就是一种证据。

JavaScript 是一门强势的也是弱势的语言。

强势在于其灵活性，强大的社区后盾以及浏览器领域的统治性。最近推出的 ES2015（ES6） 很强势地弥补了部分语言的缺陷，但是缺乏普适的兼容性；

弱势在于其语言本身设计并学术一样的非严密，Good Parts 一书就是很好的证明。所以很多时候需要三方的工具、库以及框架来对语言进行扩展，比如：jQuery，Underscore 等。

因而 ImmutableJS 也是对语言基础类型的扩展，让其支持 JS 数据结构的不可变性。

最后学习 JavaScript 的时候，更多关心底层的工具使用，提高设计效率比掌握一系列的各种框架要好。一些近来的核心技术，比如：`ES6` / `Babel`、`jQuery`、`Webpack` / `Browserify`、`React` 等技术是值得深入的。
