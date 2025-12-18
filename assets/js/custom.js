document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mySwiper", {
    loop: true,
    speed: 3000,
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: { delay: 0, disableOnInteraction: false },
    grabCursor: true,
    breakpoints: {
      0: { slidesPerView: 1.1, spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const t1 = document.getElementById("tab-1");
  const t2 = document.getElementById("tab-2");
  if (!t1 || !t2) return;
 
  let i = 0;
  const tabs = [t1, t2];
 
  setInterval(() => {
    i = (i + 1) % tabs.length;
    tabs[i].checked = true;
  }, 4000);
});
$(document).ready(function(){
 
  // Set first tab active on load
  $('.print-tab-menu li').first().addClass('active');
  $('.print-tab-content > div').first().addClass('view');
 
  // Click handler
  $('.print-tab-menu li').on('click', function(){
    var tabMenu = $(this).data('tab-menu');
    
    // Remove active from all
    $('.print-tab-menu li').removeClass('active');
    
    // Add active to clicked
    $(this).addClass('active');
    
    // Hide all content
    $('.print-tab-content > div').removeClass('view');
    
    // Show clicked content
    $('div[data-tab-content="' + tabMenu + '"]').addClass('view');
  });
 
});

var testimonialSwiper = new Swiper('.testimonials-slider', {
  slidesPerView: 2.4,
  spaceBetween: 20,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function() {
      updateProgressBar(this);
    },
    slideChange: function() {
      updateProgressBar(this);
    }
  }
});
 
function updateProgressBar(swiper) {
  var totalSlides = swiper.slides.length - swiper.params.slidesPerView + 1;
  var currentIndex = swiper.activeIndex;
  var progress = ((currentIndex + 1) / totalSlides) * 100;
  document.querySelector('.progress-fill').style.width = progress + '%';
}