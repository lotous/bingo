<p align="center"><a href="https://lotous.com.co" target="_blank"><img src="http://lotous.com.co/assets/img/logo/lotous.svg" width="150" /></a></p>

## Bingo Game | Mix - Laravel - React - TypeScript - Tailwind - ESLint - JWT - SPA

Web app "Bingo Game" made with Laravel and React.


## Features
    Laravel Framework, 
    Laravel Mix,
    Laravel Debugbar,
    Webpack,
    Typescript,
    React, 
    React Router, 
    React Redux,
    Hot Reload,
    JWT Auth,
    PostCSS,
    Tailwind CSS,
    ESlint

## Installation
###### 1. Clone repository and install dependencies.
        
    composer install && npm install

###### 2. Copy .env.example to .env, configure and generate app key

    php artisan key:generate

###### 3. Run database migration

    php artisan migrate

###### 4. Generate JWT secret key.

    php artisan jwt:secret

###### 5. Build assets.  

    npm run dev

###### 5. Start laravel server

    php artisan serve

## License

Bingo Game is open source create for [Lotous Company](https://lotous.com.co), software licensed under [MIT license](https://opensource.org/licenses/MIT).
