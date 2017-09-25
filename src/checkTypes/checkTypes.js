/**
 * 校验数组
 */

 import _ from 'lodash';

 //数组
 export const checkArray = (array) =>{
     return _.isArray(array);
 }

 //对象
 export const checkObject = (object) =>{
     return _.isObject(object);
 }

 //函数
export const checkFunction = (func) =>{
    return _.isFunction(func);
}