<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Lagdo\DbAdmin\Db\Config\InfisicalConfigReader;

use function Jaxon\jaxon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Customize the provided Infisical config reader.
        $this->app->singleton(InfisicalConfigReader::class, function() {
            $reader = jaxon()->di()->g(InfisicalConfigReader::class);
            $secretKeyBuilder = fn(string $prefix, string $option) =>
                "users.{$prefix}.{$option}";
            $reader->setSecretKeyBuilder($secretKeyBuilder);
            return $reader;
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
