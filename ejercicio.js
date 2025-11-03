function ejercicio1() {
    const calcularGastos = document.getElementById("calcularGastos")

    calcularGastos.addEventListener("click", function () {
        const numAlojamiento = parseFloat(document.getElementById("gastosAlojamiento").value)
        const numAlimentacion = parseFloat(document.getElementById("gastosAlimentacion").value)
        const numEntretenimiento = parseFloat(document.getElementById("gastosEntretenimiento").value)

        let sumaGastos = (numAlimentacion + numAlojamiento + numEntretenimiento).toFixed(2)

        document.getElementById("costeTotal").innerHTML = "Gastos de alojamiento: " + numAlojamiento + "€" + "<br>" + "Gastos de alimentación: " + numAlimentacion + "€" + "<br>" + "Gastos de entretenimiento: " + numEntretenimiento + "€" +"<br>" + "El coste total del viaje es de: " + sumaGastos + "€" 
    })

}

ejercicio1()

function ejercicio2() {
    const calcularEdad = document.getElementById("calcularEdad")

    calcularEdad.addEventListener("click", function () {
        const edadPerroHumana = parseFloat(document.getElementById("inputEdad").value)
        const edadPerroCanina =  edadPerroHumana * 7

        document.getElementById("resultadoEdadCanina").innerHTML = "Edad del perro en años humanos: " + edadPerroCanina
    })
}

ejercicio2()

function ejercicio3() {
    const calcularIMC = document.getElementById("calcularIMC")

    calcularIMC.addEventListener("click", function (){
        const peso = parseFloat(document.getElementById("peso").value)
        const altura = parseFloat(document.getElementById("altura").value)

        IMC = peso / altura**2
        let clasificacionIMC

        if (IMC <18.5) {
            clasificacionIMC = "Bajo peso."
        }
        else if (IMC >= 18.5 && IMC <=24.9) {
            clasificacionIMC = "Peso normal."
        }
        else if (IMC > 24.9 && IMC <= 29.9) {
            clasificacionIMC = "Sobrepeso."
        }
        else {
            clasificacionIMC = "Obesidad."}

        document.getElementById("IMC").innerHTML = "IMC: " + IMC + "<br>" + "Clasificacion: " + clasificacionIMC
    })
}

ejercicio3()

function ejercicio4() {
    
}

ejercicio4()