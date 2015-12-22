/* global $ */
'use strict';

$(function () {
  var $navs = $('.primary-nav, .secondary-nav'),
    topBarHeight = $('.top-bar').outerHeight(),
    $secondaryNavs = $('[data-secondary-nav-id], .secondary-nav');

  function hideSecondaryNavs() {
    $secondaryNavs.removeClass('open');
  }

  function setScrollableHeight() {
    var $scrollable = $('.secondary-nav.open .scrollable.open'),
      $secondaryNav = $scrollable.closest('nav'),
      availableHeight = $secondaryNav.outerHeight() - $secondaryNav.position().top,
      scrollableHeight = $scrollable.get(0).scrollHeight;

    $scrollable.siblings(':not(.scrollable)').each(function (i, sibling) {
      availableHeight -= $(sibling).outerHeight();
    });

    if (availableHeight < scrollableHeight) {
      $scrollable.css('height', availableHeight + 'px');
    } else if (availableHeight > scrollableHeight) {
      $scrollable.css('height', '');
    }
  }

  function setTopPositions() {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop < topBarHeight) {
      $navs.css('top', topBarHeight - windowScrollTop);
    } else {
      $navs.css('top', 0);
    }
  }

  $('[data-secondary-nav-id]').on('click', function (e) {
    var $secondaryNavTrigger = $(e.target),
      secondaryNavSelector = '#' + $secondaryNavTrigger.data('secondaryNavId');

    if ($secondaryNavTrigger.hasClass('open')) {
      $secondaryNavTrigger.add(secondaryNavSelector).removeClass('open');
    } else {
      hideSecondaryNavs();
      $secondaryNavTrigger.add(secondaryNavSelector).addClass('open');
      setScrollableHeight();
    }

    return false;
  });

  $('[data-scrollable-id]').on('click', function (e) {
    var $scrollableTrigger = $(e.target),
      scrollableSelector = '#' + $scrollableTrigger.data('scrollableId');

    if ($scrollableTrigger.hasClass('open')) {
      $scrollableTrigger.add(scrollableSelector).removeClass('open');
    } else {
      $('[data-scrollable-id], .scrollable', $scrollableTrigger.closest('nav')).removeClass('open');
      $scrollableTrigger.add(scrollableSelector).addClass('open');
      setScrollableHeight();
    }

    return false;
  });

  $('body').on('click', hideSecondaryNavs);

  $(window)
    .on('scroll resize', setTopPositions)
    .on('resize', setScrollableHeight);
});
