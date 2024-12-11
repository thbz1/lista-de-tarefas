$(document).ready(function() {
    const tarefas = []

    $('button').click(function(e) {
        e.preventDefault()

        const valores = $('#input-tarefa').val().trim()

        if (valores === '') {
            return
        }

        if (tarefas.includes(valores)) {
            alert(`A lista já contém "${valores}".`)
        } else {
            tarefas.push(valores)

            const novaTarefa = $('<li></li>').text(valores)
            $('#lista-tarefas').append(novaTarefa)
        }
        $('#input-tarefa').val('')
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).css('text-decoration', '4px line-through red')
    })
})