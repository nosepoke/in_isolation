UIBar.stow();

config.addVisitedLinkClass = true;

Config.navigation.override = function () {
    var sv = State.variables;

    // Abort if $countdown isn't a number or it's already reached zero.
    if (typeof sv.countDown !== 'number' || sv.countDown <= 0) {
        return;
    }

    // Decrement $countdown by five.
    sv.countDown -= 5;

    // If $countdown has reached zero, send the player to the GameOver passage (sans quotes).  Elsewise, let them proceed as normal.
    if (sv.countDown <= 0) {
        return 'GameOver';
    }
};
