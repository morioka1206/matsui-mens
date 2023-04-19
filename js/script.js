$('.question__question').on('click', function() {
  $(this).next().slideToggle(500);
  $(this).children(".question__button").toggleClass("openAnswer");
})


$('.comment__button').on('click', function() {
  $(this).addClass('comment__close');
  $('.comment__hideComment').addClass('comment__open');
  $('.comment__openComment').removeClass('comment__commentSpace');
})