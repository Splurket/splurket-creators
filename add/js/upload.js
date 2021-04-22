function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    document.getElementById('prickpic').style.display = "none"
    var myDIV = document.getElementById('imgr_pic');
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}

var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        var content =
'<br><input style="display:none;" class="image-url" id="imglink" onchange="imagelink(this.value)" value=\"' + get_link + '\"/>' 
             + '<center><img class="img" width = "537px" height="240px" alt="Imgur-Upload" src=\"' + get_link + '\"/></center><br>';
        addImg('.status', content);
        imagelink(get_link)
    }
};

new Imgur({
    clientid: '4409588f10776f7', //You can change this ClientID
    callback: feedback
});
