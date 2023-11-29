function handleRadioChangue() {
  const piezaCompleta = document.getElementById("Pcompleta");
  const seleccionarMedidas = document.getElementById("Ppartes");
  const altoInput = document.getElementById("altoInput");
  const anchoInput = document.getElementById("anchoInput");

  if (piezaCompleta.checked) {
    altoInput.disabled = true;
    anchoInput.disabled = true;
  } else if (seleccionarMedidas.checked) {
    altoInput.disabled = false;
    anchoInput.disabled = false;
  }
}
export default handleRadioChangue;
