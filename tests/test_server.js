const chai = require ('chai')
const chaiHttp = require ('chai-http')
//requerir la constantet app, donde está el server
const app =require('../index')

//realizar un test - configurar chai
chai.use(chaiHttp);
chai.should();

describe("Test realizado: comprobar que el server corre en puerto 3000", () => {
    //es describe no sería necesario, aporta información
    describe("GET /", () => {
        //bloque del test
        it("Resultado:", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
    })
})