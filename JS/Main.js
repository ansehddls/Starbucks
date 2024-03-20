const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7, {
    scrollTo: 0,
  })
});

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 300){
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x:0
    })
  }
  else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display:'block'
    })

    gsap.to(toTopEl, .2, {
      x:100
    })
  }
},300));

//_.throttle(익명함수, 시간ms)



const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1,
  })
});

new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // }
  pagination:{
    el:'.promotion .swiper-pagination',
    clickable: true,
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next',
  }
})

const promotionEl =  document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
  }
});

function Random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, Random(1.5, 2.5),{
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: Random(0, delay),
  })

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 20);
floatingObject('.floating3', 1.5, 15);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
      .Scene({triggerElement: spyEl,
              triggerHook:.8,
            })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

