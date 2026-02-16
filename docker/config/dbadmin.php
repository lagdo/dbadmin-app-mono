<?php

return [
    'common' => [
        'access' => [
            'server' => false,
            'system' => false,
        ],
    ],
    'fallback' => [
    ],
    'users' => [
    ],
    'queries' => [
        'record' => [
            'builder' => [
                'enabled' => true,
            ],
            'editor' => [
                'enabled' => true,
            ],
        ],
        'admin' => [
            'history' => [
                'show' => true,
                'distinct' => true,
                'limit' => 15,
            ],
            'favorite' => [
                'show' => true,
                'limit' => 10,
            ],
            'preferences' => [
                'enabled' => true,
            ],
        ],
        'audit' => [
            'enabled' => true,
            'users' => [
                // The emails of users that are allowed to access the audit page.
                'admin@company.com',
            ],
        ],
        'database' => [
            // Same as the "servers" items, but "name" is the database name.
            'driver' => 'pgsql',
            'host' => "env(LOGGING_DB_HOST)",
            'port' => "env(LOGGING_DB_PORT)",
            'username' => "env(LOGGING_DB_USERNAME)",
            'password' => "env(LOGGING_DB_PASSWORD)",
            'name' => 'auditdb',
        ],
    ],
];
