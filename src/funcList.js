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



var funcList = funcList || {} ;

funcList = {
    //新增成员，返回新增后的list长度
    add:function(item){
        if(!item){
            throw Error('新增不能为空！');
        }
        this.push(item);
        return this;
    },
    //删除单个成员，传入下标位置
    //兼容删除object list 还未完成！！
    reomve:function(queryObject){
        let list = this;
        if(!checkObject(queryObject))
            return list.splice(queryObject,1);
        else{
            let queryField = queryObject.field;
            let queryValue= queryObject.value;
            if(!queryField)
                throw Error("查询字段不能为空！");
            for(let i=0,length=list.length;i<length;i++){
                if(list[i][queryField]==queryValue){
                    list.splice(i,1);
                    return list;
                }
            }
            return list;
        }
    },
    //查询数组长度
    size:function(){
        return this.length;
    },
    //查询子项
    queryItem:function(queryObject){
        let list = this;
        let length = list.length;
        if(length==0)
            return null;
        if(!queryObject.field)
            throw Error("必须传入查询字段！");
        //在一个object list中查询 传入一个object
        if(checkObject(queryObject)){
            let queryField = queryObject.field;
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
        let list = this;
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
        let list = this;
        let length = list.length;
        if(length==0)
            return false;
        for(let i=0;i<length;i++){
            this.reomve(i);
        }
        return this;
    },
    //取集合
    getCollection:function(queryObject){
        let list = this;
        let temp = new Array();
        let queryField = queryObject.field;
        if(!queryField)
            throw Error("统计字段不能为空！");
        for(let i=0,length=list.length;i<length;i++){
            if(list[i][queryField])
                temp.push(list[i][queryField])
        }
        return temp;
    },
    pos:function(queryObject){
        let list = this;
        if(!checkObject(queryObject))
            return list.indexOf(queryObject);
        else{
            let queryField = queryObject.field;
            let queryValue= queryObject.value;
            if(!queryField)
                throw Error("查询字段不能为空！");
            for(let i=0,length=list.length;i<length;i++){
                if(list[i][queryField]==queryValue)
                    return i;
            }
            return undefined;
        }
    }
}

export default  funcList;