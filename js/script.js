fetch('data/profiles.json')
  .then(res => res.json())
  .then(data => {
    const slider = document.getElementById('slider');
    data.forEach((entry, index) => {
      const div = document.createElement('div');
      div.className = 'slide';
      if (index === 0) div.classList.add('active');
      div.style.backgroundImage = `url('${entry.image}')`;
      div.innerHTML = `<h2>${entry.name}</h2><p>"${entry.quote}"</p>`;
      slider.appendChild(div);
    });

    let current = 0;
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 8000);
  });