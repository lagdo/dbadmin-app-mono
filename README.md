# dbadmin-backpack

Monorepo for the Backpack addon development

### Create the monorepo

Add the Backpack repo

```bash
git subtree add --prefix dbadmin git@github.com:lagdo/dbadmin-app.git main --squash
```

Add the Backpack addon repo

```bash
git subtree add --prefix backpack-addon git@github.com:lagdo/dbadmin-backpack-addon.git main --squash
```

### Create the package

```bash
cd backpack
composer require jeroen-g/laravel-packager --dev
php artisan packager:new --i --skeleton="https://github.com/Laravel-Backpack/addon-skeleton/archive/master.zip"
```

Copy the generated package files in the package project dir, and ajust the namespaces.

### Setup the monorepo

```bash
cd ..
composer init
composer require --dev contao/monorepo-tools
```

### Install the Composer packages

```bash
./vendor/bin/monorepo-tools composer-json
composer update
```
