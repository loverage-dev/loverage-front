const $ = require('jquery');

const scrollHandler = (function() {
  const targets = $('.t-wrapper');

  // Get suit scroll event
  const pcScrollEvent = (() => {
    if ('onwheel' in document) return 'wheel';
    if ('onmousewheel' in document) return 'mousewheel';
    return 'DOMMouseScroll';
  })();

  const preventDefault = (event) => {
    event.preventDefault();
    return false;
  }

  // スクロールを無効化した時点でのスクロール位置を保持したい。
  // 有効化するときに必要になる。
  let scrollTop = 0;

  // スクロールを無効化
  const freeze = () => {
    scrollTop = $(window).scrollTop();
    targets.css({ position: 'fixed' });
  }

  // ページ全体のスクロールを無効化する
  const freezeAll = () => {
    [pcScrollEvent, 'touchmove'].forEach((event) => {
      document.addEventListener(event, preventDefault, { passive: false });
    });
  }

  // スクロールを有効化
  const allow = () => {
    targets.css({ position: '' });
    $('html,body').scrollTop(scrollTop);
  }

  // ページ全体のスクロールを有効化
  const allowAll = () => {
    [pcScrollEvent, 'touchmove'].forEach((event) => {
      document.removeEventListener(event, preventDefault);
    });
  }

  return {
    freeze,
    freezeAll,
    allow,
    allowAll
  }
})();

module.exports = scrollHandler;
