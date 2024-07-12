const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshangdangaodian/",
            name: "wangshangdangaodian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangdangaodian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上蛋糕售卖店管理系统"
        } 
    }
}
export default base
