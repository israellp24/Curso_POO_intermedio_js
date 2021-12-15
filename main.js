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
    },
    editA(){
        this.a="AAAAAAAA"
    }
};

/* const obj2={};

for(prop in obj1){
    obj2[prop]= obj1[prop]
}
const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1); */

/* 
const stringifiedComplexObj = JSON.stringify(obj1);

const obj2 = JSON.parse(stringifiedComplexObj); */

const numeritos = [0,1,2,3,4,5,6,8,8,9]
/* let numerito = 0

for (let index = 0; index < numeritos.length; index++) {
    numerito= numeritos[index];
    console.log({index, numerito})
} */

/* function recursiva(numbersArray){
    if(numbersArray.length !== 0){
        const firstNum=numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();//elimina la primera posicion
        recursiva(numbersArray);
    }
} */

function isObject(subject){
    return typeof subject=="object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubjet;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubjet=[];
    }else if(subjectIsObject){
        copySubjet={};
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubjet[key]=deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubjet.push(subject[key]);
            }else{
                copySubjet[key]=subject[key];
            }
        }
    }
    
    return copySubjet;
}