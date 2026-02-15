<?php

namespace DbAdmin\App\Providers;

use Illuminate\Support\ServiceProvider;
use Lagdo\DbAdmin\Db\Config\AuthInterface;
use Lagdo\DbAdmin\Db\Config\InfisicalConfigReader;

use function Jaxon\jaxon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @param string $prefix
     * @param string $option
     * @param AuthInterface $auth
     *
     * @return string
     */
    private function getSecretKey(string $prefix, string $option, AuthInterface $auth): string
    {
        return "users.{$prefix}.{$option}";
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Customize the provided Infisical config reader.
        $this->app->singleton(InfisicalConfigReader::class, function() {
            $reader = jaxon()->di()->g(InfisicalConfigReader::class);
            return $reader->setSecretKeyBuilder($this->getSecretKey(...));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // 
    }
}
