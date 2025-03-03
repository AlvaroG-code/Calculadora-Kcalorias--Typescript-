/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// Definición de varaibles//
let nombre = "Alvaro";
//captura de informacion a partir del form//
const sexoSelect = document.getElementById("sexo");
const actividadSelect = document.getElementById("actividad");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const edadInput = document.getElementById("edad");
const kcMin = document.getElementById("calMin");
const kcMax = document.getElementById("calMax");
const botonCalculo = document.querySelector("button");
//Funcion de calculo de tmb//
function calcularTMB(peso, altura, edad, sexo) {
    if (sexo == 1) {
        return 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
    else {
        return 10 * peso + 6.25 * altura - 5 * edad + 5;
    }
}
function calcularKcal(actividad, tmb) {
    if (actividad == 1 /* TipoActividad.baja */)
        return (tmb * 1.375) / 1000;
    else if (actividad == 2 /* TipoActividad.moderada */)
        return (tmb * 1.55) / 1000;
    else
        return (tmb * 1.725) / 1000;
}
function calcularKcalMax(actividad, tmb) {
    if (actividad == 1)
        return (tmb * 1.55) / 1000;
    else if (actividad == 2)
        return (tmb * 1.725) / 1000;
    else
        return (tmb * 1.9) / 1000;
}
//Transformacion de datos del form//
function transformar(elemento) {
    let valor;
    valor = parseFloat(elemento.value);
    if (isNaN(valor)) {
        valor = 0;
    }
    return valor;
}
function transformarSelect(elemento) {
    let valor;
    valor = parseFloat(elemento.options[sexoSelect.selectedIndex].value);
    if (isNaN(valor)) {
        valor = 0;
    }
    return valor;
}
//recogida de datos//
function recogidaDatos(event) {
    let peso;
    let altura;
    let edad;
    let sexo;
    let actividad;
    let tmb;
    let kcalmin;
    let kcalmax;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    peso = transformar(pesoInput);
    altura = transformar(alturaInput);
    edad = transformar(edadInput);
    sexo = transformarSelect(sexoSelect);
    actividad = transformarSelect(actividadSelect);
    console.log(peso);
    console.log(altura);
    console.log(edad);
    console.log(sexo);
    console.log(actividad);
    tmb = calcularTMB(peso, altura, edad, sexo);
    kcalmin = calcularKcal(actividad, tmb);
    kcalmax = calcularKcalMax(actividad, tmb);
    console.log(tmb);
    console.log(kcalmin);
    console.log(kcalmax);
    kcMin.value = kcalmin.toString();
    kcMax.value = kcalmax.toString();
}
//Escucha de eventos//
botonCalculo.addEventListener("click", recogidaDatos);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXNvaWRlYWwvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBEZWZpbmljacOzbiBkZSB2YXJhaWJsZXMvL1xubGV0IG5vbWJyZSA9IFwiQWx2YXJvXCI7XG4vL2NhcHR1cmEgZGUgaW5mb3JtYWNpb24gYSBwYXJ0aXIgZGVsIGZvcm0vL1xuY29uc3Qgc2V4b1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V4b1wiKTtcbmNvbnN0IGFjdGl2aWRhZFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpZGFkXCIpO1xuY29uc3QgcGVzb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNvXCIpO1xuY29uc3QgYWx0dXJhSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsdHVyYVwiKTtcbmNvbnN0IGVkYWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRhZFwiKTtcbmNvbnN0IGtjTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxNaW5cIik7XG5jb25zdCBrY01heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsTWF4XCIpO1xuY29uc3QgYm90b25DYWxjdWxvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbi8vRnVuY2lvbiBkZSBjYWxjdWxvIGRlIHRtYi8vXG5mdW5jdGlvbiBjYWxjdWxhclRNQihwZXNvLCBhbHR1cmEsIGVkYWQsIHNleG8pIHtcbiAgICBpZiAoc2V4byA9PSAxKSB7XG4gICAgICAgIHJldHVybiAxMCAqIHBlc28gKyA2LjI1ICogYWx0dXJhIC0gNSAqIGVkYWQgLSAxNjE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMTAgKiBwZXNvICsgNi4yNSAqIGFsdHVyYSAtIDUgKiBlZGFkICsgNTtcbiAgICB9XG59XG5mdW5jdGlvbiBjYWxjdWxhcktjYWwoYWN0aXZpZGFkLCB0bWIpIHtcbiAgICBpZiAoYWN0aXZpZGFkID09IDEgLyogVGlwb0FjdGl2aWRhZC5iYWphICovKVxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuMzc1KSAvIDEwMDA7XG4gICAgZWxzZSBpZiAoYWN0aXZpZGFkID09IDIgLyogVGlwb0FjdGl2aWRhZC5tb2RlcmFkYSAqLylcbiAgICAgICAgcmV0dXJuICh0bWIgKiAxLjU1KSAvIDEwMDA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNzI1KSAvIDEwMDA7XG59XG5mdW5jdGlvbiBjYWxjdWxhcktjYWxNYXgoYWN0aXZpZGFkLCB0bWIpIHtcbiAgICBpZiAoYWN0aXZpZGFkID09IDEpXG4gICAgICAgIHJldHVybiAodG1iICogMS41NSkgLyAxMDAwO1xuICAgIGVsc2UgaWYgKGFjdGl2aWRhZCA9PSAyKVxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuNzI1KSAvIDEwMDA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuOSkgLyAxMDAwO1xufVxuLy9UcmFuc2Zvcm1hY2lvbiBkZSBkYXRvcyBkZWwgZm9ybS8vXG5mdW5jdGlvbiB0cmFuc2Zvcm1hcihlbGVtZW50bykge1xuICAgIGxldCB2YWxvcjtcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8udmFsdWUpO1xuICAgIGlmIChpc05hTih2YWxvcikpIHtcbiAgICAgICAgdmFsb3IgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gdmFsb3I7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1hclNlbGVjdChlbGVtZW50bykge1xuICAgIGxldCB2YWxvcjtcbiAgICB2YWxvciA9IHBhcnNlRmxvYXQoZWxlbWVudG8ub3B0aW9uc1tzZXhvU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsb3IpKSB7XG4gICAgICAgIHZhbG9yID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbG9yO1xufVxuLy9yZWNvZ2lkYSBkZSBkYXRvcy8vXG5mdW5jdGlvbiByZWNvZ2lkYURhdG9zKGV2ZW50KSB7XG4gICAgbGV0IHBlc287XG4gICAgbGV0IGFsdHVyYTtcbiAgICBsZXQgZWRhZDtcbiAgICBsZXQgc2V4bztcbiAgICBsZXQgYWN0aXZpZGFkO1xuICAgIGxldCB0bWI7XG4gICAgbGV0IGtjYWxtaW47XG4gICAgbGV0IGtjYWxtYXg7XG4gICAgZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGVzbyA9IHRyYW5zZm9ybWFyKHBlc29JbnB1dCk7XG4gICAgYWx0dXJhID0gdHJhbnNmb3JtYXIoYWx0dXJhSW5wdXQpO1xuICAgIGVkYWQgPSB0cmFuc2Zvcm1hcihlZGFkSW5wdXQpO1xuICAgIHNleG8gPSB0cmFuc2Zvcm1hclNlbGVjdChzZXhvU2VsZWN0KTtcbiAgICBhY3RpdmlkYWQgPSB0cmFuc2Zvcm1hclNlbGVjdChhY3RpdmlkYWRTZWxlY3QpO1xuICAgIGNvbnNvbGUubG9nKHBlc28pO1xuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XG4gICAgY29uc29sZS5sb2coZWRhZCk7XG4gICAgY29uc29sZS5sb2coc2V4byk7XG4gICAgY29uc29sZS5sb2coYWN0aXZpZGFkKTtcbiAgICB0bWIgPSBjYWxjdWxhclRNQihwZXNvLCBhbHR1cmEsIGVkYWQsIHNleG8pO1xuICAgIGtjYWxtaW4gPSBjYWxjdWxhcktjYWwoYWN0aXZpZGFkLCB0bWIpO1xuICAgIGtjYWxtYXggPSBjYWxjdWxhcktjYWxNYXgoYWN0aXZpZGFkLCB0bWIpO1xuICAgIGNvbnNvbGUubG9nKHRtYik7XG4gICAgY29uc29sZS5sb2coa2NhbG1pbik7XG4gICAgY29uc29sZS5sb2coa2NhbG1heCk7XG4gICAga2NNaW4udmFsdWUgPSBrY2FsbWluLnRvU3RyaW5nKCk7XG4gICAga2NNYXgudmFsdWUgPSBrY2FsbWF4LnRvU3RyaW5nKCk7XG59XG4vL0VzY3VjaGEgZGUgZXZlbnRvcy8vXG5ib3RvbkNhbGN1bG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlY29naWRhRGF0b3MpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9