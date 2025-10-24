// DOM-based navbar injector (no classes or customElements)
document.addEventListener('DOMContentLoaded', () => {
  const Nav = document.querySelector('custom-navbar');
  if (!Nav) return;

  Nav.innerHTML = `
    <nav class="w-full bg-white text-dark px-6 py-4 shadow">
        <div class="text-xl font-playfair flex justify-center font-bold uppercase tracking-wide">Le Bazar de Maïna</div>
    
    </nav>
  `;
});
