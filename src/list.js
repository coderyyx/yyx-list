/**
 * 实现类似的java的List集合
 * 封装常用的一些方法，使业务代码更简洁、优雅
 * 基于ECMAScript 2015 js Array API封装
 */
import {checkArray,checkObject,checkFunction} from './checkTypes/checkTypes.js';

const noop = () =>{}

const defaultOptions = {
    queryField : ''
}

//新增判断initArray必须是数组，options必须是对象或者null
//
var List = function(initArray,options){
    if(!(this instanceof List)){
        console.error('get instancer better!');
        return new List(initArray,options);
    }
        
    if(!checkArray(initArray))
        throw Error('必须传入一个数组！');
    this.initArray = initArray || [];
    this.options = Object.assign({},defaultOptions,options || {});
}

List.prototype = {
    //新增成员，返回新增后的list长度
    add:function(item){
        if(item==''){
            throw Error('新增不能为空！');
        }
        this.initArray.push(item);
        return this.initArray.length;
    },
    //删除单个成员，传入下标位置
    reomve:function(index){
        this.initArray.splice(index,1);
        return this.initArray;
    },
    //查询数组长度
    size:function(){
        return this.initArray.length;
    },
    //查询子项
    queryItem:function(queryObject){
        let list = this.initArray;
        let length = list.length;
        if(length==0)
            return null;
        //在一个object list中查询 传入一个object
        if(checkObject(queryObject)){
            let queryField = queryObject.field || this.options.queryField;
            let queryValue = queryObject.value || '';
            for(let i=0;i<length;i++){
                if(list[i][queryField]==queryValue)
                     return list[i];
            }
            return null;
        }else{//传入一个list
            for(let i=0;i<length;i++){
                if(list[i]==queryObject)
                    return true;
            }
            return false;
        }
    },
    //数组中是否存在某个元素
    has:function(item){
        let list = this.initArray;
        let length = list.length;
        if(length==0)
            return false;
        for(let i=0;i<length;i++){
            if(list[i]==item)
                return true;
        }
        return false;
    },
    //清空列表
    clear:function(){
        let list = this.initArray;
        let length = list.length;
        if(length==0)
            return false;
        for(let i=0;i<length;i++){
            this.reomve(i);
        }
        return this.initArray;
    }
}

export default  List;