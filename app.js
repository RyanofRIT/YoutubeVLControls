//call the callback with the result of conrolling the video
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    sendResponse(controlVideo(request.args));
});

function controlVideo(command){
    //there is only one video element on youtube pages
    var video = document.getElementsByTagName('video')[0];
    switch(command){
        case "medium_back_jump":
            video.currentTime -= 15;
            return "successful " + command;
        case "medium_forward_jump":
            video.currentTime += 15;
            return "successful " + command;
        case "long_back_jump":
            video.currentTime -= 60;
            return "successful " + command;
        case "long_forward_jump":
            video.currentTime += 60;
            return "successful " + command;
    }
}

