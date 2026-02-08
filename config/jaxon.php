<?php

use App\Http\Middleware\DbAdminPackageConfig;
use Lagdo\DbAdmin\Db\Config\UserFileReader;
use Lagdo\DbAdmin\Db\DbAdminPackage;

return [
    'app' => [
        'metadata' => [
            'cache' => [
                'enabled' => true,
                'dir' => storage_path('jaxon/attributes'),
            ],
        ],
        'request' => [
            'route' => 'jaxon.ajax', // The route name
            'middlewares' => [
                'web', // Includes the Illuminate\Session\Middleware\StartSession
                // middleware, which returns a 419 error when the sessions has expired.
                DbAdminPackageConfig::class,
            ],
        ],
        'directories' => [],
        'packages' => [
            DbAdminPackage::class => [
                'toast' => [
                    'lib' => 'notyf',
                ],
                'provider' => function(array $options) {
                    $di = jaxon()->di();
                    $reader = $di->g(UserFileReader::class);
                    $cfgFilePath = $di->g('dbadmin_config_file_path');
                    return $reader->getOptions($cfgFilePath, $options);
                },
                'access' => [
                    'server' => true,
                    'system' => false,
                ],
            ],
        ],
        'ui' => [
            'template' => 'bootstrap5',
        ],
        'assets' => [
            'export' => true,
            'minify' => true,
            'uri' => '/jaxon/',
            'dir' => public_path('/jaxon/'),
        ],
        'dialogs' => [
            'default' => [
                'modal' => 'bootbox',
                'alert' => 'sweetalert',
                'confirm' => 'sweetalert',
            ],
            'lib' => [
                'use' => ['notyf'],
            ],
        ],
    ],
    'lib' => [
        'core' => [
            'language' => 'en',
            'encoding' => 'UTF-8',
            'prefix' => [
                'class' => '',
            ],
            'request' => [
                'csrf_meta' => 'csrf-token',
                'uri' => '/jaxon', // The route url
            ],
            'debug' => [
                'on' => false,
                'verbose' => false,
            ],
            'error' => [
                'handle' => false,
            ],
        ],
        'js' => [
            'lib' => [
                // 'uri' => '',
            ],
        ],
    ],
];
