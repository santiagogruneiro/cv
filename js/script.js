const downloadLink = document.getElementById('download')
const downloadLinkParent = downloadLink.parentNode
const mailIcon = document.getElementById('mail')

function createPDF(e) {
  e.preventDefault()
  downloadLinkParent.removeChild(downloadLink)
  var pdf = document.getElementById("main-content");
  var opt = {
    margin: 1,
    filename: 'SantiagoGruneiroCV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'mm', format: [410, 765], orientation: 'portrait' }
  };
  html2pdf().set(opt).from(pdf).save();
  setTimeout(() => {
    downloadLinkParent.insertBefore(downloadLink, downloadLinkParent.firstElementChild)
  }, 1000)
}
const openGmail = () => {
  const url = 'https://mail.google.com/mail/?view=cm&fs=1&to=santiagogruneiro10@gmail.com'
  const target = '_blank'
  const features = 'resizable'
  window.open(url, target, features)
}

// mailIcon && mailIcon.addEventListener('click', openGmail)

downloadLink && downloadLink.addEventListener('click', createPDF)