/*
 * @
 */
var Site = Site || {};
Site.a = {
    //any initialization code for animations goes here
    initAnimations: function () {
        document.querySelector('.modal .close').onclick = closeModal;
        document.getElementById('show-modal').onclick = showModal;
    },
    showModal: function () {
        document.querySelector('html').classList.add('modal-window');
    },
    closeModal: function (event) {
        document.querySelector('html').classList.remove('modal-window');
        event.stopPropagation();
    },
    animateLoading: function (shouldAnimate) {
        //disable select during the loading animation
        document.getElementById('post-list').disabled = shouldAnimate;
        if (shouldAnimate) {
            document.getElementsByClassName('spinner')[0].classList.remove('display-none');
        } else {
            document.getElementsByClassName('spinner')[0].classList.add('display-none');
        }
    }

};
