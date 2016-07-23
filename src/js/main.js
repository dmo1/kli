/*
 * @
 */
var Site = Site || {};
Site.main = function () {
    Site.a.animateLoading(true);
    Site.data.getPosts(printPostList);
    Site.a.initAnimations();

    function printPostList(data) {
        var $postList = document.getElementById('post-list');
        $postList.innerHTML = '';
        Site.a.animateLoading(false);

        addOption($postList, "", "");

        for(var i = 0; i < data.length; i++){
            var element = data[i];
            addOption($postList, element.id, element.title);
        };

        $postList.onchange = getPost;
        $postList.disabled = false;
    }

    //private
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
            Site.a.animateLoading(true);
            Site.data.getSinglePost(id, printPost);
        }
    }

    //private
    function printPost(data) {
        var $post = document.getElementById('post');
        Site.a.animateLoading(false);
        $post.querySelector('h2').innerHTML = data.title;
        $post.querySelector('p').innerHTML = data.body;
    }
    
};
document.addEventListener( "DOMContentLoaded", Site.main );
