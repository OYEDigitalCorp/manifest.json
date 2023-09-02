document.addEventListener('DOMContentLoaded', init, false);

function init() {
    if ('serviceWorker' in navigator && navigator.onLine) {
        navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/OYEDigitalCorp/manifest.json@7abad4f4bb009fc3d41aefa8c58ce6cff958b553/services.js')
        .then((reg) => {
            console.log('Registrasi service worker Berhasil', reg);
        }, (err) => {
            console.error('Registrasi service worker Gagal', err);
        });
    }
}
