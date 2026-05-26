const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ express: false }));

app.get('/',
    function(request, response){
        response.send('Etusivu');
    }
);

// GET-metodi
app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

// Middleware-funktio
app.use(
    function(req,res,next){
        console.log('The common middleware called');
        next();
    }
);

// GET-metodi yhdellä parametrilla
app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

// GET-metodi kahdella parametrilla
app.get('/example/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

// POST-metodi
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.listen(3000,
    function() {
        console.log('Server running on port 3000');
    }
);