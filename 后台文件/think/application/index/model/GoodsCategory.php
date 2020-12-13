<?php

namespace app\index\model;

use think\Model;

class GoodsCategory extends Model
{
    //
    public function updateInfo($data)
    {
        $this->saveAll($data);
    }
}
