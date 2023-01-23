(function ($) {
    $('#menu_btn').click(function () {
        $('.mobile_menu_list').slideToggle('medium');
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'));
    });
})(jQuery);