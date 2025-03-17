## GIT HUB

1. rede social de devs
2. banco que guarda os projetos

## GIT

1. sistema de versões
2. ponte entre enviar os projetos da maquina para o github
3. versionador

## Funcionamento do Git

#### Criar novo repositório local
resp: cria a branch (master)
```
~ git init
```

### branch

###### "copia"

- São nomes de ramificações em um projeto, onde cada desenvolvedor pode criar sua(raiz) a partir do projeto principal e fazer as alterações de forma individual sem alterar o arquivo principal.
  <br>
- De forma simultanea sem preescrever o desenvolvimento do proximo
  <br>
- Assim conseguindo diminuir as ocorrencias de erro como deletar o codigo do colega


#### (Main ou master) vai estar o projeto inicial

#### modifica o nome da branch (master) para main
resp: o nome da main muda para main
```
~ git branch -M NOMEBRANCH
```

#### cria a branch NOMEBRANCH
```
~ git branch NOMEBRANCH
```

### - Utilizar mais de uma BRANCH

#### muda para a NOMEBRANCH
```
~ git checkout NOMEBRANCH
```

#### adiciona as mudanças a essa branch
- quando é feito um git merge automaticamente é feito um commit)
```
~ git merge branchAtualizar
```

```
~ git push origin main
```

#### conectou repositorio local com o remoto 
resp: nao da resposta no terminal se tudo certo 
```
~ git remote add origin LINKREPOSITORIO
```

#### configura o nome de usuario do github
```
~ git config --global user.name "NOMEDEUSUARIO"
```

#### configura o email de usuario do github
```
~ git config --global user.email "EMAIL"
```

#### verifica os status dos arquivos
resp: os arquivos
```
~ git status
```

#### adicionar o arquivo Staging area
```
~ git add .
```

#### depois do git add . quero retirar um dos arquivos
```
~ git rm --cached ARQUIVO QUE VOCE QUER RETIRAR NO STAGEAREA
```

#### subira todos que sao arquivos javascript
```
~ git add *.js
```

#### apaga um arquivo na sua maquina mas voce quer que apague no github tambem
```
~ git add -A
```

#### adicionar comentarios sobre a sua alteração
```
~ git commit -m ""
```

```
~git push -u origin main
```

```
~git pull origin main --allow-unrelated-histories
```

#### cria o arquivo
```
~ git touch index.HTML
```

#### ve se a configuração foi realizada
```
~git config --list
```

#### voltar versão 
```
~ git reset --hard 76751d3d617cffcb81e9bffa6e9b1a45aaf14db9
```

# ATALHOS:

Ctrl+C: interrompe execução
<br>
Botão direito do mouse: copiar e colar no terminal

# EM CASA
```
 git clone LINKDOREPOSITORIO
```

#### puxa do repositorio para a maquina 

```
 git pull
```

1. abre terminal
2. vai até a pasta do seu arquivo
3. pega link do repositorio
4. git clone LINKDOREPOSITORIO

# PADRAO
```
git add .
```

```
git commit -m ""
```
```

git push -u origin main
```

3
