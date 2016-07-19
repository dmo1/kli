var Site = Site || {};
Site.main = function () {
    var root = 'http://jsonplaceholder.typicode.com';


    animateLoading(true);
    Site.ajax((root + '/posts'), printPostList);

    document.querySelector('.modal .close').onclick = closeModal;
    document.getElementById('show-modal').onclick = showModal;


    function printPostList(data) {
        var $postList = document.getElementById('post-list');
        $postList.innerHTML = '';
        animateLoading(false);

        addOption($postList, "", "");

        for(var i = 0; i < data.length; i++){
            var element = data[i];
            addOption($postList, element.id, element.title);
        };

        $postList.onchange = getPost;
        $postList.disabled = false;
    }

    function addOption(select, value, text) {
        var option = document.createElement("option");
        option.text = text;
        option.value = value;
        select.appendChild(option);
    }

    function getPost() {
        var id = this.options[this.selectedIndex].value;
        if (id) {
            var $post = document.getElementById('post');
            $post.querySelector('h2').innerHTML = '';
            $post.querySelector('p').innerHTML = '';
            animateLoading(true);
            Site.ajax(root + '/posts/' + id, printPost);
        }
    }

    function printPost(data) {
        var $post = document.getElementById('post');
        animateLoading(false);
        $post.querySelector('h2').innerHTML = data.title;
        $post.querySelector('p').innerHTML = data.body;
    }

    function showModal() {
        document.querySelector('html').classList.add('modal-window');
    }

    function closeModal(event) {
        document.querySelector('html').classList.remove('modal-window');
        event.stopPropagation();
    }

    function animateLoading(shouldAnimate) {
        document.getElementById('post-list').disabled = shouldAnimate;
        if (shouldAnimate) {
            document.getElementsByClassName('spinner')[0].classList.remove('display-none');
        } else {
            document.getElementsByClassName('spinner')[0].classList.add('display-none');

        }
    }

}();
