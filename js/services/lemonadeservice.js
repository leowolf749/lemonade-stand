module.exports = {
    name: 'LemonadeService',
    func: function () {
        const log = [            
            { label: 'DAY', value: 1},
            { label: 'MONEY', value: '$' + 10},
            { label: 'VISITORS', value: 100},
            { label: 'CUSTOMERS', value: 0},
        ];
    
        return {
            getLog() {
                return log;
            },
        };

    },


}