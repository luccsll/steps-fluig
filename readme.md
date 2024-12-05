![logo](https://github.com/luccsll/Steps-Fluig/blob/main/capa.png)

# Script para Criação de Steps de Aprovação no Fluig

Este README documenta o funcionamento do script utilizado para criar e gerenciar uma barra de progresso interativa que representa as etapas de um processo de aprovação no Fluig.

---

## Descrição Geral

O script permite criar uma barra de progresso dinâmica baseada em uma lista de etapas definidas em um array de objetos. Cada etapa possui:
- **Área responsável:** Exibida como o texto principal de cada etapa.
- **Descrição da etapa:** Exibida em um tooltip ao passar o cursor sobre o ícone.

---

## Estrutura do Código

### 1. Função setStep

Cria os elementos visuais que compõem os steps e os adiciona ao contêiner HTML.

**Parâmetros:**

- stepContainer: O contêiner onde os steps serão adicionados (ex.: uma lista <ul>).
- stepsList: Um array de objetos que define as etapas, no seguinte formato:
  - area: Nome da área responsável pela etapa (exibido abaixo do ícone no passo).
  - title: Texto descritivo da etapa (exibido como tooltip no passo).

**Funcionamento:**

1. A função itera sobre o array stepsList.
2. Para cada objeto no array, cria um item <li> com as classes e atributos necessários.
3. Adiciona o ícone, o texto da área e o tooltip com a descrição da etapa ao elemento.
4. Incrementa um contador para atribuir um data-id único a cada step.
5. Adiciona o elemento ao stepContainer.

**Exemplo de Uso:**

``` javascript
var steps = new Array(
    { 'area': 'Solicitante', 'title': 'O solicitante inicia o processo de movimentação pessoal submetendo uma solicitação.' },
    { 'area': 'Líder da área', 'title': 'A área de destino avalia e aprova ou rejeita a solicitação de movimentação. Se aprovado, o processo continua; se não, volta para ajustes.' },
    { 'area': 'P&O', 'title': 'A equipe de Pessoas & Organização (P&O) revisa a solicitação aprovada pela área de destino. A aprovação aqui permite o avanço do processo.' },
    { 'area': 'Gerente da área', 'title': 'O gerente da área analisa e aprova a solicitação, garantindo que esteja de acordo com as necessidades e políticas da área.' },
    { 'area': 'Finalizado', 'title': 'Processo de movimentação de pessoal finalizado.' }
);

setStep($("#step-container"), steps);

![logo](https://github.com/luccsll/Steps-Fluig/blob/main/objeto.png)

```

# Como Atribuir um Step Ativo

Para definir um step como ativo, utilize a função `setStepActive` presente no script. A função é responsável por destacar visualmente a etapa ativa na barra de progresso, removendo a classe `active` de todas as etapas e atribuindo-a apenas à etapa correspondente ao `data-id` informado.

---

## Função `setStepActive`

### Parâmetros

- **`stepContainer`**: O contêiner HTML onde os steps foram adicionados (ex.: uma lista `<ul>`).
- **`id`**: O identificador (`data-id`) da etapa que deve ser ativada.

### Funcionamento

1. A função itera sobre todos os elementos filhos do `stepContainer`.
2. Remove a classe `active` de todos os steps.
3. Adiciona a classe `active` ao step cujo `data-id` coincide com o valor do parâmetro `id`.

---

## Exemplo de Uso


1. Certifique-se de que o contêiner dos steps foi preenchido utilizando a função `setStep`.
2. Chame a função `setStepActive`, passando o contêiner e o `id` da etapa que deseja ativar.

### Exemplo Prático:
```javascript
// Supondo que os steps já foram adicionados ao contêiner com a função setStep
setStep($("#step-container"), steps);

// Ativar o terceiro step (ex.: "Líder da área")
setStepActive($("#step-container"), 3);
```
