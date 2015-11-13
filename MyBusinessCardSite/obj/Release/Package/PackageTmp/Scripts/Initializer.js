
function init() {
    initTopBar();
    initInfo();
    initMenu();
}

function initTopBar() {
    var tmp = document.getElementById('baseBody').innerHTML;
    document.getElementById('baseBody').innerHTML =
        '<div class="top_bar">' +
            '<img class="labelImage" onclick="switchMenu();" src="/Content/Images/menu.png"/>' +
            '<button class="bar_button toLeftOnTop" onclick="location.href = \'/home/Index\'">AnoviSoft</button>' +
            '<button class="bar_button toRightOnTop" onclick="location.href = \'/home/Contact\'">Contact</button>' +
        '</div>' +
        tmp;
}

function initInfo() {
    document.getElementById('baseColumn').innerHTML +=
        '<div class="row paper_group">' +
        '<div class="col-1">' +
        '<div class="paper">' +
        '<div class="paper_up">' +
        '<h2>Social</h2>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_vkontakte.png" onclick="location.href = \'https://vk.com/craftydeveloper\'"/>' +
        '<a class="iconInfo" href="https://vk.com/craftydeveloper">Vkontakte</a>' +
        '</div>' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_urfu.png" onclick="location.href = \'http://urfu.ru/en/\'"/>' +
        '<a class="iconInfo" href="http://urfu.ru/en/">URFU</a>' +
        '</div>' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_face.png" onclick="location.href = \'https://www.facebook.com/profile.php?id=100001930047747\'"/>' +
        '<a class="iconInfo" href="https://www.facebook.com/profile.php?id=100001930047747">Facebook</a>' +
        '</div>' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_google.png" onclick="location.href = \'https://plus.google.com/u/0/112157981808654194368\'"/>' +
        '<a class="iconInfo" href="https://plus.google.com/u/0/112157981808654194368">Google+</a>' +
        '</div>' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_tweet.png" onclick="location.href = \'https://twitter.com/l0dom\'"/>' +
        '<a class="iconInfo" href="https://twitter.com/l0dom">Twitter</a>' +
        '</div>' +
        '<div class="col-1-2">' +
        '<img class="socImg" src="/Content/Images/icon_youtube.png" onclick="location.href = \'http://www.youtube.com/channel/UCM_UOFYX1K7huJsPkt4TXXQ\'"/>' +
        '<a class="iconInfo" href="http://www.youtube.com/channel/UCM_UOFYX1K7huJsPkt4TXXQ">YouTube</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    
}

function initMenu(parameters) {
    document.getElementById('baseBody').innerHTML +=
    '<div class="leftMenu" id="leftMenu">' +
            '<div><button class="leftMenuItem" onclick="location.href = \'/home/Album\'">Album</button></div>' +
            '<div><button class="leftMenuItem" onclick="location.href = \'/home/Game\'">Game</button></div>' +
        '</div>';
}

function switchMenu() {
    var e = document.getElementById('leftMenu');
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}