<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'fingerprint_record',
    function (Blueprint $table) {
        $table->increments('id');
        $table->integer('user_id')->unsigned();
        $table->integer("finger")->unsigned();
        $table->string("user_agent", 32);
        $table->string("ip");
        $table->text("user_agent_text");
        $table->string("all");
        $table->timestamps();
        $table->integer("count");
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->index(["user_id", "finger", "ip", "all"]);
    }
);