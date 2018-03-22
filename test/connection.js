const mongoose = require('mongoose');


// Connection to the database before tests run
before(function(done) {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    
    // Ensure the connection has been successfully made
    mongoose.connection.once('open', function() {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error) {
        console.log('Connection error:', error);
    });
});