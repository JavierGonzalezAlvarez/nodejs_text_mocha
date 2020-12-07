const chai = require ('chai')
const chaiHttp = require ('chai-http')
const app =require('../index')

//realziar un test - configurar chai
chai.use(chaiHttp);
chai.should();

describe("Test realizado: Server corre en puerto 3000", () => {
    describe("GET /", () => {
        it("resultado:", (done) => {
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