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

    html2pdf(document.getElementById('home'), {
      filename:     'ian-owira-cv.pdf',
      jsPDF:        {  format: 'A4' }
    });
  });

})
