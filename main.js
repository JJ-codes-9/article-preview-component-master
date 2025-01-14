const arrowIcon = document.querySelector('.arrow-icon');
const sharePopup = document.getElementById('share-popup');


arrowIcon.addEventListener('click', () => {
  
  if (sharePopup.style.display === 'none' || sharePopup.style.display === '') {
    sharePopup.style.display = 'flex'; 
  } else {
    sharePopup.style.display = 'none'; 
  }
});