export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 'p1',
                    image:
                        'https://bibliolifestyle.com/wp-content/uploads/2022/03/Cozy-reading-nook-with-a-well-organized-book-shelf-for-book-collecting-inspiration-2048x1152.jpg',
                    title: 'Book Collection',
                    description:
                        'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                },
                {
                    id: 'p2',
                    image:
                        'https://alpkit.com/cdn/shop/products/zhota-action1.jpg',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                },
                {
                    id: 'p3',
                    image:
                        'https://as1.ftcdn.net/v2/jpg/05/20/35/38/1000_F_520353863_Efo4ZV7VUEPCQPew2bV4YjU757YKA61K.jpg',
                    title: 'Food Box',
                    description:
                        'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                },
            ]
        };
    },
    getters: {
        products(state) {
            return state.products;
        }
    }
}