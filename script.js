$(document).ready(function(){

    // Dropdown 
    $(document).on('click', '.cart-header__search-status .input', function(){
        var that = $(this);
        that.toggleClass('openned').siblings('.cart-header__search-status_dropdown').slideToggle(300);
    });

    // Clear Cart
    $(document).on('click', '.cart-header__search-clear', function(){
        $('.cart-list label').remove();
    });

    // Clear Checked Items
    $(document).on('click', '.cart-buttons__delete', function(){
        $('.cart-list label input:checked').closest('label').remove();
    });

    // Check All Items
    $(document).on('click', '.cart-buttons__check-all', function(){
        var that = $(this),
            input = that.find('input');

        $('.cart-list label input').prop('checked', input.is(':checked') ? true : false );
    });
});

$(window).scroll(function(){

    // Scrollable Nav Bar
    if ( $(window).scrollTop() > 20 ) {
        $('nav').addClass('scrolled');
    } else {
        $('nav').removeClass('scrolled');
    }

});