(function(){
  const INPUTS = document.querySelectorAll('.slider input');

  function handleChange(){
    var units = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
  }

  INPUTS.forEach(input => input.addEventListener('change', handleChange));
  INPUTS.forEach(input => input.addEventListener('mousemove', handleChange));

}());
