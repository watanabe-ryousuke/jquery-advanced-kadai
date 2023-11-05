$(function () {
  // ナビアニメーション
  $('.navBtn').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 300);
  });
  $('.navBtn').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 300);
  });

  // カルーセル
  $('.carousel').slick({
    fade: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2500,
    arrows: false,
  });
});

// back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');
 
// 画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll', () => {
  // 画面のスクロール量をpx（ピクセル）数で取得する
  const scrollValue = document.scrollingElement.scrollTop;

  // 画面のスクロール量が100px以上であれば、「TOPに戻る」ボタンを表示する
  if (scrollValue >= 100) {
    $('#back-btn').fadeIn();
    backBtn.style.display = 'inline';
  }
  // 画面のスクロール量がそれ以外（100px未満）であれば、「TOPに戻る」ボタンを非表示にする
  else {
    $('#back-btn').fadeOut();
  }
});

// 遷移アニメーション
$(function () {
  $('a[href^="#"]').on('click', function() {
    const href = $(this).attr('href');
    let $target;

    // href属性の値が#であれば、スクロール先をhtml要素にする
    if (href == '#') {
      $target = $('html');
    }else {
      $target = $(href);
    }
  
    const position = $target.offset().top;

    $('html, body').animate({scrollTop: position});
    return false;
  });
});

// スクロールアニメーション
$(function(){
	$(window).scroll(function (){
		$('.hidden').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('fadeIn');
			}
		});
	});
});

// モーダルアニメーション
$(function(){
  $('.works-img').on('click', function(){
    let src = $(this).attr('src');
    const prop = $('#modal > img').prop('src', src);
    console.log(prop);
    $('#modal').addClass('modalFadeIn');
    return false;

    $('#closeBtn').on('click', function(){
      $('#modal').removeClass('modalFadeIn');
    });
  });
});