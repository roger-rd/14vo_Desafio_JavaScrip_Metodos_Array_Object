let inputNuevaTarea = document.querySelector("#inputNuevaTarea")
let btnAgregar = document.querySelector("#btnAgregar")
let totalTareas = document.querySelector("#totalTareas")
let totalRealizadas = document.querySelector("#totalRealizadas")
let listaTareas =document.querySelector("#listaTareas")

let tareas =[
{ id: Date.now() + 1, nombreTarea: "Hacer Mercado", check:  false },
{ id: Date.now() + 2, nombreTarea: "Estudiar para Desafio ", check: false },
{ id: Date.now() + 3, nombreTarea: "Limpiar la Casa",  check:  false,},
]

const totalCompleted = ()=>{
    arrayCompleted = tareas.filter((completed)=>completed.check!==false);
    return arrayCompleted.length};


const render = () => {
    listaTareas.innerHTML = "";
    totalTareas.innerHTML = `${tareas.length}`
    totalRealizadas.innerHTML=  totalCompleted();

    tareas.forEach((tarea)=>{
        if(tarea.check ===false){
        listaTareas.innerHTML += `
        <tr><td> ${tarea.id}</td><td> ${tarea.nombreTarea} </td>
        <td><input type="checkbox" class= "check" onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnX" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
        }else{
        listaTareas.innerHTML += `
        <tr> <td> ${tarea.id}</td><td> ${tarea.nombreTarea} </td>
        <td><input type="checkbox" class= "check" checked onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnX" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
console.log(tarea.id)
        }
    })

}

render()

const checkTarea = (chekeador) => {
    tareas.forEach((tarea) => {
        if (tarea.id === chekeador) {
            if (tarea.check === false) {
                tarea.check = true;
                render();
            } else {
                tarea.check = false;
                render();
            }
        }
    });
};


btnAgregar.addEventListener("click", () => {
    if (inputNuevaTarea.value == "") {
        alert("Coloca una Tarea")
    } else {
        tareas.push({
            id: Date.now(),
            nombreTarea: `${inputNuevaTarea.value}`,
            check: false,
        });
        inputNuevaTarea.value = "";
        return render(); 
    }
})

const deleteTarea = (btnX) =>{
    tareas = tareas.filter((elim)=> elim.id !== btnX);
    render();
   
}


