var defferedPrompt;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Service Worker Registered');
  });
}
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('before installing prompt fired');
  event.preventDefault();
  defferedPrompt = event;
  return false;
});
