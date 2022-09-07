export default new (class CartAuth {
    constructor () {
        if (!CartAuth.instance) {
            CartAuth.instance = this;
        }

        return CartAuth.instance;
    }

    async addProduct (productId) {
        const formData = new FormData();

        [
            ['csrfmiddlewaretoken', document.getElementsByName('csrfmiddlewaretoken')[0].value],
            ['productId', productId]
        ].forEach(field => {
            formData.append(field[0], field[1]);
        })

        $.ajax({
            url: '/cart/add',
            data: formData,
            method: 'POST',
            processData: false,
            contentType: false,
            success: (response) => {
                if (response.successful)
                    location.href = location.href;
            }
        });
    }

    async removeProduct (productId) {
        const formData = new FormData();

        [
            ['csrfmiddlewaretoken', document.getElementsByName('csrfmiddlewaretoken')[0].value],
            ['productId', productId]
        ].forEach(field => {
            formData.append(field[0], field[1]);
        })

        $.ajax({
            url: '/cart/remove',
            data: formData,
            method: 'POST',
            processData: false,
            contentType: false,
            success: (response) => {
                if (response.successful)
                    location.href = location.href;
            }
        });
    }
});