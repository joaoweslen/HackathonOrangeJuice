const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require('sinon');
const usersModel = require('../../models/usersModel')
//const generateToken = require('../../helpers/generateToken')

const { expect } = chai;

chai.use(chaiHttp);

const app = require("../../api/app");

describe("testando rota de login", () => {

  

  describe("1 - testa o se retorna bad request caso falte alguma informação", () => { 
    it("retorna status 400 se falta o email ou o password",async () => {
      const response = await chai
        .request(app)
        .post("/login")
        .send(
          {
            email: "leon@gmail.com",
                        
          }
        );
            
      expect(response.status).to.equal(400);
            
    });
  });

  describe("2 - testa o se retorna bad request caso não ache o usuario", () => {
    it("retorna status 404 e mensagem Not found",async () => {
      sinon.stub(usersModel, "findOne").resolves([]);
      const response = await chai
        .request(app)
        .post("/login")
        .send(
          {
            email: "kened@gmail.com",
            password: "123546"
                          
          }
        );
              
          expect(response.status).to.equal(404);
          expect(response.body.message).to.equal("Not found");
          sinon.restore()    
      });
  });

  describe("3 - testa se rejeita o login caso o login esteja errado.", () => { 
      
      afterEach(() => {
        sinon.restore();
      });
  
      it("retorna status 403 com a mensagem user not autorization",async () => {
        const responseModelFindOne = [
          {
            first_name: "leon",
            last_name: "kened",
            email: "leon@gmail.com",
            password: "536f868c09cfbc81399401da424e42e6"
          }
        ]
        sinon.stub(usersModel, "findOne").resolves(responseModelFindOne)
        
        const response = await chai
          .request(app)
          .post("/login")
          .send(
            {
              email: "leon@gmail.com",
              password: "12354"
            }
          );
              
        expect(response.status).to.equal(403);
        expect(response.body.message).to.equal('user not autorization');
              
      });
    });

  describe("4 - testa o login bem sucedido", () => { 

    afterEach(() => {
      sinon.restore();
    });

    it("retorna status 200 e o token",async () => {
      const responseModelFindOne = [
        {
          first_name: "leon",
          last_name: "kened",
          email: "leon@gmail.com",
          password: "536f868c09cfbc81399401da424e42e6"
        }
      ]
      sinon.stub(usersModel, "findOne").resolves(responseModelFindOne)
      
      const response = await chai
        .request(app)
        .post("/login")
        .send(
          {
            email: "leon@gmail.com",
            password: "123546"
          }
        );
            
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
      expect(response.body).to.have.property("first_name");
      expect(response.body).to.have.property("last_name");
      expect(response.body).to.have.property("first_name");
      expect(response.body).to.have.property("email");    
    });
  });
});

