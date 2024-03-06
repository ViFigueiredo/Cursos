1 - Criação de volume

docker volume create VOL1

2 - Rede interna entre containeres (se necessário)

docker network create NET1

3 - Baixar imagem

docker run -d --network NET1 -h mongo --name mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 -v VOL1:/data/db mongo:latest

4 - Permissão de acesso a novos bancos (substituir <>)

use <database>
db.createUser({
   user: "<user>",
   pwd: "<password>",
   roles: [ { role: "readWrite", db: "<database>" } ]
})