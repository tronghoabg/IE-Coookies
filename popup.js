window.onload = function(){
    var  domain = document.getElementById('domain');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var url = tabs[0].url
        if(url.indexOf('http')<0){
            domain.value = ''
            return
        }
        var start = url.indexOf("//") + 2
        var end = url.indexOf("/", start)
        url = url.slice(start, end)
        var flagWWW = url.indexOf('www.')
        if(flagWWW>-1){
            url  = url.replace('www.', '')
        }
        domain.value = url
        showCookies(url)
    });

}
async function showCookies(domain) {
    let cks = await chrome.cookies.getAll({ url: 'https://' + domain });
    let text = ''
    for (let ck of cks) {
        text += ck.name + '=' + ck.value + ';';
    }
    let cookies = document.getElementById('current_cookies');
    cookies.value = text
}
document.getElementById('btncookielogout').onclick = () => {
    let domain = document.getElementById('domain').value;
    if(domain.length > 1){
        removeCookies(domain);
    }else{
        alert('Please input domain')
    }

}
document.getElementById('id_button_login').onclick = () => {
    let domain = document.getElementById('domain').value;
    let cookies = document.getElementById('cookies').value;

    if(domain.length > 1 && cookies.length > 1){
        loginCookies(domain, cookies);
    }else{
        alert('Please input domain')
    }

}
var arrDomainFacebook = ['facebook.com', 'web.facebook.com', 'm.facebook.com', 'mbasic.facebook.com',
    'developers.facebook.com', 'upload.facebook.com', 'mobile.facebook.com', 'business.facebook.com']
function removeCookies(domain) {
    chrome.cookies.getAll({
        url: "https://" + domain
    }, ((cookies) => {

        for (let cookie of cookies) {
            chrome.cookies.remove({
                url: 'https://' + domain,
                name: cookie['name']
            });
        }
    }));

    chrome.cookies.getAll({
        url: "https://www." + domain
    }, ((cookies) => {

        for (let cookie of cookies) {
            chrome.cookies.remove({
                url: 'https://www.' + domain,
                name: cookie['name']
            });
        }
    }));

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: 'https://' + domain });
    });
}
function loginCookies(domain, cookies) {
    cookies = cookies.split(';')
    for (let cookie of cookies) {
        let cookiesSplit = cookie.split('=');
        if (cookiesSplit.length > 1) {
            let name = cookiesSplit[0].trim();
            let value = cookiesSplit[1].trim();
            if ( domain.indexOf('facebook') > 0) {
                for (let d of arrDomainFacebook) {
                    chrome.cookies.set({
                        url: "https://" + d,
                        name: name,
                        value: value
                    });
                    chrome.cookies.set({
                        url: "https://www." + d,
                        name: name,
                        value: value
                    });
                    chrome.cookies.set({
                        url: "http://" + d,
                        name: name,
                        value: value
                    });
                    chrome.cookies.set({
                        url: "http://www." + d,
                        name: name,
                        value: value
                    });
                }
            } else {
                chrome.cookies.set({
                    url: "https://" + domain,
                    name: name,
                    value: value
                });
                chrome.cookies.set({
                    url: "https://www." + domain,
                    name: name,
                    value: value
                });
                chrome.cookies.set({
                    url: "http://" + domain,
                    name: name,
                    value: value
                });
                chrome.cookies.set({
                    url: "http://www." + domain,
                    name: name,
                    value: value
                });
            }
        }
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: 'https://' + domain });
    });
}
