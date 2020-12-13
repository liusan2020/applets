//引用方式 ：import { } from "这个方法的文件所在路径";
export const request = (params) => {
    const baseUrl = 'http://liusan.natapp1.cc/wx/api/datas/';
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
}
