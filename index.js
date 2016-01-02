var PORT = process.env.PORT || 8080,
    express = require('express'),
    app = express();
    
    // Testing requirements
var util = require('util');

app.get('/', function (req, res) {
    res.send(':-)');
});

app.get('/:param', function (req, res) {
    var date;
    var paramInt = parseInt(req.params.param);
    if(paramInt) {
        date = new Date(paramInt * 1000);
    } else {
        date = new Date(req.params.param);
    }
    var answer = {};
    if (date.toString() != "Invalid Date") {
        answer = {
            unix: Math.floor(date.getTime() / 1000),
            natural: date.toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
        }
    } else {
        answer = {
            unix: null,
            natural: null
        }
    }
    res.send(answer);
});

app.listen(PORT, function() {
    console.log('Start listening on port ' + PORT);
});
