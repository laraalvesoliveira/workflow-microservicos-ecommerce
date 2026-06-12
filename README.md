# workflow-microservicos-ecommerce
Projeto acadêmico para demonstrar workflow de desenvolvimento com microsserviços em um sistema de e-commerce.
# Workflow de Microsserviços - E-commerce

Este projeto foi criado para demonstrar um workflow de desenvolvimento aplicado a uma arquitetura de microsserviços.

## Case escolhido

O case escolhido foi um sistema de e-commerce, com funcionalidades como catálogo de produtos, carrinho de compras, pedidos, pagamento e entrega.

## Arquitetura proposta

A solução foi organizada com base em DDD, separando o sistema em contextos delimitados:

- Catálogo de Produtos
- Carrinho de Compras
- Processamento de Pedidos
- Pagamento
- Entrega
- API Gateway

## Padrões utilizados

- DDD: para organizar os domínios do negócio.
- API Gateway: para centralizar as requisições.
- Saga: para controlar o fluxo de compra, pagamento e entrega.

## Workflow de desenvolvimento

O fluxo utilizado é:

1. Criar issue no GitHub.
2. Criar branch para a funcionalidade.
3. Desenvolver no VS Code.
4. Fazer commit e push.
5. Abrir Pull Request.
6. Executar GitHub Actions.
7. Fazer merge na branch principal.