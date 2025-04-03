/* Crea el evento para que se cargue todo el documento primero */
document.addEventListener('DOMContentLoaded', () => {

    /* Crea la variable para traer el boton calcular y añade el evento de clic */
    const botonCalcular = document.getElementById('botonCalcular');
    botonCalcular.addEventListener('click', () => {
    
        /* Trae los valores de los input y los convierte a numeros tipo Float, ademas si no hay elemento se guarda en la variable el 0 */
        /* Explicado tambien en el index: los inputs (ids) en la primera seccion van: la primera fila (1_1 a 1_3 -> Seria resultado1) y en la segunda fila (1_4 a 1_6 -> Seria resultado2) */
        /* En la segunda seccion van en la primera fila (2_1 a 2_5 -> Seria "resultado3") y en la segunda fila (2_6 a 2_10 -> Seria "resultado4") */
        const input1_1 = parseFloat(document.getElementById('input1_1').value) || 0;
        const input1_2 = parseFloat(document.getElementById('input1_2').value) || 0;
        const input1_3 = parseFloat(document.getElementById('input1_3').value) || 0;
        const input1_4 = parseFloat(document.getElementById('input1_4').value) || 0;
        const input1_5 = parseFloat(document.getElementById('input1_5').value) || 0;
        const input1_6 = parseFloat(document.getElementById('input1_6').value) || 0;
        const input2_1 = parseFloat(document.getElementById('input2_1').value) || 0;
        const input2_2 = parseFloat(document.getElementById('input2_2').value) || 0;
        const input2_3 = parseFloat(document.getElementById('input2_3').value) || 0;
        const input2_4 = parseFloat(document.getElementById('input2_4').value) || 0;
        const input2_5 = parseFloat(document.getElementById('input2_5').value) || 0;
        const input2_6 = parseFloat(document.getElementById('input2_6').value) || 0;
        const input2_7 = parseFloat(document.getElementById('input2_7').value) || 0;
        const input2_8 = parseFloat(document.getElementById('input2_8').value) || 0;
        const input2_9 = parseFloat(document.getElementById('input2_9').value) || 0;
        const input2_10= parseFloat(document.getElementById('input2_10').value) || 0;
        

        /* Hace las sumas de los valores agregados, primero las primeras dos filas (2023 y 2024) , luego las 2 filas del medio (2024 y 2024) y por ultimo suma la fila de cada año */
        const calculo1 = input1_1 + input1_2 + input1_3;
        const calculo2 = input1_4 + input1_5 + input1_6;

        const calculo3 = input2_1 + input2_2 + input2_3 + input2_4 + input2_5;
        const calculo4 = input2_6 + input2_7 + input2_8 + input2_9 + input2_10;

        const calculo5 = calculo1 + calculo3;
        const calculo6 = calculo2 + calculo4;

        /* Le asigna los valores de la suuma en su respectivo lugar */
        document.getElementById('resultado1').innerHTML = calculo1;
        document.getElementById('resultado2').innerHTML = calculo2;

        document.getElementById('resultado3').innerHTML = calculo3;
        document.getElementById('resultado4').innerHTML = calculo4;

        document.getElementById('resultado5').innerHTML = calculo5;
        document.getElementById('resultado6').innerHTML = calculo6;
    });
});