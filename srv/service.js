const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(async function () {
 
    this.before('RequisicaoCadastro', async (req) => { 

        
    })

    this.on('RequisicaoCadastro', async (req) => { 

        const { Cadastro } = this.entities;
        const VariavelID = req?.data?.ID;
        const VariavelCpf = req?.data?.cpf;
        const VariavelNome = req?.data?.nome;

        if (!VariavelID) {
            return req.error(400, 'Não foi digitado o campo chave');            
        }

        const cadastro = await SELECT.from(Cadastro).where({ 
            ID: VariavelID,
            cpf: VariavelCpf,
            nome: VariavelNome })
        
        if (!cadastro || cadastro.length === 0) {
            return req.error(400, 'Dados não encontrados');            
        } else {
            return cadastro
        }
    })

    this.after('RequisicaoCadastro', async (req) => { 

        
    })

})