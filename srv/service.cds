using aulas from '../db/schema';

service AulasBTP {
    entity Cadastro as projection on aulas.Cadastro;

    function RequisicaoCadastro(ID : Integer, cpf : String) returns array of Cadastro;
}