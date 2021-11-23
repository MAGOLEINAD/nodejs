const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id) => {
    const empleado = empleados.find ((e => e.id === id))?.nombre

    return new Promise ((resolve,reject) => {
         (empleado)
         ? resolve (empleado)
         : reject (`Este ID de empleado no existe`)
    })
}


const getSalario = (id) => {
    const salario = salarios.find ((s) => s.id === id )
    return new Promise ((resolve,reject) => {
     (salario)
        ? resolve(salario.salario)
        : reject (`No existe el ID del Salario`)
    })
}


// getEmpleado (1)
//             .then (empleado => console.log(empleado))
//             .catch (err => console.log(err))

// getSalario (2)
//         .then (salario => console.log(salario))
//         .catch(err => console.log(err))

const id = 2
let nombre 

        getEmpleado (id)
            .then (empleado => { 
                nombre = empleado
                return getSalario (id)
            })
            .then (salario => console.log('El empleado:' ,nombre , 'tiene un salario de:' ,salario))
           
