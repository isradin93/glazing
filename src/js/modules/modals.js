const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeBtnSelector) => {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtn = document.querySelector(closeBtnSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    };

    const showModalByTimeout = (selector, timeout) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, timeout);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTimeout('.popup', 60000);
};

export default modals;