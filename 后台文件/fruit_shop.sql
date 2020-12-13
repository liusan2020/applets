/*
Navicat MySQL Data Transfer

Source Server         : 微信数据
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : fruit_shop

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2020-12-13 15:39:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(50) NOT NULL COMMENT '商品名称',
  `original_price` decimal(9,2) DEFAULT NULL COMMENT '商品原价',
  `real_price` decimal(9,2) DEFAULT NULL COMMENT '商品真实价格',
  `intro` varchar(255) DEFAULT NULL COMMENT '商品简介',
  `description` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `image_src` varchar(255) DEFAULT NULL COMMENT '商品图片路径',
  `sort` tinyint(3) unsigned DEFAULT NULL COMMENT '商品排序',
  `is_hot` tinyint(1) unsigned DEFAULT '0' COMMENT '是否为热卖',
  `kind_id` int(11) NOT NULL COMMENT '商品所属种类id',
  `category_id` int(11) NOT NULL COMMENT '商品所属类别id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '花牛苹果', '9.60', '7.20', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '平均单果重260g左右；可溶性固形物含量12.5—14%；可滴定酸0.2-0.36%；去皮果肉硬度6.5kg/c㎡。“花牛”苹果果实圆锥形，全面鲜红或浓红，色泽艳丽，色相片红或条红色，果实着色度90—100%；果个整齐，果面光滑、亮洁；果形端正高桩、五棱突出明显，果形指数0.9—1.0；果肉黄白色，肉质细，致密，松脆，汁液多，风味独特，香气浓郁，口感好，品质上。', '/static/images/goods/pg1.jpg|/static/images/goods/pg2.jpg|/static/images/goods/pg3.jpg|/static/images/goods/pg4.jpg', '1', '1', '7', '1');
INSERT INTO `goods` VALUES ('2', '红富士', '6.50', '4.50', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '果型为扁形和桩型。果面光滑、蜡质多、果粉少、干净无果锈。果皮底色黄绿，果面条红或片红，果肉黄白色，肉质细密，硬度大，果汁多，味香，含糖高，酸甜适度，耐储运。10月中旬成熟，可储存至次年6---7月。', '/static/images/goods/pg9.jpg|/static/images/goods/pg10.jpg|/static/images/goods/pg11.jpg', '2', '1', '7', '1');
INSERT INTO `goods` VALUES ('3', '青苹果', '5.70', '3.90', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '青苹果含有大量的维生素、矿物质和丰富的膳食纤维，特别是果胶等成分，除了具有一般苹果之补心益气、益胃健脾等功效外，其止泻效果尤佳，慢性腹泻、神经性结肠炎、小儿腹泻患者可经常食用。青苹果养肝解毒，对抗抑郁症，适合年轻人食用，还可促进牙齿和骨骼生长，防止牙床出血。', '/static/images/goods/pg5.jpg|/static/images/goods/pg6.jpg|/static/images/goods/pg7.jpg|/static/images/goods/pg8.jpg', '3', '1', '8', '1');
INSERT INTO `goods` VALUES ('4', '金枕榴莲', '15.60', '11.20', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '榴莲叶片长圆，顶端较尖，聚伞花序，花色淡黄，果实足球大小，果皮坚实，密生三角形刺，果肉是由假种皮的肉包组成，肉色淡黄，粘性多汁，头一次食用榴莲时，那种异常的气味可使许多人“望而却步”，但是，也有许多人自从吃了第一口以后，感到酥软味甜，吃起来有冰激凌的口感，就会被榴莲那种特殊的回味和质感所吸引。榴莲果肉含有多种维生素，营养丰富，香味独特，具有“水果之王”的美称。', '/static/images/goods/liu1.jpg|/static/images/goods/liu2.jpg|/static/images/goods/liu3.jpg|/static/images/goods/liu4.jpg', '1', '1', '10', '2');
INSERT INTO `goods` VALUES ('5', '猫山王榴莲', '22.00', '16.00', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '猫山王榴莲个体较小，通常在2.5kg左右。果皮多为绿色。在果实底部会有一个明显的“五角星”标记，这是猫山王榴莲所独有的，当然有的极品猫山王可能呈现出“六角星”或者没有这个图形，猫山王榴莲果肉，色泽金黄而明亮。口感细腻、纤维少、微苦，味觉层次过度自然。', '/static/images/goods/liu5.jpg|/static/images/goods/liu6.jpg|/static/images/goods/liu7.jpg|/static/images/goods/liu8.jpg|/static/images/goods/liu9.jpg', '2', '1', '11', '2');
INSERT INTO `goods` VALUES ('6', '黑葡萄', '14.50', '9.70', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '如果每天摄食相当于400卡热量的黑葡萄干，能有效降低血中胆固醇，同时还能抑制血中坏胆固醇的氧化。此外，黑葡萄干能改善直肠的健康，因为黑葡萄干含有纤维和酒石酸，能让排泄物快速通过直肠，减少污物在肠中停留的时间。', '/static/images/goods/pt1.jpg|/static/images/goods/pt2.jpg|/static/images/goods/pt3.jpg|/static/images/goods/pt4.jpg', '1', '1', '12', '3');
INSERT INTO `goods` VALUES ('7', '白葡萄', '16.00', '12.00', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '白葡萄的魅力在于其多变的风格和广泛的适应性，无论在任何气候条件下，她的质量还都不错。从寒凉的法国北部沙布利到炎热的阿根廷的门多萨和南澳大利亚的巴萝沙山谷，白葡萄可以呈现从带有柑橘类水果到充满热带水果和异国情调的不同风姿。她也是香槟和气泡酒调和成分中最重要的一份子。', '/static/images/goods/pt5.jpg|/static/images/goods/pt6.jpg|/static/images/goods/pt7.jpg', '2', '1', '13', '3');
INSERT INTO `goods` VALUES ('8', '红葡萄', '13.90', '7.60', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '葡萄籽是美容圣品，他的攻效是维生素C的20倍、维生素E的50倍。他在欧洲被誉为天然体内化妆品，可以吃的化妆品，它的攻效主要是：去除异位性皮肤炎肌肤、干燥肌肤、斑点、皱纹、松弛、黑色素沉淀，从制造美肌到预防癌症，掀起恢复青春的革命。', '/static/images/goods/pt8.jpg|/static/images/goods/pt9.jpg|/static/images/goods/pt10.jpg|/static/images/goods/pt11.jpg', '3', '1', '14', '3');
INSERT INTO `goods` VALUES ('9', '橙子', '7.00', '6.50', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '乔木，枝少刺或近于无刺。叶通常比柚叶略小，翼叶狭长，明显或仅具痕迹，叶片卵形或卵状椭圆形，很少披针形，长6-10厘米，宽3-5厘米，或有较大的。果肉及果汁全呈紫红色或暗红色。果肉细嫩多汁，具特殊香味，地中海地区是其起源地和主产地。', '/static/images/goods/jz3.jpg|/static/images/goods/jz4.jpg|/static/images/goods/jz5.jpg', '1', '1', '16', '4');
INSERT INTO `goods` VALUES ('10', '甜橘子', '6.00', '4.00', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '橘子中的维生素A还能够增强人体在黑暗环境中的视力和治疗夜盲症。橘子不宜食用过量，吃太多会患有胡萝卜素血症，皮肤呈深黄色，如同黄疸一般。若因吃太多橘子造成手掌变黄，只要停吃一段时间，就能让肤色渐渐恢复正常。明代张岱季叔张烨芳对橘子情有独钟，据载其“性好啖橘，橘熟，堆砌床案间，无非橘者，自刊不给，辄命数僮环立剥之”，吃到手脚都呈现黄色。', '/static/images/goods/jz6.jpg|/static/images/goods/jz7.jpg|/static/images/goods/jz8.jpg', '3', '1', '15', '4');
INSERT INTO `goods` VALUES ('11', '青橘子', '5.00', '3.50', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '橘子中的维生素A还能够增强人体在黑暗环境中的视力和治疗夜盲症。橘子不宜食用过量，吃太多会患有胡萝卜素血症，皮肤呈深黄色，如同黄疸一般。若因吃太多橘子造成手掌变黄，只要停吃一段时间，就能让肤色渐渐恢复正常。明代张岱季叔张烨芳对橘子情有独钟，据载其“性好啖橘，橘熟，堆砌床案间，无非橘者，自刊不给，辄命数僮环立剥之”，吃到手脚都呈现黄色。', '/static/images/goods/jz9.jpg|/static/images/goods/jz10.jpg|/static/images/goods/jz11.jpg', '2', '1', '17', '4');
INSERT INTO `goods` VALUES ('12', '麒麟西瓜', '4.00', '2.90', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '西瓜为夏季之水果，果肉味甜，能降温去暑；种子含油，可作消遣食品；果皮药用，有清热、利尿、降血压之效。', '/static/images/goods/xg1.jpg|/static/images/goods/xg2.jpg|/static/images/goods/xg6.jpg', '1', '1', '18', '5');
INSERT INTO `goods` VALUES ('13', '黑美人西瓜', '5.00', '3.60', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '黑美人西瓜果实呈长椭圆形，瓜较小，果皮深黑绿色，有不明显的条纹。一般较为早熟，果皮薄而坚韧，肉质鲜嫩多汁。二是花皮西瓜，椭圆形，瓜比较大，瓜皮颜色浅绿和深绿相间，北方较常见，较晚熟，口感脆，含糖量高。三是特小凤，这是黄瓤小型西瓜的代表，果型整齐，肉色晶黄，肉质极为细嫩脆爽，甜而多汁，纤维少。', '/static/images/goods/xg7.jpg|/static/images/goods/xg8.jpg|/static/images/goods/xg10.jpg', '2', '1', '19', '5');
INSERT INTO `goods` VALUES ('14', '嘎拉苹果', '7.70', '5.50', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '平均单果重260g左右；可溶性固形物含量12.5—14%；可滴定酸0.2-0.36%；去皮果肉硬度6.5kg/c㎡。“花牛”苹果果实圆锥形，全面鲜红或浓红，色泽艳丽，色相片红或条红色，果实着色度90—100%；果个整齐，果面光滑、亮洁；果形端正高桩、五棱突出明显，果形指数0.9—1.0；果肉黄白色，肉质细，致密，松脆，汁液多，风味独特，香气浓郁，口感好，品质上。', '/static/images/goods/gl1.jpg|/static/images/goods/gl2.jpg|/static/images/goods/gl3.jpg', '1', '0', '7', '1');
INSERT INTO `goods` VALUES ('15', '红玉苹果', '4.90', '3.90', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '果型为扁形和桩型。果面光滑、蜡质多、果粉少、干净无果锈。果皮底色黄绿，果面条红或片红，果肉黄白色，肉质细密，硬度大，果汁多，味香，含糖高，酸甜适度，耐储运。10月中旬成熟，可储存至次年6---7月。', '/static/images/goods/hy1.jpg|/static/images/goods/hy2.jpg|/static/images/goods/hy3.jpg', '3', '0', '7', '1');
INSERT INTO `goods` VALUES ('16', '金光苹果', '9.60', '7.30', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '含有大量的维生素、矿物质和丰富的膳食纤维，特别是果胶等成分，除了具有一般苹果之补心益气、益胃健脾等功效外，其止泻效果尤佳，慢性腹泻、神经性结肠炎、小儿腹泻患者可经常食用。青苹果养肝解毒，对抗抑郁症，适合年轻人食用，还可促进牙齿和骨骼生长，防止牙床出血。', '/static/images/goods/jg1.jpg|/static/images/goods/jg2.jpg|/static/images/goods/jg3.jpg', '2', '0', '9', '1');
INSERT INTO `goods` VALUES ('17', '乔纳金苹果', '8.80', '6.60', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '平均单果重260g左右；可溶性固形物含量12.5—14%；可滴定酸0.2-0.36%；去皮果肉硬度6.5kg/c㎡。“花牛”苹果果实圆锥形，全面鲜红或浓红，色泽艳丽，色相片红或条红色，果实着色度90—100%；果个整齐，果面光滑、亮洁；果形端正高桩、五棱突出明显，果形指数0.9—1.0；果肉黄白色，肉质细，致密，松脆，汁液多，风味独特，香气浓郁，口感好，品质上。', '/static/images/goods/qnj1.jpg|/static/images/goods/qnj2.jpg|/static/images/goods/qnj3.jpg', '1', '0', '9', '1');
INSERT INTO `goods` VALUES ('18', '桑萨苹果', '7.00', '5.00', '水果是对我们身体很有益的一类食物。水果营养，指水果所带有的物质营养和文化营养。普通水果含有丰富的维生素、膳食纤维等物质营养，而创意文化水果还带有文化营养。', '果型为扁形和桩型。果面光滑、蜡质多、果粉少、干净无果锈。果皮底色黄绿，果面条红或片红，果肉黄白色，肉质细密，硬度大，果汁多，味香，含糖高，酸甜适度，耐储运。10月中旬成熟，可储存至次年6---7月。', '/static/images/goods/ss1.jpg|/static/images/goods/ss2.jpg|/static/images/goods/ss3.jpg', '3', '0', '7', '1');

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `image_src` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `icon_src` varchar(255) DEFAULT NULL,
  `sort` tinyint(3) unsigned DEFAULT NULL COMMENT '类别排序',
  `is_swip` tinyint(1) unsigned DEFAULT '0' COMMENT '图片是否轮播 1是',
  `parent_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属大类的id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_category
-- ----------------------------
INSERT INTO `goods_category` VALUES ('1', '苹果', '/static/images/swip1.png', '/static/images/fruit1.png', '1', '1', '0');
INSERT INTO `goods_category` VALUES ('2', '榴莲', '/static/images/swip2.png', '/static/images/fruit2.png', '2', '1', '0');
INSERT INTO `goods_category` VALUES ('3', '葡萄', '/static/images/swip3.png', '/static/images/fruit3.png', '3', '1', '0');
INSERT INTO `goods_category` VALUES ('4', '柑橘', '/static/images/swip4.png', '/static/images/fruit4.png', '4', '1', '0');
INSERT INTO `goods_category` VALUES ('5', '西瓜', '/static/images/swip5.png', '/static/images/fruit5.png', '5', '1', '0');
INSERT INTO `goods_category` VALUES ('7', '红苹果', null, null, null, '0', '1');
INSERT INTO `goods_category` VALUES ('8', '青苹果', null, null, null, '0', '1');
INSERT INTO `goods_category` VALUES ('9', '金苹果', null, null, null, '0', '1');
INSERT INTO `goods_category` VALUES ('10', '泰国金枕榴莲', null, null, null, '0', '2');
INSERT INTO `goods_category` VALUES ('11', '山猫王榴莲', null, null, null, '0', '2');
INSERT INTO `goods_category` VALUES ('12', '黑葡萄', null, null, null, '0', '3');
INSERT INTO `goods_category` VALUES ('13', '白葡萄', null, null, null, '0', '3');
INSERT INTO `goods_category` VALUES ('14', '红葡萄', null, null, null, '0', '3');
INSERT INTO `goods_category` VALUES ('15', '金橘子', null, null, null, '0', '4');
INSERT INTO `goods_category` VALUES ('16', '橙子', null, null, null, '0', '4');
INSERT INTO `goods_category` VALUES ('17', '青橘子', null, null, null, '0', '4');
INSERT INTO `goods_category` VALUES ('18', '麒麟西瓜', null, null, null, '0', '5');
INSERT INTO `goods_category` VALUES ('19', '黑美人西瓜', null, null, null, '0', '5');

-- ----------------------------
-- Table structure for img_icon
-- ----------------------------
DROP TABLE IF EXISTS `img_icon`;
CREATE TABLE `img_icon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `res_type` varchar(10) DEFAULT NULL COMMENT '资源类型',
  `res_name` varchar(20) DEFAULT NULL COMMENT '导航名称',
  `res_src` varchar(255) DEFAULT NULL,
  `sort` tinyint(1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of img_icon
-- ----------------------------
INSERT INTO `img_icon` VALUES ('1', 'nav', '分类', '/static/images/nav1.png', '1');
INSERT INTO `img_icon` VALUES ('2', 'nav', '折扣区', '/static/images/nav2.png', '2');
INSERT INTO `img_icon` VALUES ('3', 'nav', '超值团购', '/static/images/nav3.png', '3');
INSERT INTO `img_icon` VALUES ('4', 'nav', '果干区', '/static/images/nav4.png', '4');
INSERT INTO `img_icon` VALUES ('5', 'hot', '火爆热卖', '/static/images/hot.png', null);
INSERT INTO `img_icon` VALUES ('6', 'tj', '倾情推荐', '/static/images/tj.png', null);
