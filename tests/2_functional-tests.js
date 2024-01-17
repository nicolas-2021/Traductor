const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
        test("Traducción con campos de texto y configuración regional: solicitud POST a/api/translate", function(done){
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({text:"No Mr. Bond, I expect you to die.", locale:"toBritish"})
                .end(function(err,res){
                    assert.equal(res.status, 200);
                    done();
                });
        });

        test("Traducción con texto y campo de configuración regional no válido: solicitud POST a/api/translate", function(done){
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({text:"No Mr. Bond, I expect you to die.", locale:"NoLoCreo"})
                .end(function(err,res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Invalid value for locale field");
                    done();
                });
        });

        test("Traducción con campo de texto faltante: solicitud POST a/api/translate", function(done){
            chai
                .request(server)
                .keepOpen()
                .post('/api/translate')
                .send({locale:"toBritish"})
                .end(function(err,res){
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, 'Required field(s) missing');
                    done();
                });
        });

        test("Traducción con campo de configuración regional faltante: solicitud POST a/api/translate", function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text:"No Mr. Bond, I expect you to die."})
            .end(function(err,res){
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            });
        });

        test("Traducción con texto vacío: solicitud POST a/api/translate", function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text:"", locale:"toBritish"})
            .end(function(err,res){
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'No text to translate');
                done();
            });
        });

        test("Traducción con texto que no necesita traducción: POST solicitud a/api/translate", function(done){
            chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text:"hey", locale:"toBritish"})
            .end(function(err,res){
                assert.equal(res.status, 200);
                done();
            });
        })

});
