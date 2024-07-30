var assert  = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      });
    });
});


describe('Mongo', function(){
    describe('#connect()', function(){   
      it('Connects to Mongo DB', function(done) {
        let database = require('./db');

         database.connect(function(err){
            if(err) done(err);
         });
      });

       
    });
});
 

// const tempUser={
//   firstName: "EduardoTest",
//   lastName: "LastName",
//   email: "eduardo916_@live.com"
// }
 