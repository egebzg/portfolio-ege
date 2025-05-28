function switchLanguage(lang) {
  const enElements = document.querySelectorAll('.lang-en');
  const jpElements = document.querySelectorAll('.lang-jp');

  enElements.forEach(el => {
    el.style.display = (lang === 'en') ? 'block' : 'none';
  });

  jpElements.forEach(el => {
    el.style.display = (lang === 'jp') ? 'block' : 'none';
  });
}

// Sayfa yüklendiğinde varsayılan dili İngilizce yap
window.onload = () => switchLanguage('en');