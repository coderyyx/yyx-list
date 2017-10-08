import funcList from './funcList.js';

Function.prototype.addMethod=function(funcName,func){
    if(!this.prototype.hasOwnProperty(funcName))
        this.prototype[funcName]=func;
    else
        console.error('this.prototype['+funcName+'] exits!');
    return this;
}

var initKeys = Object.keys(funcList);

for(let i=0,length=initKeys.length;i<length;i++){
    Array.addMethod(initKeys[i],funcList[initKeys[i]]);
}

