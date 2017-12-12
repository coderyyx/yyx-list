// 深拷贝
export const deepCopy = (obj)=>{
    let copy;
    let dataType = typeof obj;
    if(!dataType==='object' || dataType==='function'){
        copy = obj;
        return;
    }
    for(let item in obj){
        copy[item]=typeof obj[item]=='object'?deepCopy(obj[item]):obj[item];
    }
    return copy;
}