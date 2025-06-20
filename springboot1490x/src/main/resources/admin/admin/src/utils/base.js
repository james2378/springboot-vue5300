const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1490x/",
            name: "springboot1490x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1490x/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于文学创作的社交论坛"
        } 
    }
}
export default base
