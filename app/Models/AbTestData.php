<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AbTestData extends Model {

    // Verwendeter Primärschlüssel
    protected $primaryKey = 'id';

    // Name der Tabelle
    protected $table = 'ab_testdata';

    // Name der Spalte
    protected $testName = 'ab_testname';
}
