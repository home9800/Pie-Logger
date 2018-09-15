const Pie = require('../models/pizzas');

const routes = (app) => {

    app.get('/', (req, res) => {
        Pie.findAll().then(pie => {
            res.render('index', { pie: pie });
        })
    })

    app.post('/api/addPizza/', (req, res) => {
        console.log('incoming post request');
        let pieName = req.body.pieName;
        
        Pie.create({ pie_name: pieName }).then(pie => {
            if(!pie) {
                console.log("Opps, something went wrong!");
                //Error wont come up, find a work around!!!
            } else {
                res.send(true);
            }
        });
    });
    
    app.put('/api/updatePizza/', (req, res) => {
        console.log('incoming put request');
        let pieId = req.body.pieId;
        
        Pie.update(
            { devoured: true },
            { where: {pie_id: pieId} }
        )
        .then(pie => {
            if(!pie) {
                console.log("Opps, something went wrong!");
            } else {
                res.send(true);
            }
        });
    });
}
//Exports into 'routes'
module.exports = routes;