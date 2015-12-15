function hideSecondaryNavs() {
  $('[data-secondary-nav-id], .secondary-nav').removeClass('open');
}

$('[data-secondary-nav-id]').on('click', function () {
  var $this = $(this),
    $secondaryNav = $('#' + $this.data('secondaryNavId'));

  if ($this.hasClass('open')) {
    hideSecondaryNavs();
  } else {
    hideSecondaryNavs();
    $this.add($secondaryNav).addClass('open');
  }

  return false;
});

$('body').on('click', hideSecondaryNavs);

$('[data-expandable-id]').on('click', function () {
  var $this = $(this),
    $expandable = $('#' + $this.data('expandableId'));

  $this.add($expandable).toggleClass('open');

  return false;
});

/*

function setScrollableHeight() {
  $('.scrollable.open').each(function () {
    var $this = $(this),
      height = $this.closest('nav').height();

    $this.siblings().each(function () {
      height -= $(this).height();
    });

    $this.height(height);
  });
}

setScrollableHeight();

$(window).on('resize', setScrollableHeight);

*/
