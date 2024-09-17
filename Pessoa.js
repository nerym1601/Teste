class Pessoa{
      constructor(vNome, vLogradouro, vNumero, vBairro, vCidade, vEstado, vCEP){
        this.nome=vNome;
        this.logradouro=vLogradouro;
        this.numero=vNumero;
        this.bairro=vBairro;
        this.cidade=vCidade;
        this.estado=vEstado;
        this.cep=vCEP;
    }
    
}

class Fisica extends Pessoa{
        constructor(vNome, vLogradouro, vNumero, vBairro, vCidade, vEstado, vCEP, vCPF, vNascimento){
        super(vNome, vLogradouro, vNumero, vBairro, vCidade, vEstado, vCEP);
        this.cpf=vCPF;
        this.nascimento=vNascimento;
    }
    
}

class Juridica extends Pessoa{
        constructor(vNome, vLogradouro, vNumero, vBairro, vCidade, vEstado, vCEP, vCNPJ, vRazao){
        super(vNome, vLogradouro, vNumero, vBairro, vCidade, vEstado, vCEP);
        this.cnpj=vCNPJ;
        this.razao=vRazao;
    }
    
}

const PessoaFisica = new Fisica('Fulano de Tal','Rua dos Anzois',12,'Marinha','Fortaleza','Ceara','12345-678','123.456.789-01','01/01/2000');
const PessoaJuridica = new Juridica('Acme Inc','Rua das Bolinhas',10,'Geometrico','Fortaleza','Ceara','12345-678','12.345.678/0001-90','Acme Corporation')

console.log('Pessoa Física:');
console.log(PessoaFisica.nome);
console.log(PessoaFisica.cpf);
console.log(PessoaFisica.nascimento);
console.log(PessoaFisica.logradouro);
console.log(PessoaFisica.numero);
console.log(PessoaFisica.bairro);
console.log(PessoaFisica.cidade);
console.log(PessoaFisica.estado);
console.log(PessoaFisica.cep);
console.log('\nPessoa Jurídica:');
console.log(PessoaJuridica.nome);
console.log(PessoaJuridica.cnpj);
console.log(PessoaJuridica.razao);
console.log(PessoaJuridica.logradouro);
console.log(PessoaJuridica.numero);
console.log(PessoaJuridica.bairro);
console.log(PessoaJuridica.cidade);
console.log(PessoaJuridica.estado);
console.log(PessoaJuridica.cep);
