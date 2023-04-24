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

    html2pdf(homeEl, {
      filename:     'ian-owira-cv.pdf',
      enableLinks: true,
      jsPDF:        {  format: 'A4' }
    });

    setTimeout(function() {
      homeEl.classList.remove("printing");
    }, 1000);

  });

})
