<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_detail', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('request_id');
            $table->string('specification_name');
            $table->string('fmt_path');
            $table->string('cloned_from');
            $table->string('library_solution_id');
            $table->string('lookup_table');
            $table->string('release_note');
            $table->string('attachments');
            $table->string('bg_customer_name');
            $table->string('bg_project_name');
            $table->string('bg_task');
            $table->string('ai_synopsis');
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
        Schema::dropIfExists('request_detail');
    }
}
