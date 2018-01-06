const checkboxes = document.querySelectorAll('.container input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  console.log(this);
  let inBetween = false;
  // Check if they had the shift key down AND they are checking the box
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click',handleCheck);
});

