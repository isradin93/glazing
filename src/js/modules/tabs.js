const tabs = (tabHeaderSelector, tabsSelector, tabContentsSelector, activeClass) => {
    const tabHeader = document.querySelector(tabHeaderSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabContents = document.querySelectorAll(tabContentsSelector);

    const hideTabContent = () => {
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    };

    const showTabContent = (i = 0) => {
        tabContents[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    tabHeader.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))) {
            tabs.forEach((tab, i) => {
                if (target === tab || target.parentNode === tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;