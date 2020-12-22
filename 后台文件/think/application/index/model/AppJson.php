<?php

namespace app\index\model;

use think\Model;
use think\db;
use think\facade\Request;

class AppJson extends Model
{
    //微信小程序获取数据
    public static function getJsonData($datatype, $extra)
    {
        try {
            //code...
            $message = [];
            global $domain;
            $domain = Request::domain() . '/think/public';
            switch ($datatype) {
                    //一次返回首页所有数据
                case 'page':
                    //轮播图数据
                    $message['message']['swiper']  = Db::name('goods_category')->field('id,name,image_src')->where('is_swip', 1)->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . $value;
                    })->select();
                    // 导航图片数据
                    $message['message']['navs']  = Db::name('img_icon')->field('id,res_src as image_src')->where('res_type', 'nav')->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . $value;
                    })->select();
                    //火爆热卖数据
                    $message['message']['hot_img'] = $GLOBALS['domain'] .  Db::name('img_icon')->where('res_type', 'hot')->value('res_src');

                    $message['message']['hot_data']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src')->where('is_hot', 1)->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . explode('|', $value)[0];
                    })->limit(0, 6)->select();
                    //推荐数据
                    $message['message']['tj_img'] = $GLOBALS['domain'] .  Db::name('img_icon')->where('res_type', 'tj')->value('res_src');

                    $message['message']['tj_data']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src,description')->where('is_hot', 1)->withAttr('image_src', function ($value) {
                        $temp = array_chunk(explode('|', $value), 3, true)[0];
                        $dm = $GLOBALS['domain'];
                        foreach ($temp as $k => $v) {
                            $temp[$k] = $dm . $v;
                        }
                        return $temp;
                    })->order(['id' => 'desc'])->limit(0, 6)->select();
                    break;

                    //返回首页轮播图数据
                    // case 'swiper':
                    //     $message['message']  = Db::name('goods_category')->field('id,name,image_src')->where('is_swip', 1)->withAttr('image_src', function ($value) {
                    //         return $GLOBALS['domain'] . $value;
                    //     })->select();
                    //     break;

                    //返回首页导航图标数据
                    // case 'navs':
                    //     $message['message']  = Db::name('img_icon')->where('res_type', 'nav')->withAttr('res_src', function ($value) {
                    //         return $GLOBALS['domain'] . $value;
                    //     })->select();
                    //     break;

                    //返回首页热卖数据
                    // case 'hot':
                    //     $message['hot_img'] = $GLOBALS['domain'] .  Db::name('img_icon')->where('res_type', 'hot')->value('res_src');

                    //     $message['message']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src')->where('is_hot', 1)->withAttr('image_src', function ($value) {
                    //         return $GLOBALS['domain'] . explode('|', $value)[0];
                    //     })->limit(0, 6)->select();
                    //     break;

                    //返回首页推荐数据
                    // case 'tj':
                    //     $message['tj_img'] = $GLOBALS['domain'] .  Db::name('img_icon')->where('res_type', 'tj')->value('res_src');

                    //     $message['message']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src,description')->where('is_hot', 1)->withAttr('image_src', function ($value) {
                    //         $temp = array_chunk(explode('|', $value), 3, true)[0];
                    //         $dm = $GLOBALS['domain'];
                    //         foreach ($temp as $k => $v) {
                    //             $temp[$k] = $dm . $v;
                    //         }
                    //         return $temp;
                    //     })->order(['id' => 'desc'])->limit(0, 6)->select();
                    //     break;

                    //返回分类数据及分类对应的商品数据
                case 'cgdatas':
                    $res = Db::name('goods_category')->alias('a')->leftJoin('goods b', 'a.id=b.category_id')->field('a.id cid,a.name,a.icon_src,b.id gid,b.goods_name,0+CAST(b.original_price AS CHAR) original_price,0+CAST(b.real_price AS CHAR) real_price,b.image_src')->where('a.parent_id', 0)->withAttr('icon_src', function ($value) {
                        return $GLOBALS['domain'] . $value;
                    })->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . explode('|', $value)[0];
                    })->order('category_id', 'asc')->select();
                    $cates = array();
                    $i = 0;
                    foreach ($res as $key => $val) {

                        if ($key == 0) {
                            $cates[$i]['cid'] = $val['cid'];
                            $cates[$i]['cname'] = $val['name'];
                            $cates[$i]['icon_src'] = $val['icon_src'];
                            $cates[$i]['gdatas'][] = array_diff_key($val, ['cid' => "xy", 'name' => "xy", 'icon_src' => "xy"]);
                        } else {
                            if ($cates[$i]['cid'] == $val['cid']) {
                                $temp = array_diff_key($val, ['cid' => "xy", 'name' => "xy", 'icon_src' => "xy"]);
                                $cates[$i]['gdatas'][] = $temp;
                            } else {
                                $i++;
                                $cates[$i]['cid'] = $val['cid'];
                                $cates[$i]['cname'] = $val['name'];
                                $cates[$i]['icon_src'] = $val['icon_src'];
                                $cates[$i]['gdatas'][] = array_diff_key($val, ['cid' => "xy", 'name' => "xy", 'icon_src' => "xy"]);
                            }
                        }
                    }

                    $message['message'] = $cates;
                    break;

                    //返回搜索匹配项 id 和 商品名称 
                case 'matching':
                    $message['message']  = Db::name('goods')->field('id,goods_name')->where('goods_name', 'like', "%{$extra}%")->order(['id' => 'desc'])->select();
                    break;

                    //返回搜索的结果 
                case 'searchResult':
                    $message['message']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src,description')->where('goods_name', 'like', "%{$extra}%")->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . explode('|', $value)[0];
                    })->order(['id' => 'desc'])->limit(0, 6)->select();
                    break;

                    //返回单个商品信息 
                case 'goodsInfo':
                    $message['message']  = Db::name('goods')->field('id gid,goods_name,0+CAST(original_price AS CHAR) original_price,0+CAST(real_price AS CHAR) real_price,image_src,description,intro')->where('id', $extra)->withAttr('image_src', function ($value) {
                        $temp = explode('|', $value);
                        foreach ($temp as $k => $v) {
                            $temp[$k] = $GLOBALS['domain'] . $v;
                        }
                        return $temp;
                    })->find();
                    break;

                case 'getImgs':
                    $message['message']  = Db::name('goods')->field('id gid,image_src')->withAttr('image_src', function ($value) {
                        return $GLOBALS['domain'] . explode('|', $value)[0];
                    })->limit($extra, 2)->select();

                    $message['total']  = Db::name('goods')->count('*');
                    break;
            }

            $message['mate'] = array('str' => '获取成功', 'status' => 200);
            return json($message);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
