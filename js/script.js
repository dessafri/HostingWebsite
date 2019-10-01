// load halaman pertama kali
var lebarWindow = $(window).width();
$(window).on('load', function(e) {


    setTimeout(function() {
        $('.gambar-rumah').addClass('gambar-rumahMuncul');
    }, 500);

    var elemenTujuanLoad = $('#home')

    $('html,body').animate({
        scrollTop: elemenTujuanLoad
    }, 3000, 'easeInOutExpo');

    e.preventDefault();

});

// ketika link di klik

$('.scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    if (lebarWindow < 900) {
        if (tujuan == ('#hosting')) {
            $('html,body').animate({
                scrollTop: elemenTujuan.offset().top - 70
            }, 1500, 'easeInOutExpo');
        } else {
            $('html,body').animate({
                scrollTop: elemenTujuan.offset().top - 10
            }, 1500, 'easeInOutExpo');
        }

    } else {
        if (tujuan == ('#hosting')) {
            $('html,body').animate({
                scrollTop: elemenTujuan.offset().top - 100
            }, 1500, 'easeInOutExpo');
        } else {
            $('html,body').animate({
                scrollTop: elemenTujuan.offset().top - 10
            }, 1500, 'easeInOutExpo');
        }

    }

    e.preventDefault();
    console.log(tujuan);

});

// ketika window di scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // agar animasi muncul dengan tinggi konten yang di tentukan
    if (wScroll > $('.kotak').offset().top - 450) {

        $('.kotak').each(function(i) {
            setTimeout(function() {
                $('.kotak').eq(i).addClass('kotakMuncul');
            }, 500 * (i + 1));
        });

    }
    // jika tidak mencukupi tinggi konten maka animasi belum muncul
    if (wScroll < $('.kotak').offset().top - 500) {
        $('.kotak').each(function(i) {
            setTimeout(function() {
                $('.kotak').eq(i).removeClass('kotakMuncul');
            }, 500 * (i + 1));
        });
    }
    if (wScroll > $('.kotak').offset().top + 10) {
        $('.kotak').each(function(i) {
            setTimeout(function() {
                $('.kotak').eq(i).addClass('kotakMuncul');
            }, 500 * (i + 1));
        });

    }
    // animasi hosting

    if (wScroll == 1200) {
        setTimeout(function() {
            $('.gambarKecil').addClass('gambarKecilM')
        }, 1000)
    }

    console.log("tinggi window = " + wScroll);
});