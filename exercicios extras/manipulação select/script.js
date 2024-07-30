var sel = document.getElementById('sel');
        sel.addEventListener('change', selecao);

        function selecao(evento) {
            const selecaoValor = evento.target.value;

            if (selecaoValor == '1') {
                alert('1')
            }
        }