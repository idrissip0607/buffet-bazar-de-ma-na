// DOM-based footer injector (no classes or customElements)
document.addEventListener('DOMContentLoaded', () => {
  const Foot= document.querySelector('custom-footer');
  if (!Foot) return;

  const year = new Date().getFullYear();
  Foot.innerHTML = `
    <footer class="mt-12 bg-black text-white">
      <div class="max-w-6xl mx-auto px-6 py-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 class="font-playfair text-xl font-bold mb-2 text-center">Le Bazar de Maïna</h3>
            
          </div>
        
          <div class="flex justify-center">
            <div class="text-center">
            <h3 class="font-playfair text-xl font-bold mb-2 text-center">Contact</h3>
            <a href="tel:+2250748499917" class=" text-center text-white/80 mb-1"><i data-feather="phone" class="inline"></i>+225 07 48 49 99 17</a>
            <a href="mailto:contact@bazardemaina.com" class="block text-white/80"><i data-feather="mail" class="inline mr-2"></i>contact@bazardemaina.com</a>
          </div>
            </div>
          <div>
            <h3 class="font-playfair text-center text-xl font-bold mb-2">Suivez-nous</h3>
            <div class="flex justify-center md:justyfy-none gap-3 mt-2 mb-4">
              <a href="#" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90"><i class="bi text-2xl bi-tiktok"></i></a>
              <a href="#" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center "><i class="bi bi-facebook text-2xl text-blue-500"></i></a>
              <a href="#" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center "><i class="bi bi-instagram text-2xl text-red-600"></i></a>
            </div>
          </div>
          
        </div>
        
          <p class="text-center">&copy; ${year} Le Bazar de Maina. Tous droits réservés. developpé par <span class="text-green-500 font-bold">Idriss Traoré</span></p>
          
        </div>
      </div>
    </footer>
  `;
});