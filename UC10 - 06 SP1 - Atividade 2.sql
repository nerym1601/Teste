Create schema gestaoCompras;

use gestaoCompras;

create table medida(
	idmedida int auto_increment primary key,
    descricao varchar(20) not null,
    simbolo varchar(3) not null
);

create table produto(
	idproduto int auto_increment primary key,
    descricao varchar(50),
    idmedida int not null 
);

create table compras(
	idproduto int not null,
    idcompras int not null auto_increment,
    quantidade float,
    idmedida int not null,
    valorPago float,
	primary key (idproduto, idcompras),
		constraint fk_compra_produto foreign key (idproduto)
        references produto(idproduto)
);
