using aulas from '../db/schema';

service AulasBTP {
    entity Cadastro as projection on aulas.Cadastro;

    function TesteCadastro(ID : Integer) returns array of Cadastro;
}