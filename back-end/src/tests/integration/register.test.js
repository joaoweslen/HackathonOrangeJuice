const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require('sinon');
const usersModel = require('../../models/usersModel')
//const generateToken = require('../../helpers/generateToken')

const { expect } = chai;

chai.use(chaiHttp);

const app = require("../../api/app");

describe("testando rota de Register", () => {

  

  describe("1 - testa o se retorna bad request caso falte alguma informação", () => { 
    it("retorna status 403 se falta o first_name não estiver no body",async () => {
      const response = await chai
        .request(app)
        .post("/register")
        .send(
        {
            last_name: "jane",
            email: "mary@gmail.com",
            password:"12345678",
            first_nam: "mary"     
        }
      );
            
      expect(response.status).to.equal(403);
      expect(response.body.message).to.equal("\"first_name\" is required");
    });

    it("retorna status 403 se falta o last_name não estiver no body",async () => {
      const response = await chai
        .request(app)
        .post("/register")
        .send(
        {
            ast_name: "jane",
            email: "mary@gmail.com",
            password:"12345678",
            first_name: "mary"     
        }
      );
      expect(response.status).to.equal(403);
      expect(response.body.message).to.equal("\"last_name\" is required");  
    });

    it("retorna status 403 se falta o email não estiver no body",async () => {
      const response = await chai
        .request(app)
        .post("/register")
        .send(
        {
            last_name: "jane",
            mail: "mary@gmail.com",
            password:"12345678",
            first_name: "mary"     
        }
      );    
      expect(response.status).to.equal(403);
      expect(response.body.message).to.equal("\"email\" is required");  
    });

    it("retorna status 403 se falta o password não estiver no body",async () => {
      const response = await chai
        .request(app)
        .post("/register")
        .send(
        {
            last_name: "jane",
            email: "mary@gmail.com",
            passwordsenha: "12345678",
            first_name: "mary"     
        }
      );
      expect(response.status).to.equal(403);
      expect(response.body.message).to.equal("\"password\" is required");  
    });

    it("retorna status 403 caso tenha alguma informação que não deveria estar no body",async () => {
      const response = await chai
        .request(app)
        .post("/register")
        .send(
        {
            last_name: "jane",
            email: "mary@gmail.com",
            password: "12345678",
            first_name: "mary",
            a: "a"
        }
      );
      expect(response.status).to.equal(403);
      expect(response.body.message).to.equal("\"a\" is not allowed");  
    });
  });

  // describe("3 - testa se rejeita o login caso o login esteja errado.", () => { 
      
  //     afterEach(() => {
  //       sinon.restore();
  //     });
  
  //     it("retorna status 403 com a mensagem user not autorization",async () => {
  //       const responseModelFindOne = [
  //         {
  //           id: "1",
  //           first_name: "leon",
  //           last_name: "kened",
  //           email: "leon@gmail.com"
  //         }
  //       ]
  //       sinon.stub(usersModel, "findOne").resolves(responseModelFindOne)
        
  //       const response = await chai
  //         .request(app)
  //         .post("/register")
  //         .send(
  //           {
  //             first_name: "leon",
  //             last_name: "kened",
  //             email: "leon@gmail.com"
  //           }
  //         );
              
  //       expect(response.status).to.equal(403);
  //       expect(response.body.message).to.equal('user not autorization');
              
  //     });
  //   });

});
