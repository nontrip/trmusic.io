var menubar = false;

$(document).ready(function(){

  $(window).scroll(function(){
            var scr = $(this).scrollTop();
          if (scr>$(window).height()-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$("#2").addClass('active-slide');
          	$("#3").removeClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr<$(window).height()-$(window).height()/2){
          	$("#3").removeClass('active-slide');
          	$('#2').removeClass('active-slide');
          	$('#1').addClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr>$(window).height()*2-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$('#2').removeClass('active-slide');
          	$('#3').addClass('active-slide');
          	$("#4").removeClass('active-slide');

          } if (scr>$(window).height()*3-$(window).height()/2){
          	$("#1").removeClass('active-slide');
          	$("#2").removeClass('active-slide');
          	$("#3").removeClass('active-slide');
          	$("#4").addClass('active-slide');

          }
      });

      $("ul li, #menu_heading, ol").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        if($(window).width()<415 || $(window).height()<420){
          $('#hamb').animate({'margin-left': 50}, 900)
          $('#menubar').animate({'margin-left': -$('#menubar').width()}, 1000, function() {
            $('#menubar').css('display', 'none');
            $('body,html').animate({scrollTop: top}, 1500);
              $('body').css('overflow', 'auto');
          });
          menubar=false;
        } else {
          $('body,html').animate({scrollTop: top}, 1500);
        }
    });

    $('#hamb').on('click', function(){
      if(menubar==false){
        $('#menubar').css('display', 'block');
        $(this).animate({'margin-left': $('#menubar').width()}, 900)
        $('#menubar').animate({'margin-left': 0}, 1000);
        menubar=true;
        if($(window).width()<415 || $(window).height()<420){
          $('body').css('overflow', 'hidden');
          $('body').css('position', 'fixed');
          console.log('here');
        }
      } else {
        $(this).animate({'margin-left': 50}, 900)
        $('#menubar').animate({'margin-left': -$('#menubar').width()}, 1000, function() {
          $('#menubar').css('display', 'none');
        })
        if($(window).width()<415 || $(window).height()<420){
          $('body').css('overflow', 'auto');
          $('body').css('position', 'absolute');
        }
        menubar=false;
      }
    });


  function abso(el) {
    $(el).css({
      height: $(window).height()
    });
  }

  $(window).resize(function() {
    abso($('.slide'));
    abso($('#menubar'));
    if($(window).width()>910){
      $('#hamb').css('display', 'none');
      $('#menubar').css('display', 'block');
      $('#menubar').css('margin-left', 0);
      $('#heading').css('margin-left', $(window).width()/2.4+$('#menubar').width()-$('#heading').width()/2);
      $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2)
      $('#description').css('margin-left', $(window).width()/2.5+$('#menubar').width()-$('#description').width()/2)
      $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/2)
      $('#social_icons').css('margin-top', $(window).height()/2-$('#menu_heading').height()/2-$('#menu_nav').height()/2)
      $('.album_cover').css('width', $(window).height()/2.5);
      $('.album_cover').css('height', $(window).height()/2.5);
      $('#album_covers').css('margin-left', $(window).width()/2+$('#menubar').width()/2-$('#album_covers').width()/2);
      $('#album_covers').css('margin-top', $(window).height()/2-$('#release_heading').height()-$('#album_covers').height()/1.5);
      $('#form-main').css('margin-top', $(window).height()/5-$('#contact_heading').height()-$('#form-main').height());
      $('#form-div').css('margin-left', -$('#menubar').width());
      $('#form-main').css('margin-left', -$(window).width()/5+$('#menubar').width()+$('#form-main').width()/2);
    } else if($(window).width()<415){
        $('ol').css('margin-right', 10);
    } else {
        $('#heading').css('margin-left', $(window).width()/2-$('#heading').width()/2);
        $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2)
        $('#description').css('margin-left', $(window).width()/2.5-$('#description').width()/2)
        $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/2)
        $('#social_icons').css('margin-top', $(window).height()/2-$('#menu_heading').height()/2-$('#menu_nav').height()/2)
        $('#hamb').css('display', 'block');
        $('#menubar').css('margin-left', -$('#menubar').width());
        $('#menubar').css('display', 'none');
        $('.album_cover').css('width', $(window).height()/3);
        $('.album_cover').css('height', $(window).height()/3);
        $('#album_covers').css('margin-left', $(window).width()/2-$('#album_covers').width()/2);
        $('#album_covers').css('margin-top', $(window).height()/2-$('#release_heading').height()-$('#album_covers').height()/1.5);
        $('#form-main').css('margin-top', $(window).height()/5-$('#contact_heading').height()-$('#form-main').height());
        $('#form-main').css('margin-left', -$(window).width()/5+$('#form-main').width()/2);
    }
  });

    abso($('.slide'));
    abso($('#menubar'));

    if($(window).width()>910){
      $('#heading').css('margin-left', $(window).width()/2+$('#menubar').width()-$('#heading').width()/2);
      $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2)
      $('#description').css('margin-left', $(window).width()/2.5+$('#menubar').width()-$('#description').width()/2)
      $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/2)
      $('#social_icons').css('margin-top', $(window).height()/2-$('#menu_heading').height()/2-$('#menu_nav').height()/2)
      $('#hamb').css('display', 'none');
      $('#menubar').css('display', 'block');
      $('#menubar').css('margin-left', 0);
      $('.album_cover').css('width', $(window).height()/2.5);
      $('.album_cover').css('height', $(window).height()/2.5);
      $('#album_covers').css('margin-left', $(window).width()/2+$('#menubar').width()/2-$('#album_covers').width()/2);
      $('#album_covers').css('margin-top', $(window).height()/2-$('#release_heading').height()-$('#album_covers').height()/1.5);
      $('#form-main').css('margin-top', $(window).height()/5-$('#contact_heading').height()-$('#form-main').height());
      $('#form-div').css('margin-left', -$('#menubar').width());
    } else if($(window).width()<415){
        $('#menubar').css('width', $(window).width());
        $('#menubar').css('margin-left', -$('#menubar').width());
        $('#menubar').css('display', 'none');
        $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2);
        $('#hamb').css('display', 'block');
        $('#social_icons').css('margin-top', 100);
    } else if($(window).width()<325){
      $('#menubar').css('width', $(window).width()+50);
      $('#menubar').css('margin-left', -$('#menubar').width());
      $('#menubar').css('display', 'none');

    }
     else {
      $('#heading').css('margin-left', $(window).width()/2-$('#heading').width()/2);
      $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2)
      $('#description').css('margin-left', $(window).width()/2.5-$('#description').width()/2)
      $('#description').css('margin-top', $(window).height()/2-$('#slide3_heading').height()-$('#description').height()/2)
      $('#social_icons').css('margin-top', $(window).height()/2-$('#menu_heading').height()/2-$('#menu_nav').height()/2)
      $('#hamb').css('display', 'block');
      $('#menubar').css('margin-left', -$('#menubar').width());
      $('#menubar').css('display', 'none');
      $('#heading').css('padding-top', $(window).height()/2.4-$('#heading').height()/2);
      $('#heading').css('margin-left', $(window).width()/2-$('#heading').width()/2);
      $('.album_cover').css('width', $(window).height()/3);
      $('.album_cover').css('height', $(window).height()/3);
      $('#album_covers').css('margin-left', $(window).width()/2-$('#album_covers').width()/2);
      $('#album_covers').css('margin-top', $(window).height()/2-$('#release_heading').height()-$('#album_covers').height()/1.5);
      $('#form-main').css('margin-top', $(window).height()/5-$('#contact_heading').height()-$('#form-main').height());
      $('#form-main').css('margin-left', -$(window).width()/5+$('#form-main').width()/2);
    }

    if($(window).height()<415 && $(window).height()>330){
      $('#social_icons').css('margin-top', 50);
    }
    if($(window).height()<330) {
      $('#social_icons').css('margin-top', 25);
    }

});
