<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class Create1Test extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_create()
    {
        $response = $this->get('/admin/pasien/create');

        $response->assertStatus(200);
    }
    protected function CreateTest(): void{

        parent::CreateTest();
        $this->user = $this->CreatTest();
    }
}
