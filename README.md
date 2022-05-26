# Sistema de cadastro escolar

**Ficha escolar** para **cadastrar** **alunos e médias.**

O sistema de notas é dividido em 4 bimestres

## Software

### Cadastrar ficha:

- [RF001] deve ser possível um Diretor cadastrar alunos na ficha com (nome, endereço, telefone_contato, cpf)
- [RN001] O diretor deve informar qual o nome do aluno que está sendo matriculado
- [RN002] O diretor deve informar qual o curso que o aluno está matriculado
- [RN002] O diretor deve informar qual a idade do aluno que está matriculado
- [RN002] O diretor deve informar qual é o documento do aluno que está matriculado
- [RN003] O diretor não pode cadastrar na ficha o mesmo aluno 2x;
- [RN004] O diretor não pode cadastrar um aluno na ficha com os dados inválidos.

### pesquisar ficha:

- [RF005] Deve ser possível um professor pesquisar a ficha de um aluno (por cpf);
- [RN005] O software não deve permitir pesquisar a ficha um aluno que não existe;
- [RN006] O software não deve permitir editar a media de uma ficha de um aluno para um valor maior que 10 ou menor que 0.

### remover ficha:

- [RF006] Deve ser possível um professor remover a ficha de um aluno (por cpf);
- [RN007] O software não deve permitir remover a ficha um aluno que não existe;
- [RN008] O software não deve permitir remover a media de uma ficha de um aluno para um valor maior que 10 ou menor que 0.

### listar ficha:

- [RF001] Deve ser possível um professor listar as fichas do sistema;

### cadastar média do aluno na ficha:

- [RF001] Deve ser possível um professor cadastrar a media dos alunos na ficha.
- [RN001] O professor deve cadastrar uma media para um aluno existente.
- [RN002] O professor só pode cadastrar no máximo 4 medias para um aluno
- [RN002] O professor só pode cadastrar uma média de no máximo 10 e no minimo 0 para um aluno

### editar média do aluno na ficha:

- [RF001] Deve ser possível um professor editar uma média de uma ficha de um aluno;
- [RN001] O software não deve permitir editar uma média de uma ficha de um aluno que não existe;
- [RN002] O software não deve permitir editar uma média de uma ficha de um aluno para um valor maior que 10 ou menor que 0.

### Remover média do aluno na ficha :

- [RF001] Deve ser possível um professor remover a média de uma ficha de um aluno;
- [RN001] O professor não pode remover uma média de uma ficha de um aluno que não existe.

### Calcular média final do aluno na ficha :

- [RF001] Deve ser possível um professor calcular a média final de um aluno;
- [RN001] O professor não pode calcular a média final de um aluno que não existe ou que não tenha sido lançado as 4 notas.

**INTERFACE**

Ficha Padrão → {

nome: string;

email: string;

endereço: string;

telefone de contato: string;

cpf: string;

posição: aluno | professor | diretor

}

**DOMAIN**

Ficha → {

nome_aluno,

idade_aluno,

curso_aluno,

media_aluno,

documento_aluno,

status: incompleto | reprovado | aprovado,

}
