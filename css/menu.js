//menu
$(document).ready(function () {

    $('li.mainlevel').mousemove(function () {
        $(this).find('ul').slideDown("1000");//you can give it a speed
    });
    $('li.mainlevel').mouseleave(function () {
        $(this).find('ul').slideUp("fast");
    });

});

$(document).ready(function () {
    var isVisible = false;
    $("#search-btn").bind('mouseover', function () {
        if (isVisible == true) {
            return;
        }
        $('.search').animate({left: '-=200px'}, "slow", function () {
            $('#search_input').trigger('focus');
            isVisible = true;
        });
    });
    $("#search_input").bind('focusout', function () {
        $('.search').animate({left: '+=200px'}, "slow");
        isVisible = false;
    });
    $("#search_input").keydown(function (e) {
        if (e.keyCode == 13) {
            alert("�������ύ�����������");
        }
    });
});

$(function () {
    $(".mainlevel").each(function () {
        if ($(this).find("a:first").html() == "��ѧ����") {
            $(this).find("a").each(function () {
                if ($(this).html() == "רҵ����") {
                    $(this).css("display", "none");
                }
            });
        }
    });
});