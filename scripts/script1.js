let img1 = document.getElementById('image1');
img1.onclick = () => {
  img1.style.display = 'none';
}
let img2 = document.getElementById('image2');
img2.onmouseover = e => {
  e.target.classList.add('rotateRight')
}
img2.onmouseleave = e => {
  img2.classList.remove('rotateRight')
}
