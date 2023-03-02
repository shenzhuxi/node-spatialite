var sqlite = require('./lib/spatialite');
var db = new sqlite.Database(':memory:');

var query = "SELECT sqlite_version();";

db.spatialite(function (err) {
    db.each(query, function (err, row) {
        console.log(row);
    });
});