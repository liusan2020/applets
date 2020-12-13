//引用方式 ：import { } from "这个方法的文件所在路径";
//promise 形式的wx.showModal
export const showModal = () => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: '您确定删除这条商品吗？',
            content: '',
            success(res) {
                if (res.confirm) {
                    resolve(res.confirm);
                }
            }
        });
    });
}

//promise 形式的 wx.showToast
export const showToast = (prompt_str) => {
    return new Promise((resolve, reject) => {
        wx.showToast({
            title: prompt_str,
            mask: true,
            icon: 'none',
            success(res) {
                resolve(res);
            }
        });
    });
}
