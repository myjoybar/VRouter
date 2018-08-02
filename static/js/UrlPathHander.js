function getChannel(fullPath) {
    if(isEmpty(fullPath)){
        return "";
    }

    var startIndex = findIndex(fullPath, "/", 1)
    var endIndex = findIndex(fullPath, "/", 2)
    var realChannel = fullPath.slice(startIndex + 1, endIndex)
    if (isEmpty(realChannel)) {
        console.log("realChannel is empty" + realChannel);
    } else {
        console.log("realChannel is not empty=" + realChannel);
    }
    return realChannel;
}

function getLanguage(fullPath) {
    if(isEmpty(fullPath)){
        return "";
    }
    var startIndex = findIndex(fullPath, "/", 2)
    var endIndex = findIndex(fullPath, "/", 3)
    var realChannel = fullPath.slice(startIndex + 1, endIndex)
    if (isEmpty(realChannel)) {
        console.log("Language is empty" + realChannel);
    } else {
        console.log("Language is not empty=" + realChannel);
    }
    return realChannel;
}


function getModule(fullPath) {
    if(isEmpty(fullPath)){
        return "";
    }
    var startIndex = findIndex(fullPath, "/", 3)
    var endIndex = findIndex(fullPath, "/", 4)
    var realChannel = fullPath.slice(startIndex + 1, endIndex)
    if (isEmpty(realChannel)) {
        console.log("module is empty" + realChannel);
    } else {
        console.log("module is not empty=" + realChannel);
    }
    return realChannel;
}





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
    getChannel,
    getLanguage,
    getModule
}
