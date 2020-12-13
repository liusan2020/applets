<?php

namespace app\index\controller;

use think\facade\Env;
use think\Db;
use app\index\model\GoodsCategory;
use think\Controller;
use think\facade\Request;

class Index extends Controller
{
    public function index()
    {
        return 'aaaaaaaaaaa';
        //return Request::domain() .  Db::name('img_icon')->where('res_type', 'hot')->value('res_src');

        // return $this->fetch('index');
    }

    public function updateData()
    {
        // $data = [
        //     ['id' => 1, 'icon_src' => '/static/images/fruit1.png'],
        //     ['id' => 2, 'icon_src' => '/static/images/fruit2.png'],
        //     ['id' => 3, 'icon_src' => '/static/images/fruit3.png'],
        //     ['id' => 4, 'icon_src' => '/static/images/fruit4.png'],
        //     ['id' => 5, 'icon_src' => '/static/images/fruit5.png']
        // ];


        // $ctgy = new GoodsCategory();
        // $ctgy->saveAll($data);
    }

    public function insertDate()
    {
        // $data = [
        //     ['nav_name' => '分类', 'nav_src' => '/static/images/nav1.png', 'sort' => 1],
        //     ['nav_name' => '折扣区', 'nav_src' => '/static/images/nav2.png', 'sort' => 2],
        //     ['nav_name' => '超值团购', 'nav_src' => '/static/images/nav3.png', 'sort' => 3],
        //     ['nav_name' => '果干区', 'nav_src' => '/static/images/nav4.png', 'sort' => 4],
        // ];

        // $data = [
        //     ['name' => '红苹果', 'parent_id' => 1],
        //     ['name' => '青苹果', 'parent_id' => 1],
        //     ['name' => '花牛苹果', 'parent_id' => 1],
        //     ['name' => '泰国金枕榴莲', 'parent_id' => 2],
        //     ['name' => '山猫王榴莲', 'parent_id' => 2],
        //     ['name' => '黑葡萄', 'parent_id' => 3],
        //     ['name' => '白葡萄', 'parent_id' => 3],
        //     ['name' => '红葡萄', 'parent_id' => 3],
        //     ['name' => '金橘子', 'parent_id' => 4],
        //     ['name' => '橙子', 'parent_id' => 4],
        //     ['name' => '青橘子', 'parent_id' => 4],
        //     ['name' => '麒麟西瓜', 'parent_id' => 5],
        //     ['name' => '黑美人西瓜', 'parent_id' => 5]

        // ];

        $data = [
            ['goods_name' => '嘎拉苹果', 'original_price' => 7.7, 'real_price' => 5.5, 'description' => '平均单果重260g左右；可溶性固形物含量12.5—14%；可滴定酸0.2-0.36%；去皮果肉硬度6.5kg/c㎡。“花牛”苹果果实圆锥形，全面鲜红或浓红，色泽艳丽，色相片红或条红色，果实着色度90—100%；果个整齐，果面光滑、亮洁；果形端正高桩、五棱突出明显，果形指数0.9—1.0；果肉黄白色，肉质细，致密，松脆，汁液多，风味独特，香气浓郁，口感好，品质上。', 'image_src' => '/static/images/goods/gl1.jpg|/static/images/goods/gl2.jpg|/static/images/goods/gl3.jpg', 'sort' => '1', 'category_id' => '1', 'kind_id' => '7'],

            ['goods_name' => '红玉苹果', 'original_price' => 4.9, 'real_price' => 3.9, 'description' => '果型为扁形和桩型。果面光滑、蜡质多、果粉少、干净无果锈。果皮底色黄绿，果面条红或片红，果肉黄白色，肉质细密，硬度大，果汁多，味香，含糖高，酸甜适度，耐储运。10月中旬成熟，可储存至次年6---7月。', 'image_src' => '/static/images/goods/hy1.jpg|/static/images/goods/hy2.jpg|/static/images/goods/hy3.jpg', 'sort' => '3', 'category_id' => '1', 'kind_id' => '7'],

            ['goods_name' => '金光苹果', 'original_price' => 9.6, 'real_price' => 7.3, 'description' => '含有大量的维生素、矿物质和丰富的膳食纤维，特别是果胶等成分，除了具有一般苹果之补心益气、益胃健脾等功效外，其止泻效果尤佳，慢性腹泻、神经性结肠炎、小儿腹泻患者可经常食用。青苹果养肝解毒，对抗抑郁症，适合年轻人食用，还可促进牙齿和骨骼生长，防止牙床出血。', 'image_src' => '/static/images/goods/jg1.jpg|/static/images/goods/jg2.jpg|/static/images/goods/jg3.jpg', 'sort' => '2', 'category_id' => '1', 'kind_id' => '9'],

            ['goods_name' => '乔纳金苹果', 'original_price' => 8.8, 'real_price' => 6.6, 'description' => '平均单果重260g左右；可溶性固形物含量12.5—14%；可滴定酸0.2-0.36%；去皮果肉硬度6.5kg/c㎡。“花牛”苹果果实圆锥形，全面鲜红或浓红，色泽艳丽，色相片红或条红色，果实着色度90—100%；果个整齐，果面光滑、亮洁；果形端正高桩、五棱突出明显，果形指数0.9—1.0；果肉黄白色，肉质细，致密，松脆，汁液多，风味独特，香气浓郁，口感好，品质上。', 'image_src' => '/static/images/goods/qnj1.jpg|/static/images/goods/qnj2.jpg|/static/images/goods/qnj3.jpg', 'sort' => '1', 'category_id' => '1', 'kind_id' => '9'],

            ['goods_name' => '桑萨苹果', 'original_price' => 7, 'real_price' => 5, 'description' => '果型为扁形和桩型。果面光滑、蜡质多、果粉少、干净无果锈。果皮底色黄绿，果面条红或片红，果肉黄白色，肉质细密，硬度大，果汁多，味香，含糖高，酸甜适度，耐储运。10月中旬成熟，可储存至次年6---7月。', 'image_src' => '/static/images/goods/ss1.jpg|/static/images/goods/ss2.jpg|/static/images/goods/ss3.jpg', 'sort' => '3', 'category_id' => '1', 'kind_id' => '7'],


        ];

        Db::name('goods')->insertAll($data);
    }

    public function hello($name = 'ThinkPHP5')
    {
        //return CONF_PATH;
    }
}
