$(function () {
  /*
  * tabHead: 点击按钮，
  * tabCont: 切换的内容，
  * className: 类名
  * */
  function tabSwitch(tabHead, tabCont, className) {
    $(tabHead).each(function (index) {
      $(this).click(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(tabCont)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }

  /* 精选授课师资 */
  tabSwitch('.sift-teachers .head-item', '.sift-teachers .tab-cont', 'cur');
  /* 多样化辅导班次 */
  tabSwitch('.variety-tutorium .head-item', '.variety-tutorium .tab-cont', 'cur');
  /* 名师团队授课 */
  tabSwitch('.teacher-team .head-item', '.teacher-team .tab-cont', 'cur');
  /* 入口 */
  tabSwitch('.enter .head-item', '.enter .enter-cont', 'cur');
});


var mySwiper = new Swiper('.swiper-container', {
  pagination : '.swiper-pagination',
  paginationClickable :true,
  autoplay: 5000,
  autoplayDisableOnInteraction : false, // 用户操作swiper之后，是否禁止autoplay
  speed: 1000,
});