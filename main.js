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

/* const obj1 = {
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
 */
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



function SuperObject(){}

SuperObject.isObject = function isObject(subject){
    return typeof subject=="object";
}

SuperObject.deepCopy = function deepCopy(subject){
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


// Requerimientos de parametros obligatorios
function requiredParam(param){
    throw new Error(param + " este parametro es obligatorio,");
}


/* const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia:{
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const juan = deepCopy(studentBase);
//Object.defineProperty(juan, "name", {
//    value: "Juanito",
//    configurable: false,
//});
Object.seal(juan); */



/* ----------------------Sin uso de prototipos----------------------------------------
function createLearningPath({
    name = requiredParam("name"),
    courses=[],
} = {}){
    const private ={
        "_name": name,
        "_courses": courses,
    };

    const public ={
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length !=0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos un carácter");
            }
        },
        get courses(){
            return private["_courses"];
        },
    };

    return public;
} 

//Fabrica de estudiantes
function createStudent({
    name = requiredParam("name"),
    email= requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approveCourses = [],
    learningPaths = [],
} = {}){
    const private ={
        "_name":name,
        "_learningPaths": learningPaths
    };
    const public ={
        email,
        age,
        approveCourses,
        socialMedia:{
            twitter,
            instagram,
            facebook,
        },
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length !=0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos un carácter");
            }
        },
        get learningPaths(){
            return private["_learningPaths"];
        },
        set learningPaths(newLP){
            if(!newLP.name){
                console.warn("Tu LP no tiene la propiedad name");
                return;
            }

            if(!newLP.courses){
                console.warn("Tu LP no tiene courses");
                return;
            }

            if(!isArray(newLP.courses)){
                console.warn("Tu LP no es una lista de cursos");
                return;
            }

            private["_learningPaths"].push(newLP);

        }
        //readName(){
        //    return private["_name"];
        //},
        //changeName(newName){
        //    private["_name"] = newName;
        //}, 
    };

    //Object.defineProperty(public, "readName",{
    //    writable:false,
    //    configurable:false,
    //});
//
    //Object.defineProperty(public, "changeName",{
    //    writable:false,
    //    configurable:false,
    //}); 


    return public;

}

const juan = createStudent(
     {
        name:"Juanito",
        age: 18,
        email:"juantito@frijolitos.com",
        twitter : "@juanito"
    } 
);


*/



// ----------------------Con uso de prototipos----------------------------------------
//Fabrica de rutas de aprendizaje
function LearningPath({
    name = requiredParam("name"),
    courses=[],
} = {}){
    this.name = name;
    this.courses= courses;

}

//Fabrica de estudiantes
function Student({
    name = requiredParam("name"),
    email= requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approveCourses = [],
    learningPaths = [],
} = {}){
    this.name= name;
    this.email= email;
    this.age= age;
    this.approveCourses= approveCourses;
    this.socialMedia ={
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths": [],
    };

    Object.defineProperty(this, "learningPaths",{
        get(){
            return private["_learningPaths"];
        },
        set(newLP){
    
            if(newLP instanceof LearningPath){
                private["_learningPaths"].push(newLP);
            }else{
                console.warn("Alguno de los learningPaths no es una instancia del prototipo LP");
            }
        },
    });
    
    for (learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex]
    } 
    
}



const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo",
});

const escuelaDataScience = new LearningPath({
  name: "Escuela de Data Science",
});

const juan = new Student({
    name:"Juanito",
    age: 18,
    email:"juantito@frijolitos.com",
    twitter : "@juanito",
    learningPaths:[
        escuelaWeb,
        escuelaDataScience,
        {
            name: "Escuela de Data Science",
            courses:[]
        }
    ]
});




