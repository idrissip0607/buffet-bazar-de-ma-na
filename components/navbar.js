// DOM-based navbar injector (no classes or customElements)
document.addEventListener('DOMContentLoaded', () => {
  const Nav = document.querySelector('custom-navbar');
  if (!Nav) return;

  Nav.innerHTML = `
    <nav class="w-full bg-white text-dark px-6 py-4 shadow">
        <div class="text-xl flex items-center font-playfair flex justify-center font-bold uppercase tracking-wide"><img src="img/logo.png"alt="logo" class="w-20"> Le Bazar de Maïna</div>
    
    </nav>
  `;
});
