## Codecept Appium Page Object

Repositório dedicado aos testes utilizando o framework de automação Codecept js para testes mobile com Appium utilizando o padrão page objects

## Instalar nvm:
Necessário para poder mudar a versão do Node para a usada no projeto
> https://github.com/nvm-sh/nvm/blob/master/README.md

## Instalar Node.js:
Ao instalar, provavelmente vários pacotes adicionais serão instalados, como chocolatery, etc.
> https://nodejs.org/en/download

## Modificar versão padrão do node para a usada no projeto:
> nvm use

## Para instalar o Appium
> npm i -g appium

## Para verificar as dependências do appium para automação mobile
> npm i -g appium-doctor

## Instalar driver uiautomator2 para testes Android
> appium driver install uiautomator2

## Para verificar os drivers instalados do Appium
> appium driver list

## Para iniciar o gerenciamento de pacotes com npm no projeto
> npm init -y

## Demais instalações:
> npm install codeceptjs webdriverio@8.6.3 --save

## Inicie o Codeceptjs:
> npx codeceptjs init

## Criar arquivos de teste:
> npx codeceptjs gt

## Criar arquivo page object:
> npx codeceptjs gpo

## Extras:
- https://github.com/codeceptjs/CodeceptJS/wiki/Migration-to-Appium-v2---CodeceptJS
- https://codecept.io/quickstart/#init
- https://codecept.io/basics/#architecture
- https://codecept.io/wiki/Migration-to-Appium-v2---CodeceptJS.html


### ---- Pré-Requisitos Testes Mobile (APP) ----
- Instalação e Configuração: https://www.youtube.com/watch?v=W5hcHbzTjOc
- Java jdk8, Android Studio, Java SDK, Variáveis de ambiente do sistema, webdriver.io (dependência)
- importante: atualizar a variável de ambiente de %ANDROID_HOME%/build-tools para %ANDROID_HOME%\platform-tools
- iniciar o device pelo AVD Manager do Android Studio ou ter um celular concectado via cabo usb e permitir a depuração ubs.
- comandos para iniciar a ligação com o appium: appium, adb kill-server, adb start-server, adb-devices
- videos adicionais de ajuda: https://www.youtube.com/watch?v=QYT0_qgkiCw / https://www.youtube.com/watch?v=0a5NAJjUBbA

### ---- Comandos para rodar testes no APP: ----

<br/>

*Observação: Para executar os testes com appium é preciso antes <u>inicializar o device pelo AVD Manager</u> no Android Studio.*

<br/>

**Iniciar o appium**
> npm run appium

**Verificar dispositivos disponíveis no ADB**
> adb devices

**Para verificar os emuladores instalados**
> emulator -list-avds

**Executar teste regressivo**
> npm run test
