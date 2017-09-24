/**
 * 实现类似的java的List集合
 * 封装常用的一些方法，使业务代码更简洁、优雅
 * 基于ECMAScript 2015 js Array API封装
 */
const noop = () =>{}

const defaultOptions = {
    queryItem : ''
}

//新增判断initArray必须是数组，options必须是对象或者null
//
var List = function(initArray,options){
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
    }
}

export default  List;