/*
 * @
 */

var Site = Site || {};
Site.data = function () {
    var adr = {root: 'http://jsonplaceholder.typicode.com',
        one: '/posts/',
        many: '/posts'
    };

    function ajax(url, callback) {
        var data = JSON.parse(Site.ajax(url));
        callback(data);
    };

    return {
        setURLs: function(urls){
            adr.root = urls.root ? urls.root : adr.root;
            adr.one = urls.one ? urls.one : adr.one;
            adr.many = urls.many ? urls.many : adr.many;
        },
        getPosts: function (callback) {
            ajax(adr.root + adr.many, callback);
        },
        getSinglePost: function (id, callback) {
            ajax(adr.root + adr.one + id, callback);
        }
    };
}();