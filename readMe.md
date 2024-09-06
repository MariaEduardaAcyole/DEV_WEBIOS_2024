## GIT HUB

1. rede social de devs
2. banco que guarda os projetos

## GIT

1. sistema de versões
2. pornte entre enviar os projetos da maquina para o github
3. versionador

## Funcionamento do Git

~ git init
= inicializa o repositorio local
resp: cria a branch (master)

### branch

###### "copia"

- São nomes de ramificações em um projeto, onde cada desenvolvedor pode criar sua(raiz) a partir do projeto principal e fazer as alterações de forma individual sem alterar o arquivo principal.
  <br>
- De forma simultanea sem preescrever o desenvolvimento do proximo
  <br>
- Assim conseguindo diminuir as ocorrencias de erro como deletar o codigo do colega

#### (Main ou master) vai estar o projeto inicial

```
~ git branch -M NOMEBRANCH

<!-- = modifica o nome da branch (master) para main
resp: o nome da main muda para main -->
```

```
~ git branch NOMEBRANCH

<!-- cria a branch NOMEBRANCH -->
```

```
~ git checkout NOMEBRANCH

<!-- muda para a NOMEBRANCH -->
```

```
~ git remote add origin LINKREPOSITORIO

<!-- = conectou repositorio local com o remoto --> 
<!-- resp: nao da resposta no terminal se tudo certo -->
```

```
~ git config --global user.name "NOMEDEUSUARIO"

<!-- = configura o nome de usuario do github -->
```

```
~ git config --global user.email "EMAIL"

<!-- = configura o email de usuario do github -->
```

```
~ git status

<!-- = verifica os status dos arquivos -->
resp: os arquivos
```

```
~ git add .

<!-- = adicionar o arquivo Staging area -->
```

```
~ git rm --cached ARQUIVO QUE VOCE QUER RETIRAR NO STAGEAREA

<!-- = depois do git add . quero retirar um dos arquivos -->
```

```
~ git add *.js

<!-- = subira todos que sao arquivos javascript -->
```

```
~ git add -A

<!-- = apaga um arquivo na sua maquina mas voce quer que apague no github tambem -->
```

```
~ git commit -m ""

<!-- = adicionar comentarios sobre a sua alteração
resp: [main (root-commit) 2b16159] COMMIT
15 files changed, 1031 insertions(+)
create mode 100644 Apostilas/01.HTML.pdf -->
```

```
~git push -u origin main
```

```
~git pull origin main --allow-unrelated-histories
```

```
~ git touch index.HTML

<!-- = cria o arquivo -->
```

```
~git config --list

<!-- = ve se a configuração foi realizada -->
```

# ATALHOS:

Ctrl+C: interrompe execução
<br>
Botão direito do mouse: copiar e colar no terminal

# EM CASA
```
~ git clone LINKDOREPOSITORIO
```
```
~ git pull
```

1. abre terminal
2. vai até a pasta do seu arquivo
3. pega link do repositorio
4. git clone LINKDOREPOSITORIO

# PADRAO

Git add .
git commit -m ""
git push -u origin main
