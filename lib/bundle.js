(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _list = __webpack_require__(1);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _list2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 实现类似的java的List集合
	 * 封装常用的一些方法，使业务代码更简洁、优雅
	 * 基于ECMAScript 2015 js Array API封装
	 */
	var noop = function noop() {};

	var defaultOptions = {
	    queryItem: ''

	    //新增判断initArray必须是数组，options必须是对象或者null
	    //
	};var List = function List(initArray, options) {
	    this.initArray = initArray || [];
	    this.options = Object.assign({}, defaultOptions, options || {});
	};

	List.prototype = {
	    //新增成员，返回新增后的list长度
	    add: function add(item) {
	        if (item == '') {
	            throw Error('新增不能为空！');
	        }
	        undefined.initArray.push(item);
	        return undefined.initArray.length;
	    },
	    //删除单个成员，传入下标位置
	    reomve: function reomve(index) {
	        undefined.initArray.splice(index, 1);
	        return undefined.initArray;
	    },
	    //查询数组长度
	    size: function size() {
	        return undefined.initArray.length;
	    }
	};

	exports.default = List;

/***/ })
/******/ ])
});
;