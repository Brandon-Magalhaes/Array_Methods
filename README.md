# Array Methods

Página que demonstra os métodos de array do JavaScript na prática, sobre dados aleatórios da [randomuser.me](https://randomuser.me).

## O que cada botão faz

| Botão | Método | Resultado |
|---|---|---|
| Adicionar usuário | `push` | busca uma pessoa nova na API e adiciona à lista |
| Dobrar dinheiro | `map` | duplica o valor de todos |
| Mostrar milionários | `filter` | mantém só quem tem mais de 1 milhão |
| Ordenar | `sort` | ordena do maior para o menor patrimônio |
| Calcular total | `reduce` | soma todo o patrimônio da lista |

## Como funciona

O estado fica em um array `data`, e cada ação gera um novo array (sem mutação) seguido de `updateDOM()`, que redesenha a lista e o total.

## Arquivos

`index.html` · `style.css` · `script.js`

## Como rodar

Abra `index.html` no navegador. Precisa de internet para a chamada à randomuser.me.
