function findIndex(str,cha,num){
    var x=str.indexOf(cha);
    for(var i=0;i<num;i++){
        x=str.indexOf(cha,x+1);
    }
    return x;
}

function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}


export {
    findIndex,
    isEmpty
}
