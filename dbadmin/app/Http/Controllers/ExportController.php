<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Lagdo\DbAdmin\Db\DbAdminPackage;

use function is_callable;
use function response;

class ExportController
{
    /**
     * @param DbAdminPackage $package
     * @param string $filename
     *
     * @return Response
     */
    public function __invoke(DbAdminPackage $package, string $filename): Response
    {
        $reader = $package->getOption('export.reader');
        $content = !is_callable($reader) ? "No export reader set." : $reader($filename);

        return response($content)->header('Content-Type', 'text/plain');
    }
}
