<?php

namespace app\index\controller;

use think\Controller;
use app\index\model\AppJson;
use think\facade\Request;
use think\Db;

class AppResponse extends Controller
{
    //返回微信小程序请求的json数据
    public function appJson($datatype, $extra = null)
    {
        // $res = Db::name('goods_category')->alias('a')->leftJoin('goods b', 'a.id=b.category_id')->field('a.id cid,a.name,a.icon_src,b.id gid,b.goods_name,0+CAST(b.original_price AS CHAR) original_price,0+CAST(b.real_price AS CHAR) real_price,b.image_src')->where('a.parent_id', 0)->withAttr('icon_src', function ($value) {
        //     return Request::domain() . $value;
        // })->withAttr('image_src', function ($value) {
        //     return Request::domain() . explode('|', $value)[0];
        // })->select();

        return AppJson::getJsonData($datatype, $extra);
    }
}
