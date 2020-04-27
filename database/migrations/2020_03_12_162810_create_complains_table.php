<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComplainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complains', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('varName');
            $table->string('varEmail');
            $table->string('varPhone');
            $table->string('fkCateId');
            $table->string('varTitle');
            $table->string('varSlug');
            $table->string('varMessage');
            $table->string('varImage');
            $table->string('chrStatus');
            $table->string('varAdminCmt');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('complains');
    }
}
