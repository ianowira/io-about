window.addEventListener('load', function () {
  function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
  }
  addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');

  document.getElementById('download-cv').addEventListener('click', (evt) => {
    evt.preventDefault();

    const homeEl = document.getElementById('home')

    homeEl.classList.add("printing");

    html2pdf().set({
      filename:     'ian-owira-cv.pdf',
      enableLinks: true,
      image:        { type: 'jpeg', quality: 1 },
      jsPDF:        { unit: 'cm', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }).from(homeEl).save();

    setTimeout(function() {
      homeEl.classList.remove("printing");
    }, 1000);

  });

})
