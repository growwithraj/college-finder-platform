document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Sample College Data
  const colleges = [
    { name: "ABC Engineering College", city: "Delhi", courses: "Engineering" },
    { name: "XYZ Medical College", city: "Mumbai", courses: "Medical" },
    { name: "PQR Arts College", city: "Bangalore", courses: "Arts" },
    { name: "LMN Science College", city: "Chennai", courses: "Science" },
  ];

  const searchButton = document.querySelector('#search-btn');
  const searchInput = document.querySelector('#search-input');
  const resultsDiv = document.querySelector('.results');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = colleges.filter(college => 
      college.name.toLowerCase().includes(query) ||
      college.city.toLowerCase().includes(query) ||
      college.courses.toLowerCase().includes(query)
    );
    displayResults(filtered);
  });

  function displayResults(data) {
    resultsDiv.innerHTML = "";
    if(data.length === 0) {
      resultsDiv.innerHTML = "<p style='text-align:center; width:100%; color:#e63946;'>No colleges found.</p>";
      return;
    }
    data.forEach(college => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${college.name}</h3>
        <p><strong>City:</strong> ${college.city}</p>
        <p><strong>Courses:</strong> ${college.courses}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }

  // Show all colleges initially
  displayResults(colleges);

  // Importance points animation
  const findBtn = document.querySelector('.find-college');
  const points = document.querySelectorAll('.importance div');

  findBtn.addEventListener('click', () => {
    points.forEach((point, index) => {
      point.style.animation = `rise 0.6s ease forwards`;
      point.style.animationDelay = `${index * 0.3}s`;
    });
  });
});


// Fake contact form submission
const contactForm = document.querySelector('#contact-form');
const contactConfirm = document.querySelector('#contact-confirm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent actual submission

    // Show confirmation box
    contactConfirm.style.display = 'block';

    // Reset form fields
    contactForm.reset();
  });
}