/*
 * @
 */

var Site = Site || {};
Site.ajax = function (url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return xhr.responseText;
        }
    };

    xhr.open('GET', url, true);
    xhr.send(null);
};