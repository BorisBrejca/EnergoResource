const wrapperSwiper = document.querySelector('.ansWrapper');
      button = wrapperSwiper.querySelector('.blockSvgArrow');
      swiperLine = wrapperSwiper.querySelector('.collectionWorks');
      width = swiperLine.clientWidth -wrapperSwiper.clientWidth;

let position = 0;

const nextElem = () => {
    if(position < width){
        position += 340;
    } else {
        position = 0;
    }

    swiperLine.style.left = -position + 'px'
}

button.addEventListener('click', nextElem)

