export default () => {
    $('.open-modal').on('click', (e) => {
        $(`#${e.currentTarget.dataset.modal}-modal`).removeClass('modal--closed');
    });

    $('.close-modal').on('click', (e) => {
        const modal = $(`#${e.currentTarget.dataset.modal}-modal`);

        modal.addClass('modal--closed');
    });
};