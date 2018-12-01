function scrollIntoView2(target){
    var tabIndex = target.tabIndex;
    var hasTabIndex = target.hasAttribute(tabIndex);
    if(!hasTabIndex){
        target.tabIndex=0; 
    }
    target.focus();
    if(!hasTabIndex){
        target.removeAttribute("tabIndex");
    }
}