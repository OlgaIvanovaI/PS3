
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['sadgfsdhgkusdhgk', 'next'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#opener").on("click", function () {
        $("#dialog").dialog("open");
    });
});
(function () {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
            setCurrent = function (ev) {
                ev.preventDefault();

                var item = ev.target.parentNode; // li

                // return if already current
                if (classie.has(item, 'menu__item--current')) {
                    return false;
                }
                // remove current
                classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                // set current
                classie.add(item, 'menu__item--current');
            };

        [].slice.call(menuItems).forEach(function (el) {
            el.addEventListener('click', setCurrent);
        });
    });

    [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
        link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
        new Clipboard(link);
        link.addEventListener('click', function () {
            classie.add(link, 'link-copy--animate');
            setTimeout(function () {
                classie.remove(link, 'link-copy--animate');
            }, 300);
        });
    });
})(window);

$('.owl-carousel-2').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    navText: ['', ' '],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});