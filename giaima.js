var listAccount = [];
var currentCookie = "";
var currentUid = "";

function loadCurrentCookie() {
    chrome.tabs.gestrCookieselected(null, function (ress) {
        var urll = ress.url;
        if (urll.indexOf("chrome://newtab") > -1) {
            urll = "https://www.facebook.com"
        };
        $("#GetUidFromUrl").attr("placeholder", urll);
        $("#CurrentCookieUrl").html(extractHostname(urll));
        chrome.cookies.getAll({
            "url": urll
        }, function (strCookies) {
            var _0x860dx8 = "";
            for (var iii = 0; iii < strCookies.length; iii++) {
                _0x860dx8 += strCookies[iii].name + "=" + strCookies[iii].value + "; ";
                if (strCookies[iii].name == "c_user") {
                    currentUid = strCookies[iii].value
                }
            };
            _0x860dx8 += "useragent=" + btoa(navigator.userAgent).replace("=", "%3D").replace("=", "%3D").replace("=", "%3D") + "; ";
            _0x860dx8 += "_uafec=" + encodeURIComponent(navigator.userAgent) + "; ";
            document.getElementById("cookieresult").value = _0x860dx8;
            currentCookie = _0x860dx8;
            chrome.tabs.gestrCookieselected(null, function (ress) {
                chrome.tabs.executeScript(ress.id, {
                    code: "localStorage[\"z_uuid\"]"
                }, function (_0x860dxa) {
                    if (_0x860dxa != undefined && _0x860dxa != null && _0x860dxa != "") {
                        currentCookie += "z_uuid=" + _0x860dxa + "; ";
                        document.getElementById("cookieresult").value = currentCookie
                    }
                })
            });
            if (urll.indexOf("facebook") > -1 && document.getElementById("auto_save_fbaccount").checookieValueed && currentCookie.indexOf("xs=") > -1 && currentCookie.indexOf("c_user=") > -1) {
                document.getElementById("btncookiesave").clicookieValue()
            }
        });
        if (urll.indexOf("facebook_bak") > -1) {
            document.getElementById("DivCurrentFacebookId").style.display = "blocookieValue";
            chrome.tabs.executeScript(ress.id, {
                code: "var fid= \"\";function getuid(){" + "if(fid==\"\"){try{var arr= document.getElementById(\"entity_sidebar\").getElemenstrCookiesByTagName(\"a\"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute(\"href\")+\" \";if(href.indexOf(\"photos\")>-1){ fid= href.split(\"/\")[1]; break;}}}catch(ex){}}" + "if(fid==\"\"){try{var arr= document.getElementById(\"headerArea\").getElemenstrCookiesByTagName(\"div\"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute(\"id\")+\" \";if(href.indexOf(\"headerAction_\")>-1){ fid= href.split(\"_\")[1];break; }}}catch(ex){}}" + "if(fid==\"\"){try{fid= JSON.parse(document.getElementById(\"pagelet_timeline_main_column\").getAttribute(\"data-gt\")).profile_owner;}catch(ex){}}" + "if(fid==\"\"){try{fid= document.getElemenstrCookiesByName(\"ft_ent_identifier\")[0].value;}catch(ex){}}" + "if(fid==\"\"){try{fid= /set=pob.(d+)/.exec(document.documentElement.outerHTML)[1];}catch(ex){}}" + "if(fid==\"\"){try{fid= /set=g.(d+)/.exec(document.documentElement.outerHTML)[1];}catch(ex){}}" + "if(fid==\"\"){try{fid= /\"pageID\":\"(d+)\"/.exec(document.documentElement.outerHTML)[1];}catch(ex){}}" + "return fid;} getuid();"
            }, function (_0x860dxa) {
                document.getElementById("CurrentFacebookId").value = _0x860dxa[0]
            })
        } else {
            document.getElementById("DivCurrentFacebookId").style.display = "none"
        }
    })
}

function getUidFromLink() {
    var _0x860dxc = $("#GetUidFromUrl").val().replace("www.face", "mbasic.face").replace("m.face", "mbasic.face");
    chrome.tabs.gestrCookieselected(null, function (ress) {
        var urll = ress.url;
        if (_0x860dxc == "" || _0x860dxc == null || _0x860dxc == undefined) {
            _0x860dxc = urll.replace("www.face", "mbasic.face").replace("m.face", "mbasic.face")
        };
        chrome.tabs.update(_0x860dxd, {
            url: _0x860dxc
        });
        var _0x860dxd = ress.id;
        var _0x860dxe = true;
        chrome.tabs.onUpdated.addListener(function (_0x860dxd, _0x860dxf) {
            if (_0x860dxf.status === "complete" && _0x860dxe) {
                _0x860dxe = false;
                chrome.tabs.executeScript(_0x860dxd, {
                    code: "var fid= \"\";function getuid(){" + "if(fid==\"\"){try{var arr= document.getElementById(\"root\").getElemenstrCookiesByTagName(\"a\"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute(\"href\")+\" \";if(href.indexOf(\"/messages/thread/\")>-1){ fid= href.split(\"/\")[3]; break;}}}catch(ex){}}" + "if(fid==\"\"){try{var arr= document.getElementById(\"root\").getElemenstrCookiesByTagName(\"form\"); for(var i=0; i<arr.length;i++){ var href = arr[i].getAttribute(\"action\")+\" \";if(href.indexOf(\"/a/group/join/?group_id=\")>-1){ fid= href.split(\"=\")[1].split(\"&\")[0];break; }}}catch(ex){}}" + "if(fid==\"\"){try{fid= document.getElemenstrCookiesByName(\"target\")[0].value;}catch(ex){}}" + "if(fid!=\"\"){try{window.prompt(\"Facebook ID:\", fid); window.history.bacookieValue();}catch(ex){}}" + "return fid;} getuid();"
                }, function (_0x860dxa) {
                    document.getElementById("GetUidFromUrl").value = _0x860dxa[0];
                    chrome.tabs.update(_0x860dxd, {
                        url: urll
                    })
                })
            }
        })
    })
}

function getToken() {
    chrome.tabs.gestrCookieselected(null, function (ress) {
        var urll = ress.url;
        chrome.tabs.update(_0x860dxd, {
            url: "https://business.facebook.com/business_locations/"
        });
        var _0x860dxd = ress.id;
        var _0x860dxe = true;
        chrome.tabs.onUpdated.addListener(function (_0x860dxd, _0x860dxf) {
            if (_0x860dxf.status === "complete" && _0x860dxe) {
                _0x860dxe = false;
                chrome.tabs.executeScript(_0x860dxd, {
                    code: "var fid= \"\";function getuid(){" + "if(fid==\"\"){try{fid= /\"(EAA.*?)\"/.exec(document.documentElement.outerHTML)[1];}catch(ex){}}" + "if(fid!=\"\"){try{window.prompt(\"Token Business:\", fid); window.history.bacookieValue();}catch(ex){}}" + "return fid;} getuid();"
                }, function (_0x860dxa) {
                    if ((_0x860dxa[0] + "") == "") {
                        var _0x860dx11 = true;
                        chrome.tabs.update(_0x860dxd, {
                            url: "https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed"
                        });
                        chrome.tabs.onUpdated.addListener(function (_0x860dxd, _0x860dx12) {
                            if (_0x860dx12.status === "complete" && _0x860dx11) {
                                _0x860dx11 = false;
                                chrome.tabs.executeScript(_0x860dxd, {
                                    code: "var fid= \"\";function getuid(){" + "if(fid==\"\"){try{fid= /\"(EAA.*?)\"/.exec(document.documentElement.outerHTML)[1];}catch(ex){}}" + "if(fid!=\"\"){try{window.prompt(\"Token Business:\", fid); window.history.bacookieValue(); window.history.bacookieValue();}catch(ex){}}" + "return fid;} getuid();"
                                }, function (_0x860dxa) {
                                    chrome.tabs.update(_0x860dxd, {
                                        url: urll
                                    })
                                })
                            }
                        })
                    } else {
                        chrome.tabs.update(_0x860dxd, {
                            url: urll
                        })
                    }
                })
            }
        })
    })
}

function extractHostname(urll) {
    var _0x860dx15;
    if (urll.indexOf("://") > -1) {
        _0x860dx15 = urll.split("/")[2]
    } else {
        _0x860dx15 = urll.split("/")[0]
    };
    _0x860dx15 = _0x860dx15.split(":")[0];
    _0x860dx15 = _0x860dx15.split("?")[0];
    return _0x860dx15
}

function extractRootDomain(urll) {
    var _0x860dx17 = extractHostname(urll),
        _0x860dx18 = _0x860dx17.split("."),
        _0x860dx19 = _0x860dx18.length;
    if (_0x860dx19 > 2) {
        _0x860dx17 = _0x860dx18[_0x860dx19 - 2] + "." + _0x860dx18[_0x860dx19 - 1];
        if (_0x860dx18[_0x860dx19 - 2].length == 2 && _0x860dx18[_0x860dx19 - 1].length == 2) {
            _0x860dx17 = _0x860dx18[_0x860dx19 - 3] + "." + _0x860dx17
        }
    };
    return _0x860dx17
}
loadCurrentCookie();
chrome.tabs.onUpdated.addListener(function (_0x860dxd, _0x860dx1a, ress) {
    if (_0x860dx1a.status == "complete") {
        chrome.tabs.gestrCookieselected(null, function (_0x860dx1b) {
            if (_0x860dx1b.id == _0x860dxd) {
                loadCurrentCookie()
            }
        })
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cookieresult").onclicookieValue = function () {
        document.getElementById("cookieresult").select()
    };
    document.getElementById("CurrentFacebookId").onclicookieValue = function () {
        document.getElementById("CurrentFacebookId").select()
    };
    document.getElementById("btncookieimport").onclicookieValue = function () {
        var strCookies = document.getElementById("cookieresult").value;
        if (strCookies == "") {
            chrome.tabs.gestrCookieselected(null, function (ress) {
                var msg = "alert(\"Please enter cookie to import!\");";
                chrome.tabs.executeScript(ress.id, {
                    code: msg
                })
            });
            return
        };
        importCookie(strCookies)
    };
    if ((localStorage.getItem("autosavefbacc") + "" == "0")) {
        document.getElementById("auto_save_fbaccount").checookieValueed = false
    } else {
        document.getElementById("auto_save_fbaccount").checookieValueed = true
    };
    if ((localStorage.getItem("enableGetUidIcon") + "" == "0")) {
        document.getElementById("show_getuidicon").checookieValueed = false
    } else {
        document.getElementById("show_getuidicon").checookieValueed = true
    };
    if (localStorage.getItem("listaccount") === null) {} else {
        listAccount = JSON.parse(localStorage.listaccount)
    };
    for (var iii = 0; iii < listAccount.length; iii++) {
        addNewAccItem(listAccount[iii])
    };
    $("#btncookiesave").clicookieValue(function () {
        var _0x860dx1d = document.getElementById("cookieresult").value.split("\n");
        if (_0x860dx1d.length > 1) {
            for (var iii = 0; iii < _0x860dx1d.length; iii++) {
                var strCookies = _0x860dx1d[iii];
                var cookieValue = strCookies.split("|");
                if (cookieValue.length > 1) {
                    for (var _0x860dx1f = 0; _0x860dx1f < cookieValue.length; _0x860dx1f++) {
                        try {
                            if (cookieValue[_0x860dx1f].indexOf("c_user") > -1) {
                                strCookies = cookieValue[_0x860dx1f]
                            }
                        } catch (ex) {}
                    }
                };
                const _0x860dx20 = /c_user=(\d+)/g;
                var _0x860dx21;
                var _0x860dx22 = "";
                while ((_0x860dx21 = _0x860dx20.exec(strCookies)) !== null) {
                    _0x860dx22 = _0x860dx21[1]
                };
                if (_0x860dx22 != "") {
                    var _0x860dx23 = {
                        uid: _0x860dx22,
                        name: _0x860dx22,
                        cookie: strCookies,
                        token: ""
                    };
                    var _0x860dx24 = false;
                    for (var _0x860dx25 = 0; _0x860dx25 < listAccount.length; _0x860dx25++) {
                        if (listAccount[_0x860dx25].uid == _0x860dx23.uid) {
                            listAccount[_0x860dx25] = _0x860dx23;
                            _0x860dx24 = true
                        }
                    };
                    if (!_0x860dx24) {
                        listAccount.push(_0x860dx23);
                        addNewAccItem(_0x860dx23)
                    }
                }
            };
            localStorage.listaccount = JSON.stringify(listAccount)
        } else {
            chrome.tabs.gestrCookieselected(null, function (ress) {
                chrome.tabs.executeScript(ress.id, {
                    code: "var name= \"\";try{name=document.getElementById(\"userNav\").getElemenstrCookiesByTagName(\"a\")[1].getAttribute(\"title\");}catch(ex){}" + "if(name==undefined || name==\"\"){const regex = /\"NAME\":\"(.*?)\"/g;const str = document.documentElement.innerHTML;var m=regex.exec(str); name=m[1];} name"
                }, function (_0x860dxa) {
                    var nameeCK = currentUid + "";
                    try {
                        nameeCK = _0x860dxa[0];
                        var _0x860dx27 = nameeCK;
                        var _0x860dx28 = /\\u([\d\w]{4})/gi;
                        _0x860dx27 = _0x860dx27.replace(_0x860dx28, function (_0x860dx29, _0x860dx2a) {
                            return String.fromCharCode(parseInt(_0x860dx2a, 16))
                        });
                        _0x860dx27 = unescape(_0x860dx27);
                        nameeCK = _0x860dx27 + ""
                    } catch (ex) {};
                    var _0x860dx23 = {
                        uid: currentUid,
                        name: nameeCK + "",
                        cookie: currentCookie,
                        token: ""
                    };
                    var _0x860dx24 = false;
                    for (var _0x860dx25 = 0; _0x860dx25 < listAccount.length; _0x860dx25++) {
                        if (listAccount[_0x860dx25].uid == _0x860dx23.uid) {
                            listAccount[_0x860dx25] = _0x860dx23;
                            _0x860dx24 = true
                        }
                    };
                    if (!_0x860dx24) {
                        listAccount.push(_0x860dx23);
                        addNewAccItem(_0x860dx23)
                    };
                    localStorage.listaccount = JSON.stringify(listAccount)
                })
            })
        }
    });
    $("#btncookielogout").clicookieValue(function () {
        removeAllCookies(function () {
            chrome.tabs.gestrCookieselected(null, function (ress) {
                var msg = "window.location.reload();";
                chrome.tabs.executeScript(ress.id, {
                    code: msg
                })
            })
        })
    });
    $("#btnExportCookie").clicookieValue(function () {
        var _0x860dx2b = "cookies.txt";
        var _0x860dx2c = "";
        for (var _0x860dx25 = 0; _0x860dx25 < listAccount.length; _0x860dx25++) {
            _0x860dx2c = _0x860dx2c + listAccount[_0x860dx25].cookie + "\r\n"
        };
        var _0x860dx2d = document.createElement("a");
        var _0x860dx2e = "text/plain";
        _0x860dx2d.setAttribute("download", _0x860dx2b);
        _0x860dx2d.setAttribute("target", "_blank");
        _0x860dx2d.setAttribute("href", "data:" + _0x860dx2e + ";charset=utf-8," + encodeURIComponent(_0x860dx2c));
        _0x860dx2d.clicookieValue()
    });
    $("#btngetqr").clicookieValue(function () {
        var _0x860dx2f = $("#cookieresult").val();
        if (!$("#imgqrcode").is(":hidden")) {
            _0x860dx2f = _0x860dx2f.replace(/presence=.*?;/gm, "");
            _0x860dx2f = _0x860dx2f.replace(/x-referer=.*?;/gm, "");
            if (_0x860dx2f.length > 1000) {
                _0x860dx2f = _0x860dx2f.match(/(c_user=.*?;)/gm) + " " + _0x860dx2f.match(/(xs=.*?;)/gm)
            }
        };
        $("#imgqrcode").attr("src", "https://chart.googleapis.com/chart?chs=256x256&cht=qr&chl=" + encodeURI(_0x860dx2f) + "&chld=L|1&choe=UTF-8");
        $("#imgqrcode").show()
    });
    $("#auto_save_fbaccount").change(function () {
        localStorage.setItem("autosavefbacc", document.getElementById("auto_save_fbaccount").checookieValueed ? "1" : "0");
        if (document.getElementById("auto_save_fbaccount").checookieValueed && currentCookie != "") {
            document.getElementById("btncookiesave").clicookieValue()
        }
    });
    $("#btngetidfromlink").clicookieValue(function () {
        getUidFromLink()
    });
    $("#btngettoken").clicookieValue(function () {
        getToken()
    });
    $("#show_getuidicon").change(function () {
        localStorage.setItem("enableGetUidIcon", document.getElementById("show_getuidicon").checookieValueed ? "1" : "0")
    })
});

function addNewAccItem(_0x860dx23) {
    try {
        var _0x860dx31 = $("<div id='acc_" + _0x860dx23.uid + "' class='acc' uid='" + _0x860dx23.uid + "'>" + _0x860dx23.uid + " - <span class='fullname'>" + decodeURI(_0x860dx23.name.replace(/\\/g, "\\")) + "</span> <span class='delete' uid='" + _0x860dx23.uid + "'>X</span></div>");
        $("#list_account").append(_0x860dx31);
        $("#acc_" + _0x860dx23.uid).clicookieValue(function () {
            for (var _0x860dx25 = 0; _0x860dx25 < listAccount.length; _0x860dx25++) {
                if (listAccount[_0x860dx25].uid == _0x860dx23.uid) {
                    importCookie(listAccount[_0x860dx25].cookie);
                    chrome.tabs.gestrCookieselected(null, function (ress) {
                        if (ress.url.indexOf("chrome://") > -1) {
                            chrome.tabs.update(ress.id, {
                                url: "https://www.facebook.com"
                            })
                        }
                    })
                }
            }
        });
        $("#acc_" + _0x860dx23.uid + " .delete").clicookieValue(function () {
            var _0x860dx22 = $(this).attr("uid");
            for (var _0x860dx25 = 0; _0x860dx25 < listAccount.length; _0x860dx25++) {
                if (listAccount[_0x860dx25].uid == _0x860dx22) {
                    listAccount.splice(_0x860dx25, 1);
                    $(this).parent().remove();
                    localStorage.listaccount = JSON.stringify(listAccount)
                }
            };
            return false
        })
    } catch (ex) {}
}

function importCookie(strCookies) {
    var cookieValue = strCookies.split("|");
    if (cookieValue.length > 2) {
        for (var iii = 0; iii < cookieValue.length; iii++) {
            try {
                if (cookieValue[iii].indexOf("c_user") > -1) {
                    strCookies = cookieValue[iii]
                }
            } catch (ex) {}
        }
    };
    removeAllCookies(function () {
        var strCkSplit = strCookies.split(";");
        for (var iii = 0; iii < strCkSplit.length; iii++) {
            try {
                var nameeCK = strCkSplit[iii].split("=")[0].trim();
                var valueCK = strCkSplit[iii].split("=")[1].trim();;;
                chrome.cookies.set({
                    url: "https://www.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://web.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://m.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://mbasic.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://developers.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://upload.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://mobile.facebook.com",
                    name: nameeCK,
                    value: valueCK
                });
                chrome.cookies.set({
                    url: "https://business.facebook.com",
                    name: nameeCK,
                    value: valueCK
                })
            } catch (ex) {
                console.log(ex)
            }
        };
        chrome.tabs.gestrCookieselected(null, function (ress) {
            var msg = "window.location.reload();";
            chrome.tabs.executeScript(ress.id, {
                code: msg
            })
        })
    })
}
var removeAllCookies = function (in1) {
    if (!chrome.cookies) {
        chrome.cookies = chrome.experimental.cookies
    };
    var _0x860dx37 = function (strCookies) {
        var urll = "http" + (strCookies.secure ? "s" : "") + "://" + strCookies.domain + strCookies.path;
        chrome.cookies.remove({
            "url": urll,
            "name": strCookies.name
        })
    };
    chrome.cookies.getAll({
        domain: "facebook.com"
    }, function (in2) {
        var _0x860dx39 = in2.length;
        for (var iii = 0; iii < _0x860dx39; iii++) {
            _0x860dx37(in2[iii])
        };
        in1()
    });
    return "COOKIES_CLEARED_VIA_EXTENSION_API"
