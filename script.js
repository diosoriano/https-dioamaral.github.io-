document.getElementById('btnPrint').addEventListener('click', ()=> window.print());

document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  const texto = `Olá Diogo! Sou ${nome} (${email}). ${msg}`;
  const url = `https://wa.me/5521995175856?text=${encodeURIComponent(texto)}`;
  document.getElementById('formStatus').textContent = 'Abrindo WhatsApp...';
  window.open(url, '_blank');
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
