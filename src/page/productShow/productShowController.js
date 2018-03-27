export default{
    data() {
        return {
            listIndex: 0,
            footerShow: true,
            showLoginDialog:false,
            iconColor: 0,
            banner: {
                src: '../static/images/about-banner.jpg',
                href: '',
                title: '恺缔科技有限公司',
                alt: '这是一张banner图'
            },
            hotProduct: {
                ChineseTitle: '热门产品',
                EnglishTitle: 'HOT PRODUCTS',
                product: [[{
                    src: '../../../static/images/hot-product1.jpg',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                },{
                    src: '../../../static/images/hot-product2.jpg',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                }],[
                    {
                    src: '../../../static/images/hot-product3.jpg',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                }
                ]]
            },
            allProduct: {
                //iconClass: ['icon-shouji','icon-diannao'],
                ChineseTitle: '全部产品',
                EnglishTitle: 'OUR PRODUCTS',
               // title: ['手机端','PC端'],
                title: [{
                name: 'PC端',
                iconClass: 'icon-diannao'},{
                name: '手机端',
                iconClass: 'icon-shouji'}],
                product: [
	            [{
	                src: '../../../static/images/read.jpg',
	                title: '图书馆管理系统',
	                date: '2017-11-17',
	                author: '恺缔科技',
	                description: '你可以在书的海洋中遨游！享受美好的闲暇时光。'
	            },{
	                src: '../../../static/images/crm.jpg',
	                title: 'CRM',
	                date: '2017-11-17',
	                author: '恺缔科技',
	                description: '高效整合线索资源，商机有序推进，智能决策加精准预测，帮助您的销售团队、渠道伙伴赢得更多订单，全面提升整体销售能力和销售业绩。'
	            },{
	                src: '../../../static/images/erp.jpg',
	                title: 'ERP',
	                date: '2017-11-17',
	                author: '恺缔科技',
	                description: '汇合了离散型生产和流程型生产的特点，面向全球市场，包罗了供应链上所有的主导和支持能力，协调企业各管理部门围绕市场导向，更加灵活或“柔性”地开展业务活动，实时地响应市场需求。'
	            },{
	                src: '../../../static/images/voice.jpg',
	                title: '语音识别系统',
	                date: '2017-11-17',
	                author: '恺缔科技',
	                description: '群聊，单聊，加好友，简单的聊天系统'
	            },{
	                src: '../../../static/images/order.jpg',
	                title: '点餐系统',
	                date: '2017-11-17',
	                author: '恺缔科技',
	                description: '简单话手机点餐，方便快捷'
	            }],[{
                src: '../../../static/images/smartApp.jpg',
                title: '柳婆婆美食店',
                date: '2017-11-17',
                author: '恺缔科技',
                description: '我们不能改变什么，我只愿传承祖辈技艺，坚持传统工艺，真正用时间做出好味道'
            	}]]
            }
        }
    },
    methods: {
        productShow(index){
            this.listIndex = index;
            this.iconColor = index
        },
        toast(){
        	this.$toast("后台正在维护，暂时无法下载");
        	
        }
    },
    mounted(){
    	if(this.$route.query.key==0) {
    		var m = this.$refs.productTab.offsetTop-180;
    		window.scrollTo(0, m);
    	}else if(this.$route.query.key==1) {
    		var m = this.$refs.productTab.offsetTop-180;
    		window.scrollTo(0, m);
    		this.listIndex = 1;
    		this.iconColor = 1;
    	}
    },
    watch:{
    	$route(){
	     	if(this.$route.query.key==0) {
	     		var m = this.$refs.productTab.offsetTop-180;
    		    window.scrollTo(0, m);
	    		this.listIndex = 0;
	    		this.iconColor = 0;
	    	}else if(this.$route.query.key==1) {
	    		var m = this.$refs.productTab.offsetTop-180;
    		    window.scrollTo(0, m);
	    		this.listIndex = 1;
	    		this.iconColor = 1;
	    	}
	    }
    }
    	
}
