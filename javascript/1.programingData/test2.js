let myVoca = {
    addVoca : function (key, value) {
        myVoca[key] = value;
    },
    deleteVoca : function (key){
        delete myVoca[key];
    },
    printVoca : function (key){
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    }
}

myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성')
console.log(myVoca);

myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

myVoca.printVoca('property');