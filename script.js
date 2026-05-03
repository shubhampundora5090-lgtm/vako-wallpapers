const overlay      = document.getElementById('popupOverlay');
const popupImage   = document.getElementById('popupImage');
const popupPreview = document.getElementById('popupPreview');
const popupDownload= document.getElementById('popupDownload');
const popupClose   = document.getElementById('popupClose');

if (!overlay || !popupImage || !popupPreview || !popupDownload || !popupClose) {
  console.error('VAKO: One or more popup elements not found. Check your HTML IDs.');
}

function openPopup(imageSrc) {
  if (!imageSrc) return;

  popupImage.src    = imageSrc;
  popupPreview.href = imageSrc;
  popupDownload.href= imageSrc;

  overlay.classList.add('open');

  document.body.style.overflow = 'hidden';
}


function closePopup() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

popupClose.addEventListener('click', closePopup);

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    closePopup();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});