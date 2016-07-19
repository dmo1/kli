var Site = Site || {};
Site.ajax = function (url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };

    xhr.open('GET', url, true);
    xhr.send(null);
};