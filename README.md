[![Actions Status](https://github.com/http87/backend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/http87/backend-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/05b0d8e1e7077aeb1ad9/maintainability)](https://codeclimate.com/github/http87/backend-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/05b0d8e1e7077aeb1ad9/test_coverage)](https://codeclimate.com/github/http87/backend-project-46/test_coverage)

# ВЫЧИСЛИТЕЛЬ ОТЛИЧИЙ

**Это программа, определяющая разницу между двумя структурами данных.**

### Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Примеры использования

### Плоское сравнение JSON файлов
[![asciicast](https://asciinema.org/a/VE7ZYlZs3LLJ5AAiaTxKgURCh.svg)](https://asciinema.org/a/VE7ZYlZs3LLJ5AAiaTxKgURCh)

### Плоское сравнение YAML (YML) файлов
[![asciicast](https://asciinema.org/a/tgAUQHPVyi9vtnShSvX69X8sJ.svg)](https://asciinema.org/a/tgAUQHPVyi9vtnShSvX69X8sJ)

### Сравнение JSON, YAML (YML) файлов - stylish
[![asciicast](https://asciinema.org/a/SS5vqAnXofRyYInSKhABlJevr.svg)](https://asciinema.org/a/SS5vqAnXofRyYInSKhABlJevr)

### Сравнение JSON, YAML (YML) файлов - plain
[![asciicast](https://asciinema.org/a/kOya2gNPdKTF9NkLYLWNDqJaZ.svg)](https://asciinema.org/a/kOya2gNPdKTF9NkLYLWNDqJaZ)

### Сравнение JSON, YAML (YML) файлов - json
[![asciicast](https://asciinema.org/a/ul24hGCkDvmOts5hSee76UhV1.svg)](https://asciinema.org/a/ul24hGCkDvmOts5hSee76UhV1)


### У С Т А Н О В К А

1. Установите Node.js последней версии.

2. Склонируйте репозиторий проекта локально используя команду
```sh
git clone git@github.com:http87/backend-project-46.git
```
3. Инициализируйте npm-пакет внутри корневой директории проекта
```sh
  npm init
  ```

4. Установите [npm make](https://www.npmjs.com/package/make)

5. Для работы библиотеки выполните следующие действия: 
```sh
make install

make publish 

npm link
```
6. В терминале введите: **gendiff filepath1.yml filepath2.yml**

Где **filepath1** и **filepath2** - пути до файлов, как абсолютные так и относительные.

Доступные расширения: **yaml (yml), json**.

7. Options:
```
    -V, --version        output the version number
    -f, --format [type]  output format
    -h, --help           output usage information
```