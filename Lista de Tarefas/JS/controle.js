let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.querySelector('.add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value.trim();

    if (valorInput === "") {
        return;
    }

    contador++;

    let novoItem = `
    <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-icons">
                radio_button_unchecked
            </span>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
                <i class="material-icons">delete</i> Deletar
            </button>
        </div>
    </div>
    `;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icone_' + id);

    if (!item.classList.contains('clicado')) {
        item.classList.add('clicado');
        icone.innerHTML = 'check_circle';
        icone.style.color = 'green';

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');
        icone.innerHTML = 'radio_button_unchecked';
        icone.style.color = '#000';
    }
}

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTarefa();
    }
});
