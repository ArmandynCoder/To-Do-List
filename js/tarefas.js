let input = document.getElementById('ipt-tarefa');
let lista = document.getElementById('lista-tarefas');
let count = 0;

function adicionarTarefa(){
    if(input.value.trim() === ""){
        alert("informe uma tarefa válida");
        return;
    }
    ++count;
    let li = document.createElement("tasks");
    li.innerHTML = `<div class="tasks" id="${count}">
                    <div class="tarefa">${input.value}</div>
                    <button onclick="concluirTarefa(${count})" id="tarefa-feita"><img src="assets/img/tarefa-concluida.png" alt="check-img"></button>
                    <button onclick="deletarTarefa(${count})" id="tarefa-deletar"><img src="assets/img/lixeira.png" alt="lixeira-img"></button>
                </div>`;
    lista.appendChild(li);
    input.value = "";
}

function concluirTarefa(count){
    let item = document.getElementById(count);
    if(item.classList.contains("tarefa-concluida")){
        item.classList.remove("tarefa-concluida");
        lista.prepend(item);
    }else{
        item.classList.add("tarefa-concluida");
        lista.appendChild(item);
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode===13){
        event.preventDefault();
        Add.click();
    }
});

function deletarTarefa(count){
    let item = document.getElementById(count);
    item.remove();
}
