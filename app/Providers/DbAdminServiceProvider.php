<?php

namespace App\Providers;

use Dotenv\Dotenv;
use Illuminate\Support\ServiceProvider;
use Lagdo\DbAdmin\Db\Config\AuthInterface;
use Lagdo\DbAdmin\Db\DbAdminPackage;

use function auth;
use function dirname;
use function config_path;
use function is_file;
use function jaxon;

class DbAdminServiceProvider extends ServiceProvider
{
    /**
     * Get the DbAdmin config file path
     *
     * @return string
     */
    private function getDbAdminConfigFile(): string
    {
        // Get the path of first available config file.
        foreach (['json', 'yaml', 'yml', 'php'] as $ext) {
            $path = config_path("dbadmin.$ext");
            if (is_file($path)) {
                return $path;
            }
        }
        return '';
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        // The authentication and config file need to be set in the Jaxon DI.
        jaxon()->di()->set(AuthInterface::class,
            fn() => new class implements AuthInterface {
                public function user(): string
                {
                    return auth()->user()?->email ?? '';
                }
                public function role(): string
                {
                    return auth()->user()?->role?->name ?? '';
                }
            });
        jaxon()->di()->set('dbadmin_config_file_path', $this->getDbAdminConfigFile(...));

        // Make the DbADmin package available in the Laravel container.
        $this->app->singleton(DbAdminPackage::class,
            fn() => jaxon()->package(DbAdminPackage::class));
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Load the custom env file
        $path = dirname(__DIR__, 2);
        $dotenv = Dotenv::createImmutable($path, '.env.dbadmin');
        $dotenv->safeLoad();
    }
}
