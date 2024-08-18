const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

const presente = document.querySelector(".presente")
const oculto = document.querySelector(".oculto")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    if(regexp.test(textArea.value)){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    presente.style.display = "none"
    oculto.style.display = "flex"
    } else {

    alert("Texto no valido")
    
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function copiar() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado")
        })
}





function btnDesencriptar() {
    if(regexp.test(textArea.value)){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    presente.style.display = "none"
    oculto.style.display = "flex"
} else {
    alert("Texto no valido")
    }

}

const regexp = /^[a-z\s]+$/;

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {                
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    
            }
    
        }
        return stringDesencriptada
    }