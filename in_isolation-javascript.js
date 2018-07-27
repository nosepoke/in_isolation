//$('#ui-bar').remove();
//$(document.head).find('#style-ui-bar').remove();
config.addVisitedLinkClass = true;


Config.navigation.override = function (d) {
    if (State.variables.countDown) {
        if ((State.variables.countDown) < 100) {
            return 'GameOver';
        }
    }
    return false;
};
