# Green-API test

Тестовое задание для позиции Фронтенд разработчик React в Green API.
Простой интерфейс чата. Использует Green API для отправки сообщений в Telegram.

## Используемые технологии

- React
- Next.js
- TypeScript
- Tailwind CSS
- Radix UI
- Green API

## Запуск на локальной машине

1. Склонировать репозиторий
2. Установить зависимости:

    ```bash
    npm install
    ```

3. Создать файл `.env` и добавить в него переменную окружения:

    ```env
    NEXT_PUBLIC_API_URI=*значение из дэшборда Green API*
    ```

4. Собрать проект:

    ```bash
    npm run build
    ```

5. Запустить проект:

    ```bash
    npm run start
    ```

6. Открыть в браузере: [http://localhost:3000](http://localhost:3000)

## Лайв версия

Проект хостится на Netlify: [https://greenapi-test-task-av.netlify.app/](https://greenapi-test-task-av.netlify.app/)
