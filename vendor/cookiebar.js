document.addEventListener('alpine:init', () => {
  Alpine.data('cookiebar', () => ({
    init() {
      this.status = sessionStorage.getItem('cookiebar')
      if (this.status == 'hidden') {
        this.show = false;
      }
    },
    status: '',
    show: true,
    close() {
      sessionStorage.setItem('cookiebar', 'hidden');
      this.show = false;
    }
  }));
});
