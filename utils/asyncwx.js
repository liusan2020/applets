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

//promise 形式的 wx.chooseAddress 方法
export const chooseAddress = () => {
    return new Promise((resolve, reject) => {
        wx.chooseAddress({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

//promise 形式的 wx.login 方法
export const login = () => {
    return new Promise((resolve, reject) => {
        // 获取用户登录的code
        wx.login({
            timeout: 10000,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}