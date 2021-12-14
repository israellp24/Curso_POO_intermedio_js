/* const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.l og("This", this);
        console.log("This.approveCourses", this.addCourse);
        this.approvedCourses.push(newCourse);
    }
}; */

/* console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); */



/* Object.defineProperty(juan, "terminal",{
    value:"WSL",
    enumerable: true,
    writable : true,
    configurable: false,
});

Object.defineProperty(juan, "pruebaNASA",{
    value:"extraterrestes",
    enumerable: false,
    writable : false,
    configurable: false,
});

Object.defineProperty(juan, "navigator",{
    value:"Chrome",
    enumerable: false,
    writable : true,
    configurable: true,
});

Object.defineProperty(juan, "editor",{
    value:"VSCode",
    enumerable: true,
    writable : false,
    configurable: true,
}); */

//Object.seal(juan); //pone configurable en false

//Object.freeze(juan);  //pone configurable y writable en false

//console.log(Object.getOwnPropertyDescriptors(juan));

//----------------------------------------------------------------------------------------------------------------------------

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d:"d",
        e: "e",
    }
};

const obj2={};

for(prop in obj1){
    obj2[prop]= obj1[prop]
}

const obj3 = Object.assign({}, obj1);

const obj4 = Object.create(obj1);