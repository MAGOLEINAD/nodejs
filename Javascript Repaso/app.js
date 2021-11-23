
const empleados = [
    {
        id: 1,
        nombre: 'Sergio',
    },
    {
        id: 2,
        nombre: 'Juan',
    },
    {
        id: 3,
        nombre: 'Carlos',
    },
];
const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    },
    {
        id: 3,
        salario: 3000,
    }
];

const getSalariobyId = (id,callback) => {
    const salario = salarios.find ((s) => s.id === id)
    //Si Salario existe no hay ningun error, entonces enviar como primer argumento del Callback el error en NULL. 
    if (salario) {
        callback(null,salario) 
    }
    //Si salario NO EXISTE va tirar, como primer argumento del callback
    else {
        callback( `Ese ID no existe`)
    }
  
}
getSalariobyId (1, (err, salario) => {
    if (err) {
        console.log('error!!!')
       return console.log(err)
    }
    console.log('Salario Existe')
    console.log(salario)
})


// console.log(getSalariobyId(2, (err, salario) =>{
//     console.log(salario)
// }))