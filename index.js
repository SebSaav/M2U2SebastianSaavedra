function BorrarDiv(){
    document.getElementById("info").innerHTML = " "
}
function BorrarMayoryMenor(){
    document.getElementById("mayor").innerHTML = " "
    document.getElementById("menor").innerHTML = " "
}
function Resultados(){
    var mat1 = document.getElementById('mat1').value;
    var mat2 = document.getElementById('mat2').value;
    var mat3 = document.getElementById('mat3').value;
    var mat4 = document.getElementById('mat4').value;
    var nombre = document.getElementById('nombreEstudiante').value;
    var materias = document.getElementById('numMaterias').value;

    if((mat1 == 0) || (mat2 == 0) || (mat3 == 0) || (mat4 == 0) || (nombre == 0) || (materias == 0)) {
        alert("No puede haber campos vacios");
    } else {

        var sumaParcial = (parseInt(mat1) + parseInt(mat2) + parseInt(mat3) + parseInt(mat4));
        var sumaDescuento = sumaParcial * 0.80;
        var sumaFinal = sumaDescuento + (parseInt(20000) + parseInt(8000));
        
        document.getElementById("info").innerHTML = "<div>" + "El estudiante: " + "<strong>" + nombre + "</strong>" + " " + "inscribió " + "<strong>" + materias + "</strong>" + " " + "materias para un total de: " + "<strong>" + "$ " + sumaFinal + "</strong>" + "</div>";
        
    }

}

function Resultados2(){
    var a = document.getElementById("valA").value;
    var b = document.getElementById("valB").value;
    var c = document.getElementById("valC").value;
    var d = document.getElementById("valD").value;

    if ((a == 0) || (b == 0) || (c == 0) || (d == 0)) {
        alert("No pueden haber campos vacios")
    } else if ((a == b) || (a == c) || (a == d) || (b == c) || (b == d) || (c == d)) {
        alert("No pueden haber números repetidos")
    } else {

        let valorMayor = Math.max(a,b,c,d)
        if (valorMayor == a) {
            document.getElementById("mayor").innerHTML = "<div>" + "El mayor entre los 4 valores es: " + "<strong>" + valorMayor + "</strong>" + "</div>";
        } else if (valorMayor == b) {
            document.getElementById("mayor").innerHTML = "<div>" + "El mayor entre los 4 valores es: " + "<strong>" + valorMayor + "</strong>" + "</div>";
        } else if (valorMayor == c) {
            document.getElementById("mayor").innerHTML = "<div>" + "El mayor entre los 4 valores es: " + "<strong>" + valorMayor + "</strong>" + "</div>";
        } else if (valorMayor == d) {
            document.getElementById("mayor").innerHTML = "<div>" + "El mayor entre los 4 valores es: " + "<strong>" + valorMayor + "</strong>" + "</div>";
        }
        
        let valorMenor = Math.min(a,b,c,d)
        if (valorMenor == a) {
            document.getElementById("menor").innerHTML = "<div>" + "El menor entre los 4 valores es: " + "<strong>" + valorMenor + "</strong>" + "</div>";
        } else if (valorMenor == b) {
            document.getElementById("menor").innerHTML = "<div>" + "El menor entre los 4 valores es: " + "<strong>" + valorMenor + "</strong>" + "</div>";
        } else if (valorMenor == c) {
            document.getElementById("menor").innerHTML = "<div>" + "El menor entre los 4 valores es: " + "<strong>" + valorMenor + "</strong>" + "</div>";
        } else if (valorMenor == d) {
            document.getElementById("menor").innerHTML = "<div>" + "El menor entre los 4 valores es: " + "<strong>" + valorMenor + "</strong>" + "</div>";
        }
    }
}