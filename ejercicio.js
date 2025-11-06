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
    const calcularDescuento = document.getElementById("calcularDescuento")

    calcularDescuento.addEventListener("click", function() {
        const original = parseFloat(document.getElementById("precioOriginal").value)
        const descuento = parseFloat(document.getElementById("descuento").value)

        const precio = original - (original * descuento/100) 

        document.getElementById("nuevoPrecio").innerHTML = "El precio final de su producto después de apicar un descuento del " + descuento + "% es: " + precio + " euros." 
    })
}

ejercicio4()


function ejercicio5() {
    const calcularPrimos = document.getElementById("calcularPrimos")

    calcularPrimos.addEventListener("click", function (){
        const num1 = parseInt(document.getElementById("num1").value)
        const num2 = parseInt(document.getElementById("num2").value)
        const primos = []

        for (let num = num1; num <= num2; num++) {
            let contador = 0
            for (let i = 2; i<num; i++) {
                if (num%i == 0) {
                    contador+=1
                }          
            }
            if (contador == 0) {
                primos.push(num)
            }
        
        document.getElementById("numPrimos").innerHTML = "Los numeros primos son: " + primos
        }
    })
}

ejercicio5()

function ejercicio6() {
}

ejercicio6()
