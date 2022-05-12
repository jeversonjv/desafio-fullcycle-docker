# Desafio Fullcycle Docker

## Desafio 1

Criar uma imagem que imprima na tela "Code.education Rocks!", utilizando golang, mas a imagem tem que ser menor que 2mb.

Para testar:

```
docker run jeversontp/codeeducation
```

## Desafio 2

Nesse desafio a idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.

Para testar:

```
git clone https://github.com/jeversonjv/desafio-fullcycle-docker.git && cd nginx-nodejs-mysql && docker-compose up -d
```
