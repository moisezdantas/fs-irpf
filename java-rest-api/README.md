## IRPF API (fake)


- Faça o clone do projeto 

```bash
git clone https://github.com/prof-emilio-resende/java-rest-api.git
```

- Execute as ações do maven para build na raíz do projeto
```bash
mvn clean
mvn install
```

- Execute a ação de execução do projeto web (spring-boot) **dentro da pasta irpf-rest**
```bash
mvn spring-boot:run
```

- Execute a chamada de teste:

```bash
curl --request POST \
  --url http://127.0.0.1:8080/irpf/calculate \
  --header 'Content-Type: application/json' \
  --data '{
    "totalSalary": 3500.00,
    "dependentsNumber": 2
  }'
```

Enjoy ! :space_invader: