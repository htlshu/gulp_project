console.log("config配置文件加载了！");


requirejs.config({
    baseUrl : "localhost:8080",
    paths : {
       "jquery" : "https://cdn.bootcss.com/jquery/2.2.4/jquery",
       "jquery.hover" : "/js/lib/my.jquery.hover"
    }
});