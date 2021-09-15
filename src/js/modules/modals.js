const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {

        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtn = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                modal.classList.add('animated', 'fadeIn');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modals;