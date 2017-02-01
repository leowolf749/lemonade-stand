module.exports = {
    name: 'ResourcesService',
    func: function () {
        const resources = [
            {name: 'lemons', stock: 10, price: 2},
            {name: 'sugar', stock: 0, price: 1.25},
            {name: 'ice', stock: 0, price: .50},
            {name: 'cups', stock: 0, price: .10},
        ];

        return {
            getResources() {
                return resources;
            },
        }
    }
}