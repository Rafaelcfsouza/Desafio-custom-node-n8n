# Desafio-custom-node-n8n
Conector personalizado para a plataforma de automação n8n.

#  n8n Custom Node - Random

Este projeto implementa um nó personalizado para o [n8n](https://n8n.io), chamado **Random**, que integra com a API [Random.org](https://www.random.org/) para gerar um número aleatório entre dois valores fornecidos.

---

##  Funcionalidades

- Entrada: valores `Min` e `Max`.
- Saída: número aleatório no intervalo `[Min, Max]` (inclusive).
- Utiliza a API pública do [Random.org](https://www.random.org/integers/) para obter os números aleatórios.
- Ícone personalizado exibido no editor n8n.

---

##  Instalação das Dependências

Antes de tudo, instale as dependências do projeto:

```bash
npm install

---

## Executando com Docker
Compile o projeto TypeScript:

```bash
npx tsc


Certifique-se de que a pasta dist/ foi criada e contém o arquivo Random.node.js.

Inicie o ambiente com Docker Compose (se aplicável):

```bash
docker compose up -d


Se quiser reiniciar completamente, pode usar:

```bash
docker compose down
docker compose up -d


O n8n iniciará com os nós personalizados carregados. Você verá o nó “Random” disponível no editor.

---

## Configurar o ambiente

Nenhuma variável de ambiente adicional é necessária.

Certifique-se de que:
A pasta dist/ foi gerada após o npx tsc.
O arquivo random.svg está na mesma pasta do Random.node.js.
O volume dos nodes personalizados esteja corretamente configurado no docker-compose.yml.

---

## Executar Testes

Este projeto não possui testes automatizados configurados. Para validar o funcionamento:

Compile com npx tsc.
Suba o n8n com docker compose up -d.
Abra o editor do n8n e use o nó “Random” em um fluxo.
Verifique se o número gerado está dentro do intervalo informado.

---

## Informações Adicionais

O arquivo do ícone SVG (random.svg) deve estar na mesma pasta que Random.node.ts.
No código do nó, o ícone é referenciado assim:
icon: 'file:random.svg'

Toda alteração no código exige nova compilação com npx tsc e reinício do container.
