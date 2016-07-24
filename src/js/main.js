/*
 * @
 */
var Site = Site || {};
Site.main = function () {

    //public interface
    var pub = {
        init: function () {
            Site.a.animateLoading(true);
            Site.data.getPosts(this.printPostList);
            Site.a.initAnimations();
        },
        printPostList: function (data) {
            var $postList = document.getElementById('post-list');
            $postList.innerHTML = '';
            Site.a.animateLoading(false);

            addOption($postList, "", "");

            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                addOption($postList, element.id, element.title);
            }
            ;

            $postList.onchange = getPost;
            $postList.disabled = false;
        },
        printPost: function (data) {
            var $post = document.getElementById('post');
            Site.a.animateLoading(false);
            $post.querySelector('h2').innerHTML = data.title;
            $post.querySelector('p').innerHTML = data.body;
        }

    };

    //private methods
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
            Site.data.getSinglePost(id, pub.printPost);
        }
    }



    return pub;
}();

document.addEventListener("DOMContentLoaded", Site.main.init);
