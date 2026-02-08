<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Lagdo\DbAdmin\Db\DbAdminPackage;
use Symfony\Component\HttpFoundation\Response;
use Closure;

use function config;

class DbAdminPackageConfig
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Copy the audit options into the DbAdminPackage package options.
        $options = config('jaxon.app.packages')[DbAdminPackage::class];
        $auditOptions = [
            'options' => config('dbadmin.audit.options'),
            'database' => config('dbadmin.audit.database'),
        ];
        config([
            'jaxon.app.packages' => [
                DbAdminPackage::class => [
                    ...$options,
                    'audit' => $auditOptions,
                ],
            ],
            'jaxon.lib.core.request.uri' => '/jaxon',
            'jaxon.app.assets.file' => 'admin-0.8.0',
        ]);

        return $next($request);
    }
}
