---
layout: post
title:  Chrome DevTools 的应用
date:   2015-10-22
categories: Technology
description: 工欲善其事，必先利其器。
tag: tech fe front-end developer
---

> 工欲善其事，必先利其器。

就前端而言，Chrome DevTools 是 Debug 以及性能分析的神器。
就前端工程师而言，用好调试和性能工具，才能够算是一个出色的前端工程师。
我在这篇文章中将总结 Chrome DevTools 的一些最为典型的用法，以提高研发和调试效率。

本文主要参考的资料：Chrome DevTools [Chrome 官方文档](https://developer.chrome.com/devtools) (主要是官方文档又长又臭，加之英文版很少有人完全认真读完，所以在此结合自身经验总结最有价值的，最常用的部分于后方，查漏补缺，说不定有新发现~)

## 启用调试工具

- 在网页中右键单击`审查元素` 或者 `右上角菜单栏中 -> 更多工具 -> 开发者工具`
- 快捷键：`Ctrl[Command] + Shift[Opt] + I/J/C`
    - `I` 打开调试工具，
    - `J` 直接进入Console
    - `C` 启动 Inspect Element 模式等价于右键在相关元素上单击审查元素
- 点击调试工具左上角的 手机图标 可以进入 Device Mode（设备模式，可以模拟 iPad、iPhone 等测试环境）这一部分本文就没有详细提及了，请自行查阅：[Device-Mode](https://developer.chrome.com/devtools/docs/device-mode) 
    - 设备模拟：屏幕比例、尺寸、分辨率、DPR
    - 模拟设备的旋转、模拟网络连接速度（2G网络、3G网络）
    - Media-Query 模拟
    - Sensors 模拟（Emulation 选项卡中、高大上！）

## DevTools 设置

![01.png](/img/articles/webdevtools/01.png)

- 注意1：在基础设置里面，有很多功能是需要手动启动的，例如比较常用的：*Disable Cache* (while DevTools is open)（缓存禁用）。
- 注意2：推荐启动 ShadowDOM、标尺、Ajax请求Log 的设置。选项，这有利于提高平时的开发效率。

至于其余选项，实际开发中按需勾选。左上角还有 Devices 选项、Workspace 选项（支持本地加载文件的沙箱）、快捷键等选项，可以按需配置。调试面板支持对应的横屏、竖屏以及独立出来的现实方式，由个人喜好而定。面板右上方有一个 Drawer 的选项，点击他之后可以出一个抽屉状的区域，方便进行 Console, Search, Emulation, Rendering 选项卡的调试。快捷键是：[ESC]

## 工具的分类

Chrome 官方调试工具目前一共有 8 个部分构成，接下来将逐一介绍这些工具的用法。

### Elements

Elements 面板提供了对 HTML、CSS 的一系列实时的增删查改操作，方便开发者实时调试代码。我们能够实时在页面上上做实验，然后再回去修改编辑器中的代码。

- 使用 Inspect Element Mode 来定位页面上的元素能够快速找到其在 DOM 中的位置，可以通过点击 *放大镜* 的小图标来激活查找。也可以在页面的元素上右键单击：审查元素获取。
- 选中对应的 DOM 之后右键可以编辑对应的节点的 HTML 源码，增删查改节点，还可以模拟元素 `hover`, `click`, `focus`, `visited` 等状态的触发。

在右侧选项卡中，支持如下的强大功能：

- Styles 选项卡中，我们能够对对应元素的样式 **实时** 进行修改，Filter 方便查找对应的 CSS 样式，右上角的三个小标，分别支持添加新的规则、触发元素的状态改变以及修改动画速度。
    - 由上图可见，调试工具非常方便，自动帮我们计算选择器的优先级，CSS规则是否适用等等，后面的元素盒模型也提供了精准的计算数据供参考。
    - CSS层级也分别显示出：级联的样式优先级、用户代理样式、作者样式、继承样式。
- Computed 选项卡输出的是经过合并计算之后的元素样式，这些值是最终渲染到屏幕上的数据。
- EventListener 能够查看绑定在当前元素及其父元素上的事件监听器，可以在调试事件代码的时候进行查看。
- DOM Breakpoints 可以查看当前元素上所设置的断点，一般来说有：子节点变化、节点属性被修改、节点被删除的断点，方便调试针对节点操作的代码。

Tips：

- 元素支持拖曳操作，可以任意调换元素在 Document 中的位置。
- 在修改了 Elements 中对应的 HTML,CSS 后可在 Sources 面板中找到相关文件，点击右键：Local Modifications 可以查看对应的改动，方便将改动移植到编辑器中。

### Console

Console 面板提供了一套针对开发者和代码之间交流的通道：

- 它能够显示开发者主动通过 console 对象 log 的信息，同时 Google 为开发者提供了 Console API 以扩展 Console 的调试功能。

- 它能显示错误，警告和提示信息，同时能够能够追溯到抛出信息的源码，以连接到 Sources 面板进行更深层次的诊断。

- 它能够 LOG 网络请求。

- 它能够实时地和当前的全局对象进行交互，类似于 Node 的实时解释器。

- 它还能够连接到 Network 面板和 Sources 面板等用于实时定位抛出信息的网络请求和代码。

#### 常用的 Console API

- `console.log()`, `console.warn()`, `console.error()`信息、警告、错误
- `console.assert(a<=5, ‘a should <= 5’)` 断言
- `console.trace()` 能够打印出当前执行函数的调用栈
- `console.table([{‘a’:1},{‘b’:2}])` 格式化复杂的数据结构为表格的样式
- `console.time(’taskname’), console.timeEnd(’taskname’)` 记录运行时间，同时会在 Timeline 时间轴上显示
- `console.timeStamp(’name’)` 可以命名 Timeline 中函数调用步骤名称

Console 的 API 参考如下：[Console API](https://developer.chrome.com/devtools/docs/console)

Tips:

- Console 支持 Filter 能够过滤掉不同的信息，或者只保留有效的信息，比如只保留开发者所手动 Log 的 Logs。
- 使用 debugger; 命令能够让 js 在 console 中打断点，并且在该行暂停执行。
- 使用 `profile(‘mark’)`以及`profileEnd(‘mark’)`能够手动控制 JavaScript Profiler 的执行。
- 使用 `Shift + Enter` 能够在 Console 中换行，书写比较长的代码 :)
- 支持 SourceMap，针对 Browerify/Webpack 之类的合并代码在 Debug 的时候能够追溯回源代码之上。

### Sources

Sources 面板提供了强大的针对源码（主要为 JavaScript）的调试功能。它将 V8 Debugger 可视化。

- 它支持查找不同域下的代码，并在代码行上打断点。
- 它支持直接修改源代码。
- 它支持压缩代码自动格式化，方便为压缩后的代码打断点。
- 在右侧面板中提供了 JS 断点调试的重要工具：
    - continue 运行到下一个断点处
    - stop script execution 立即停止执行
    - Step over next function call 跳到下一个函数执行完毕处
    - Step into next function call 调到下一个函数执行开始处
    - Step out of current function call 跳出当前函数
    - Deactivate breakpoints 不激活断点
    - Pause on exceptions 在异常出暂停
    - Capture Async stack traces 捕获异步调用的函数站
- 支持手动输入 Watch Expressions 构建断点
- 支持查询调用栈
- 支持作用域和作用域链的查询
- 支持 DOM、XHR 以及事件处设置断点

Tips:

- 我们能够直接编辑 Source 面板的源码进行调试，同时可以查看本地文件的修改情况，这样能够大大提高效率。
- 使用 Ctrl[Command] + F 能够进行搜索源代码，甚至直接替换代码。
- 在断点处单击右键可以编辑触发断点的条件。

### Network

Network 面板提供了调试网络性能的一系列工具：

- 它能够捕获所有的请求信息，并将其做成时间轴，方便查看资源或者 Ajax 请求等详细信息。
    - 它能够捕获两个重要的事件：`DOMContentLoaded` 事件（紫色线）以及 `load` 事件（红色线）的触发时间。
- 它能够记录各类请求的具体信息，以 HTTP 请求为例
    - HTTP 请求的头部信息
    - HTTP 请求相应的信息、响应信息的预览（图片、JSON格式化、网页预览等）
    - HTTP 请求所携带的 Cookie
    - HTTP 请求耗时的具体信息，具体的字段值标记含义可以参考：[Chrome Network Timing](https://developer.chrome.com/devtools/docs/network#resource-network-timing)
- 它能够和资源面板保持连接，方便选择资源的跳转。

一个 Web 请求的网络流程：
![image](/img/articles/webdevtools/02.png)
具体的数据，可以通过：`window.performance.getEntries()` 获得各个资源的网络时间戳。

Tips:

- 在请求资源上右键可以拷贝各种请求相关的信息，比如：cURL, HAR，请求头，响应信息等等，颇为方便。
- 针对 Ajax 请求，右键支持重新发送相同的 Ajax 请求，方便调试。
- 支持 WebSocket Inspection 功能，可以使用 Filter 将 WebSocket 独立出来。
- 时间轴上表格的标题列上右键可以添加更多的 HTTP 属性进入到表格中，比如 method 属性。

### Timeline

Timeline 面板提供了一套用于提高渲染性能的工具，它能够清晰地显示整个浏览器渲染一张网页、执行各种操作的细节信息。主要记录了以下四种操作耗时：
![image](/img/articles/webdevtools/03.png)
可以通过：Events 模式来查看捕获到的事件信息；Frames 模式可以显示捕获到的页面性能信息；Memory 模式可以查看页面内存的使用情况。

通过理解如下标记所表示的事件含义，我们能够更好地理解页面的事件流程，检查出类似于强制型 Layouts 的影响页面性能的代码（Timeline 中一般会以小三角警告之）：

![image](/img/articles/webdevtools/04.png)
![image](/img/articles/webdevtools/05.png)
![image](/img/articles/webdevtools/06.png)
![image](/img/articles/webdevtools/07.png)

### Profiles

Profiles 面板提供了一系列用于提高 JavaScript / CSS 性能的工具：

- CPU Profiler：它能够显示脚本调用的函数所使用的 CPU 时间。可以统计出耗时最多的函数，以考虑优化。
- Heap Profiler：它能够显示脚本所分配的内存情况。（主要是 JS 对象和 DOM 节点）以此检查是否存在内存泄露或者页面占用内存过多的问题。
- JavaScript Profile：能够显示执行脚本所运行的时间。

深入请参考：[Prifiles](https://developer.chrome.com/devtools/docs/javascript-memory-profiling)


### Resources

Resources 面板则提供了一系列的资源查询：

- 页面所下载的资源：HTML文档、CSS文档、图片、文字、脚本等等。

- 页面所对应的：WebSQL、IndexedDB、LocalStorage、SessionStorage、Cookies、ApplicationCache 以及 Cache Storage 信息的查询。
    - Cookies 是常用的面板，我们可以在这里浏览、删除、修改 Cookies。
    - LocalStorage 也就不赘述了。
    - ApplicationCache 是通过 manifest 文件定义的缓存文件，支持离线应用。

### Audits

针对页面提供优化意见，官方推荐使用 PageSpeed Insights 在线测试工具来替代。[推荐工具](https://developers.google.com/speed/pagespeed/insights/)

最后：

- Chrome 的这个调试工具还支持调试 NodeJS 所编写的应用程序！参考其中一种该解决方案：[Node Inspector](https://github.com/node-inspector/node-inspector)
- React 等三方也提供了针对 React 调试的 Chrome 插件，以增强 Debugger 针对特殊应用的能力。
- Chrome 提供了 Canary 这个工具来支持开发者领略最新的 Chrome 技术，如果不嫌烦的话，可以开发用 Canary 而平时浏览网页和正式测试的时候使用 Chrome。[地址](https://www.google.com/intl/en/chrome/browser/canary.html)
- Chrome 支持远程调试 [Android](https://developer.chrome.com/devtools/docs/remote-debugging)


