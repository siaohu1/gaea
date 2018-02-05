var app = {
    init:function () {
        this.generate_params();
        this.set_fullPage_height();
    },
    generate_params:function () {
        this.fullpage_Height = window.innerHeight;
    },
    set_fullPage_height:function () {
        $('.dong_fullPage').height(this.fullpage_Height);
    }
};

app.init();

