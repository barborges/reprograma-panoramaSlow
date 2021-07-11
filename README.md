# nome do projeto: Panorama Slow - [API] pesquisador de marcas de perqueno porte slow fashion no Brasil e seu índice de transparência (ITMB).


 **To do list**

- [x]  Fazer documentação;
- [x]  Alinhar estrutura arquitetura;
- [x]  Rota de apresentação do projeto;
- [x]  /marcas deve retornar todas as marcas. Listar todas as marcas cadastradas;
- [x]  Filtrar por ID;
- [x]  Cadastrar nova marca;
- [x]  Deletar marcas


**Implementações Futuras**

- [ ]  Índice de transparência de marcas/produtores locais;
- [ ]  Filtrar por estados e cidades;
- [ ]  Filtrar por marcas/produtores feitas/idealizadas por pessoas negras;
- [ ]  Filtrar por marcas/produtores feita/idealizadas por LGBTQIA+;
- [ ]  Filtro de pesquisa para diferentes tipos de produtos



**EndPoints / Métodos:**

[GET] "/" 
status: 200 ok

# Retornar toda a apresentação do projeto.

[GET] "/marcas"
status: 200 ok 

# Visualizador de todas as marcas cadastradas.

[GET] "/marcas/id"

# Pesquisador por ID de cada marca.

[GET] "/estados"

# Deverá retornar todas as marcas contribuintes por determinado estado.

[GET] "/estados"

# Deverá retornar todas as marcas contribuintes por determinada cidade.

[GET] "/marcas/produtoresNegres?"

# Apenas marcas idealizadas por pessoas negras.

[GET] "/marcas/produtoreslgbtqia+?"

# Apenas marcas idealizadas por pessoas negras.


[POST] "/marcas/cadastrar"

# Cadastrar marcas que deverá ser enviada pelo body:

```json
{
        "id": "gerado automaticamente pelo mongodb",
        "data criação": NUMBER,
        "nome marca": "STRING",
        "descricao": "STRING",
        "motivacao": "STRING",
        "causas que cumpre atualmente": "STRING"],
        "estado": "STRING",
        "cidade": "STRING",
        "é uma marca feita por pessoa negra?": BOOLEAN,
        "fundada em": NUMBER,
        "classificação": "STRING",
        "contatos": "STRING" [array?] 
    }
```

[PUT] "/marca/replace"

# Atualizar marca.

[PATCH] "/marcas/update/:id"

# Atualiza qualquer parte do cadastro da marca.

[DELETE] "/marcas/:id"

# Deletar marcas por ID.