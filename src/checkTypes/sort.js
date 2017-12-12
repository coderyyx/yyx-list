
const operator = (type)=>(a,b)=>{
    if(type === 'asc')
        return a-b;
    else if(type === 'des')
        return !(a-b);
    else 
        return a-b;
}

// 冒泡排序
 const bubbles = (arr,type) =>{
    let list = deepCopy(arr);
    let length = list.length;
    // asc des
    for(let i=0;i<length;i++){
        for(let j=0;j<length-i-1;j++){
            let temp;
            if(operator(type)(list[j],list[j+1])){
                temp=list[j];
                list[j]=list[j+1];
                list[j+1]=temp;
            }
        }
    }
    return list;
}

//选择排序
const selectSort = (arr,type) =>{
    let list = deepCopy(arr);
    let length = list.length;
    for(let i=0;i<length;i++){
        let minV=list[i];
        let pos=i;
        let temp;
        for(let j=i;j<length;j++){
            if(operator(type)(minV,list[j])){
                pos=j;
                minV=list[j];
            }
        }
        if(i!=pos){
            temp=list[i];
            list[i]=list[pos];
            list[pos]=temp;
        }
    }
    return list;
}

export {
    bubbles,
    selectSort
}