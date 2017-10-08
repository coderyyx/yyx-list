# yyx-list
基于ECMAscript 2015 的Array Api 封装的类似java的List集合
把平时业务中常用的方法封装到一起，主要目的简化业务代码，结构更清晰。
希望大家提出宝贵意见，使它更加完善。

[![travis][travis-image]][travis-url]
[![dep][dep-image]][dep-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/then/yyx-list.svg?style=flat
[travis-url]: https://travis-ci.org/then/monkeyui
[dep-image]: https://img.shields.io/david/then/yyx-list.svg?style=flat
[dep-url]: https://david-dm.org/then/yyx-list
[npm-image]: https://img.shields.io/npm/v/yyx-list.svg?style=flat
[npm-url]: https://npmjs.org/package/yyx-list
[downloads-image]: https://img.shields.io/npm/dm/yyx-list.svg?style=flat
[downloads-url]: https://npmjs.org/package/yyx-list

##install:
<code>npm install yyx-list</code>

## Tips
这些API将挂载到全局JavaScript环境，所有数组将默认实现这些api，请在应用启动时予以引用；

___________________________________________
## Usage yyx-list 

```javascript
require('yyx-list');
 
let ins = [1,2,3]; 
 
//添加元素
ins.add();
return list;
 
//移除元素
ins.remove(item)
return boolean;
 
//list 长度
ins.size();
return length;
 
//查询object list
ins.queryItem({field:'field',value:555});
return queryObject;
 
//统计某个字段的集合
ins.getCollection({field:'field'});
return arrayList;
 
//查询某个元素位置
ins.pos({field:'field',value:555} || 'string')
return position;
 
//清空list
ins.clear()
return empty list;

```
___________________________________________

