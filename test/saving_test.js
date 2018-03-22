const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Saving records', function() {
    
    // Create tests
    it('Saves a record to the database', function(done) {
        let char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false); // isNew method returns true when an instance is created but not saved to the database, so in this case we are expecting it to return false because we are saving it to the database.
            done();
        });
    });

});