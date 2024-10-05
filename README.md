# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
Na spustenie su potrebne nainstalovat:
1. Node.js:
   - Angular vyžaduje Node.js na spustenie.
   - Odporúča sa nainštalovať LTS (Long Term Support) verziu.
   - Môžete ju stiahnuť z oficiálnej stránky: https://nodejs.org/

2. npm (Node Package Manager):
   - npm sa zvyčajne inštaluje automaticky s Node.js.
   - Slúži na správu balíčkov a závislostí projektu.

3. Angular CLI (Command Line Interface):
   - Nástroj na vytváranie, vývoj a správu Angular projektov.
   - Inštaluje sa globálne pomocou príkazu:
     ```
     npm install -g @angular/cli
     ```

4. Git (voliteľné, ale odporúčané):
   - Potrebný na klonovanie repozitára z GitHubu.
   - Stiahnuť môžete z: https://git-scm.com/

5. Textový editor alebo IDE:
   - Odporúčané sú napríklad Visual Studio Code, WebStorm, alebo Sublime Text.
   - https://code.visualstudio.com/download

6. Webový prehliadač:
   - Najlepšie moderný prehliadač ako Chrome, Firefox, alebo Edge.

Po inštalácii týchto nástrojov by ste mali byť schopní spustiť Angular projekt nasledovne:

1. Klonujte repozitár do Visual Studio Code:
   ```
   - Otvorte paletu príkazov (Ctrl+Shift+P alebo Cmd+Shift+P na Mac).
   - Zadajte "Git: Clone" a vyberte túto možnosť.
   - Vložte URL repozitára: https://github.com/Rostja/website.git
   - Vyberte miesto, kam chcete projekt uložiť na vašom počítači.

2. Otvorte terminál v VS Code:
   - Použite klávesovú skratku Ctrl+` (backtick) alebo choďte do menu View > Terminal.

3. Nainštalujte závislosti:
   - V termináli zadajte príkaz:
     ```
      npm install -g @angular/cli
      npm install
     ```

Zistite dostupné vetvy:                    git branch -a
Prepnúť sa medzi vetvami môžete príkazom:  git checkout názov_vetvy

4. Spustite vývojový server:
   - Po dokončení inštalácie závislostí zadajte:
     ```
     npx ng serve 
     ```

5. Otvorte prehliadač:
   - Prejdite na adresu http://localhost:4200/
   ```
6. Preto aby bola stranka plne funkcna je potrebne spustit zaroven aj dalsi server beziaci na http://localhost:3000/
7. Je porebne otvorit Command Prompt a do neho zadat:
8. cd (plnu cestu k suboru k databaze db.json5...v mojom pripade cd C:\Users\rasto\Desktop\website\src)
9. npm install -g json-server
10. npx json-server --version
11. npx json-server db.json5 --watch
12. Po tychto krokoch sa spusti databaza beziaca na localhost:3000, ktora uklada subscriberov, a zaroven web stranka byt funkcna.
