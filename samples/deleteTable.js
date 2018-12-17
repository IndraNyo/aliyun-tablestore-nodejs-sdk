var client = require('./client');

var params = {
    tableName: 'nestedTag'
};

client.deleteTable(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

