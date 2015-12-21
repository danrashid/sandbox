function hideSecondaryNavs() {
  $('[data-secondary-nav-id], .secondary-nav').removeClass('open');
}

function setScrollableHeight() {
  $('.secondary-nav.open .scrollable.open').each(function () {
    var $this = $(this),
      availableHeight = $this.closest('nav').outerHeight(),
      scrollableHeight = $this.get(0).scrollHeight;

    $this.siblings(':not(.scrollable)').each(function () {
      availableHeight -= $(this).outerHeight();
    });

    if (availableHeight < scrollableHeight) {
      $this.css('height', availableHeight + 'px');
    } else if (availableHeight > scrollableHeight) {
      $this.css('height', '');
    }
  });
}

$('[data-secondary-nav-id]').on('click', function () {
  var $this = $(this),
    $secondaryNav = $('#' + $this.data('secondaryNavId'));

  if ($this.hasClass('open')) {
    $this.add($secondaryNav).removeClass('open');
  } else {
    hideSecondaryNavs();
    $this.add($secondaryNav).addClass('open');
    setScrollableHeight();
  }

  return false;
});

$('[data-scrollable-id]').on('click', function () {
  var $this = $(this),
    $scrollable = $('#' + $this.data('scrollableId'));

  if ($this.hasClass('open')) {
    $this.add($scrollable).removeClass('open');
  } else {
    $('[data-scrollable-id], .scrollable', $this.closest('nav')).removeClass('open');
    $this.add($scrollable).addClass('open');
    setScrollableHeight();
  }

  return false;
});

$('body').on('click', hideSecondaryNavs);

$(window).on('resize', setScrollableHeight);
