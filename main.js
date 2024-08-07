function exibirElemento(tagId, tipoDisplay) {
    document.getElementById(tagId).style.display = tipoDisplay;
}

function ocultarElemento(tagId) {
    document.getElementById(tagId).style.display = 'none';
}

function reajustarDisplay() {
    let secao = document.getElementById('secao2');
    secao.style.justifyContent = 'space-around';
    secao.style.padding = '1% 2%';
}

function preencherTexto(tagId, texto) {
    let elemento = document.getElementById(tagId);
    elemento.value = texto;
}


/*navigator -> objeto que representa o navegador*/ 
function copiarTexto() {
    let textArea = document.getElementById('textAreaOutput').value
    navigator.clipboard.writeText(textArea).then(() => {
        alert('Texto copiado com sucesso!')
    });
    preencherTexto('textAreaOutput', 'Nenhuma mensagem');
}

function criptografar() {
    let textoOriginal = Array.from(document.getElementById('textAreaInput').value);

    let textoCriptografado = textoOriginal.map(letra => {
        if(letra === 'a') {
            return 'ai';

        } else if (letra === 'e') {
            return 'enter';

        } else if (letra === 'i') {
            return 'imes';

        } else if (letra === 'o') {
            return 'ober';

        } else if (letra === 'u') {
            return 'ufat';
        }
        return letra;
    }).join('');
    
    ocultarElemento('img-bonequinha');
    ocultarElemento('principal__secao2__div__textos');

    exibirElemento('textAreaOutput', 'inline-block');
    exibirElemento('botao__copiar', 'inline-block')

    reajustarDisplay();

    preencherTexto('textAreaInput', '');
    preencherTexto('textAreaOutput', textoCriptografado);
}

function descriptografar() {
    textoCriptografado = document.getElementById('textAreaInput').value;
    
    textoDescripto = textoCriptografado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    preencherTexto('textAreaOutput', textoDescripto)
}

