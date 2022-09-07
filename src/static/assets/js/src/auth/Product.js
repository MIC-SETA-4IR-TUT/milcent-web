export default new (class ProductAuth {
    constructor () {
        if (!ProductAuth.instance) {
            ProductAuth.instance = this;
        }

        return ProductAuth.instance;
    }

    async addProduct () {
        const formData = new FormData();

        [
            { value: $('#product-brand').val(), name: 'productBrand' },
            { value: $('#product-name').val(), name: 'productName' },
            { value: $('#product-description').val(), name: 'productDescription' },
            { value: document.getElementsByName('csrfmiddlewaretoken')[0].value, name: 'csrfmiddlewaretoken' }
        ].forEach(field => {
            formData.append(field.name, field.value);
        });

        // for (const file of vendorDocs[i][0]['files']) {
        //     formData.append(vendorDocs[i][1] + '[]', file);
        // }

        $.ajax({
            url: '/products/add-product',
            data: formData,
            enctype: 'multipart/form-data',
            method: 'POST',
            processData: false,
            contentType: false,
            success: (response) => {
            }
        });
    }
});