var replace = require( "../src/str-replace" );

module.exports = {
  replace_all: function( assert ) {
    var actual = replace.all( "/" ).from( "/home/dir" ).to( "\\" );
    var expected = "\\home\\dir";
    assert.strictEqual( actual, expected );
    assert.done();
  }
};
