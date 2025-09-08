<<<<<<< HEAD
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Download PDF (uses html2pdf.js). Hides interactive UI while rendering
function generatePDF(filename = 'Yasmine_Abdelgawwad_Portfolio.pdf'){
  const element = document.getElementById('page-root');
  const opt = {
    margin:       [10,10,10,10], // mm (top, left, bottom, right)
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // hide interactive elements
  document.querySelectorAll('.no-print').forEach(n=>n.style.display='none');
  document.querySelectorAll('.btn').forEach(n=>n.setAttribute('aria-hidden','true'));

  html2pdf().set(opt).from(element).save().then(()=>{
    // restore UI
    document.querySelectorAll('.no-print').forEach(n=>n.style.display='flex');
    document.querySelectorAll('.btn').forEach(n=>n.removeAttribute('aria-hidden'));
  }).catch(err=>{
    console.error('PDF error', err);
    alert('PDF generation failed. Try Print -> Save as PDF as fallback.');
    document.querySelectorAll('.no-print').forEach(n=>n.style.display='flex');
    document.querySelectorAll('.btn').forEach(n=>n.removeAttribute('aria-hidden'));
  });
}

document.getElementById('downloadPdf')?.addEventListener('click', ()=>generatePDF());
document.getElementById('downloadPdfAlt')?.addEventListener('click', ()=>generatePDF());
=======
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Download PDF (uses html2pdf.js). Hides interactive UI while rendering
function generatePDF(filename = 'Yasmine_Abdelgawwad_Portfolio.pdf'){
  const element = document.getElementById('page-root');
  const opt = {
    margin:       [10,10,10,10], // mm (top, left, bottom, right)
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // hide interactive elements
  document.querySelectorAll('.no-print').forEach(n=>n.style.display='none');
  document.querySelectorAll('.btn').forEach(n=>n.setAttribute('aria-hidden','true'));

  html2pdf().set(opt).from(element).save().then(()=>{
    // restore UI
    document.querySelectorAll('.no-print').forEach(n=>n.style.display='flex');
    document.querySelectorAll('.btn').forEach(n=>n.removeAttribute('aria-hidden'));
  }).catch(err=>{
    console.error('PDF error', err);
    alert('PDF generation failed. Try Print -> Save as PDF as fallback.');
    document.querySelectorAll('.no-print').forEach(n=>n.style.display='flex');
    document.querySelectorAll('.btn').forEach(n=>n.removeAttribute('aria-hidden'));
  });
}

document.getElementById('downloadPdf')?.addEventListener('click', ()=>generatePDF());
document.getElementById('downloadPdfAlt')?.addEventListener('click', ()=>generatePDF());
>>>>>>> 2db13a40abec6b99739c5b887e0c362c5d7f2ec9
