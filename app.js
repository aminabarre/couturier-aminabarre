function filter(category) {
  const items = document.querySelectorAll('.item');
  const contactSection = document.getElementById("contactSection");

  if (category === 'contact') {
    contactSection.style.display = "block";
    items.forEach(item => item.style.display = "none");
    return;
  } else {
    contactSection.style.display = "none";
  }

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function showContact() {
  filter('contact');
}
