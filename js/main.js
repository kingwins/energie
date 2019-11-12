// trigger tabs in mobile view
$('.tab-trigger .trigger').on('click', ()=> {
  $('#nav-tabs').toggleClass('hidden')
})
// change dropdown chevron
$('#navbarDropdown').on('click', ()=> {
  $('#navbarDropdown i').toggleClass('hidden')
})
//add chevrons to navbar dropdown items
$('.dropdown-item').prepend('<i class="fas fa-chevron-down d-lg-none"></i>')

// form validation
const patterns = {
  Name: /^[\w]{2,50}$/i,
  Vorname: /^[\w]{2,50}$/i,
  PLZ: /^[\w]{2,50}$/i,
  Ort: /^[\w]{2,50}$/i,
  Land: /^[\w]{2,50}$/i,
  Email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}
let $inputsRequired = $('input.required')
let $inputsRadio = $('input:radio')
$inputsRequired.on('keyup', function(){
  patterns[this.attributes.name.value].test(this.value) ? $(this).addClass('is-valid').removeClass('is-invalid') : $(this).addClass('is-invalid').removeClass('is-valid')
})

function mySubmit(event){
  event.preventDefault()
  let valid = false
  let radioboxes = $inputsRadio[0].checked || $inputsRadio[1].checked
  !radioboxes?$inputsRadio.addClass('is-invalid'):$inputsRadio.removeClass('is-invalid')

  $inputsRequired.each(function(){
    patterns[this.attributes.name.value].test(this.value) ? $(this).addClass('is-valid').removeClass('is-invalid') : $(this).addClass('is-invalid').removeClass('is-valid')
  })
  
  $inputsRequired.hasClass('is-invalid') ? alert('fill the form properly') : valid=true
  if(valid && radioboxes){
    alert('thank you for sending the form')
    $inputsRequired.removeClass('is-valid')
    $('form')[0].reset()
  }
}
$inputsRadio.on('click', ()=>$inputsRadio.removeClass('is-invalid'))