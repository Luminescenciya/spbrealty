function showCheckboxes() {
  let arrow = document.getElementById("selectArrow");
  let selectCard = document.getElementById("selectCard");
  arrow.classList.toggle("select__icon--flipped");
  selectCard.classList.toggle("select__card--opened");
}
