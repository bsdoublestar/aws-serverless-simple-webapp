var getRidesInterval = 0;

// Inactive
window.addEventListener('blur', onTabInactive);

function onPageFocus() {
    updateNumberCircle();
    getRides();
    if (getRidesInterval !== 0 ) {
        clearInterval(getRidesInterval);
    }
    // check server if new rides exist every 60secs
    getRidesInterval = setInterval(getRides,60000);   
}

// stop checking server for new rides if
// user has left the tab, i.e. the tab is
// inactive. Blur event is defined for
// window (tab) above.
function onTabInactive() {
    //check if function is invoked: console.log("user left the page");
    if (getRidesInterval !== 0 ) {
        clearInterval(getRidesInterval);
    }
}

