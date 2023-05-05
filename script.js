const mensajeEscrito = document.querySelector(".ingresa-texto");
const mensajeMostrado = document.querySelector(".muestra-texto");
const fondoOriginal = mensajeMostrado.style.backgroundImage;

function botonEncriptar() {
    const textoAEncriptar = encriptar(mensajeEscrito.value);
    mensajeMostrado.value = textoAEncriptar;
    mensajeEscrito.value= "";
    mensajeMostrado.style.backgroundImage = "none";
}

function botonDesencriptar() {
    const textoADesencriptar = desencriptar(mensajeEscrito.value);
    mensajeMostrado.value = textoADesencriptar;
    mensajeEscrito.value= "";
    mensajeMostrado.style.backgroundImage = "none";
}

function copiar() {
    const contenido = document.getElementById("mensaje")
    if (contenido.value !== "") {
        contenido.select();
        document.execCommand('copy');
        mensajeMostrado.value= "";
        alert("El mensaje ha sido copiado");
        mensajeMostrado.style.backgroundImage = fondoOriginal;
    }else{
        alert("No hay mensaje para copiar")
    }
}

function encriptar(textoEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptado.includes(matrizCodigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}