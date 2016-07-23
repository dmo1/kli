/*
 * @
 */
var Site = Site || {};
Site.a = function () {
    
    //any initialization code for animations goes here
    function initAnimations(){
        document.querySelector('.modal .close').onclick = closeModal;
        document.getElementById('show-modal').onclick = showModal;
    }

    function showModal() {
        document.querySelector('html').classList.add('modal-window');
    }

    function closeModal(event) {
        document.querySelector('html').classList.remove('modal-window');
        event.stopPropagation();
    }

    function animateLoading(shouldAnimate) {
        //disable select during the loading animation
        document.getElementById('post-list').disabled = shouldAnimate;
        if (shouldAnimate) {
            document.getElementsByClassName('spinner')[0].classList.remove('display-none');
        } else {
            document.getElementsByClassName('spinner')[0].classList.add('display-none');
        }
    }
    
};
