<template>
<div class="main col-md-12 noPadding" :style="{
	'height': clientHeight + 'px'
	}">
	<div class="main_shadow col-md-12 " :style="{
	'height': clientHeight + 'px'}"></div>
	<div class="main_content" style="margin-top: 0" ref="main_content">
		<!-- 第一页 -->
		<div :style="{
			'height': clientHeight + 'px',
			}">
			<img src="/static/index/1/01.jpg"  height="100%">
		</div>
		<!-- 第二页 -->
		<div :style="{
			'height': clientHeight + 'px'
			}">
			<div class="main_content_page2_top" :style="{
				'height': clientHeight / 2 + 'px',
				}">
				<img src="/static/index/2/txt.png" height="100%">
			</div>
			<div class="main_content_page2_main "
				:style="{
				'left': clientWidth > 1205?((clientWidth - 1205 )/ 2) + 'px': 0
				}">
				<div class="main_content_page2_carousel" style="margin-left:0;" ref="main_carousel">
					<div v-for="(cs, index) in carousel.definition"
						class="main_content_page2_carousel_div"
						:key="cs.workName"
						:class="{'carousel_active': index === carousel.currentPage}">
						<img class="carousel_btm_img" :src="cs.img" width="100%" height="100%">
						<div class="carousel_description noMargin">
							<p class="text-center col-md-12" style="margin-top:100px;margin-bottom:0">WORKS</p>
							<h1 class="text-center col-md-12" v-text="cs.workName"></h1>
							<p class="text-center col-md-8 col-md-offset-2">
								<img src="/static/index/2/img_line.png" width="100%">
							</p>
							<p class="text-center col-md-8 col-md-offset-2" style="line-height: 25px;margin-bottom: 120px" v-text="cs.description"></p>
							<p class="text-center col-md-12" style="margin-bottom:10px" v-text="cs.ad"></p>
							<p class="text-center col-md-12" style="margin-top:0">
								—— WORKS ——
							</p>
						</div>
						<div class="carousel_shadow"></div>
					</div>
				</div>
				<div class="main_content_page2_more text-right">
					<img src="/static/index/tool/more.png">
				</div>
			</div>
			<div class="carousel_preBtn carousel_btn" @click="preCarousel">
				&lt;
			</div>
			<div class="carousel_nextBtn carousel_btn" @click="nextCarousel">
				&gt;
			</div>
		</div>
		<!-- 第三页 -->
		<div :style="{
			'height': clientHeight + 'px',
			'position': 'relative',
			'background-color': '#222',
			'overflow':'hidden'
			}">
			<div class="container">
				<div class="row">
					<div class="col-md-7">
						<div class="main_content_page3_human">
							<img src="/static/index/3/human.jpg" width="100%">
						</div>
						<div class="main_content_page3_leftTxt">
							<div class="main_content_page3_leftTxt_title">
								<img src="/static/index/3/english.png">
							</div>
							<p style="width:60%" class="main_content_page3_leftTxt_content">
								AFHwa Eawrou <br/>
								wqruwu Efihwd jHWASDkjn ASDF wqesdkjn Efdsfkjn jHdasdn dssdfk
								d sdth shei svnslkj dalsdkasdsd. ajnsdaeqwoeij dmakls maskdqoweij asdmk mcmdk.
							</p>
							<div class="main_content_page3_leftTxt_btn">
								<span>更多</span>
								<img src="/static/index/3/news_btn_ico.png">
							</div>
						</div>
						<div class="main_content_page3_rectangle">
							<img src="/static/index/3/rectangle.png" width="30%">
						</div>
						
					</div>
					<div class="col-md-5 main_content_page3_right">
						<div class="main_content_page3_rightImg">
							<img src="/static/index/3/news_img.jpg" width="100%">
							<div class="main_content_page3_right_btn" style="top:41%">
								<span>更多</span>
								<img src="/static/index/3/news_btn_ico.png">
							</div>
						</div>
						<div class="main_content_page3_right_content">
							<div class="main_content_page3_right_content_shadow"></div>
							<div class="main_content_page3_right_content_main" style="overflow-y:scroll">
								<ul>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</li>
									<li>这是一条公告内容,巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉</li>
								</ul>
							</div>
							<div class="main_content_page3_right_btn" style="bottom:8%;right:4%">
								<span>更多</span>
								<img src="/static/index/3/news_btn_ico.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 第四页 -->
		<!-- 邓 -->
		<div class="company_infor" :style="{ 'height': clientHeight + 'px' }">
			<div :style="{ 'height': clientHeight / 2 + 'px' }" class="company_infor_top">
				<div class="ci_top_box">
					<div :style="{ 'height': clientHeight / 4 + 68 + 'px' }"
						class="logo_box">
						<img src="/static/index/4/01.png"
						width="100%"
						:style="{
						'margin-top': clientHeight / 4 - 68 + 'px',
						'margin-left': '0px' }">
					</div>
					<div class="top_describe">
						<ul>
							<li class="desc_text">超越</li>
							<li class="desc_sg">|</li>
							<li class="desc_text">极限</li>
							<li class="desc_sg">|</li>
							<li class="desc_text">创造</li>
							<li class="desc_sg">|</li>
							<li class="desc_text">视觉</li>
						</ul>
					</div>
					<div class="top_hg"></div>
				</div>
			</div>
			<div :style="{
				'height': clientHeight / 2 + 'px' }"
				class="company_infor_contain">
				<div class="ci_contain_center">
					<div class="center_title">公司</div>
					<div class="center_title_Eg">ADUHF</div>
					<div class="center_describe">不忘初心，方得始终。中国共产党人的初心和使命，就是为中国人民谋幸福，为中华民族谋复兴。这个初心和使命是激励中国共产党人不断前进的根本动力。全党同志一定要永远与人民同呼吸、共命运、心连心，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进</div>
					<div class="more_about">
						<img src="/static/index/4/04.png" height="100%">
					</div>
				</div>
			</div>
		</div>
		<!-- 第四页 -->
	</div>
	<div class="main_right_nav"></div>
	<div class="main_bottom_btn" v-if="currentPage <5">
		<img src="/static/index/tool/main_btm_btn1.png" alt="">
		<img src="/static/index/tool/main_btm_btn2.png" alt="" @click="nextPage">
	</div>
</div>
</template>

<script>
	export default './homeController.js'
</script>

<style type="text/css">
.navShadowBg{
	background: #fff !important;
	opacity: .1;
}
.navShadowBg_2{
	background: #000 !important;
	opacity: .3;
}
.navIcoBg{
	color: #fff !important;
	opacity: .1;
}
.navIcoBg_2{
	color: #000 !important;
	opacity: .3;
}
.headerBg{
	background: none;
}
.headerBg_2{
	background: #000 !important;
	opacity: .3;
}
</style>

<style scoped="">
.main{
	background: url("/static/index/1/main_bg.jpg") no-repeat 100% 100%;
	overflow: hidden;
}
.main_shadow{
	background-color: #000;
	z-index: 2;
	opacity: .5;
	position: absolute;
}

.main_content{
	position: absolute;
	width: 100%;
	z-index: 3;
	transition: all 1s ease-out;
	-moz-transition: all 1s ease-out; /* Firefox 4 */
	-webkit-transition: all 1s ease-out; /* Safari 和 Chrome */
	-o-transition: all 1s ease-out; /* Opera */
}
.header_div{
	z-index:5;
	width:100%;
	position: fixed;
	top:0;
}

/*第二页*/
.main_content_page2_top{
	background-color: #f5f5f5;
}
.main_content_page2_main{
	width: 1205px;
	position: absolute;
	top: 30%;
	overflow: hidden;
}
.main_content_page2_carousel{
	width: 2400px;
	height: 605px;
	transition: all .5s;
}
.main_content_page2_carousel div{
	width: 365px;
	height: 525px;
	margin: 0 10px;
	display: inline-block;
	overflow: hidden;
	position: relative;
}
.main_content_page2_carousel_div{
	transition:  all .5s;
}
.main_content_page2_carousel div img{
	transition: all .5s;
	-webkit-transition: all .5s;
	-moz-transition: all .5s; /* Firefox 4 */
	-webkit-transition: all .5s; /* Safari 和 Chrome */
	-o-transition: all .5s; /* Opera */
}
.main_content_page2_carousel div:hover .carousel_btm_img{
	transform: scale(1.1, 1.1);
}
.main_content_page2_carousel div:hover .carousel_shadow{
	opacity:  .5;
}
.main_content_page2_carousel div:hover .carousel_description{
	opacity:  1;
	transform: scale(.9, .9)
}

.carousel_description{
	position: absolute !important;
	width: 100% !important;
	height: 100% !important;
	color: #fff;
	opacity: 0;
	top: 0;
	left: 0;
	z-index: 1;
	cursor: pointer;
	transition: all .5s;
	-webkit-transition: all .5s;
	-moz-transition: all .5s; /* Firefox 4 */
	-webkit-transition: all .5s; /* Safari 和 Chrome */
	-o-transition: all .5s; /* Opera */
	/*transform: scale(1.1, 1.1)*/

}
.carousel_description h1, p{
	margin-top: 20px;
	margin-bottom: 20px;
}

.carousel_shadow{
	width: 100% !important;
	height: 100% !important;
	top: 0;
	left: 0;
	position: absolute !important;
	margin: 0 !important;
	background-color: #2b9eee;
	opacity: 0;
	transition: opacity .5s;
	-webkit-transition: opacity .5s;
	-moz-transition: opacity .5s; /* Firefox 4 */
	-webkit-transition: opacity .5s; /* Safari 和 Chrome */
	-o-transition: opacity .5s; /* Opera */
}
.carousel_btn{
	color: #fff;
	position: absolute;
	font-size: 50px;
	font-weight: 100;
	top: 38%;
	transform:scale(1,2);
	cursor: pointer;
}
.carousel_preBtn{
	left: 5%;
}
.carousel_nextBtn{
	right:  5%;
}
.carousel_active{
	width: 415px !important; 
	height: 600px !important;
}
.main_content_page2_more{
	padding: 10px 10px;
}
/*第二页*/

/*第三页*/
.main_content_page3_human{

}
.main_content_page3_rectangle{
	opacity: .6;
	position: relative;
	bottom: -50px;
	left:  10%;
}
.main_content_page3_leftTxt{
	position: absolute;
	top:  65%;
	color: #fff;
}
.main_content_page3_leftTxt_btn{
	display: inline-block;
	border: 1px solid #fff;
	padding:  5px 25px;
}
.main_content_page3_right{
	position: absolute;
	right: 7%;
	top: 20%;
}
.main_content_page3_right_btn{
	color: #fff;
	padding: 2px 15px;
	border: 1px solid #fff;
	position: absolute;
	right:  6%;
}
.main_content_page3_right_content{
	position: relative;
	height: 330px;
	background:  url('/static/index/3/news_border.png') no-repeat 40px 180px;
}
.main_content_page3_right_content_shadow{
	background-color: #fff;
	opacity: .2;
	width: 100%;
	/*top:  0;*/
	height: 100%;
}
.main_content_page3_right_content_main{
	position: absolute;
	overflow-x: hidden;
	overflow-y: auto;
	height: 240px;
	width: 100%;
	top: 5%;
	left: 0;
}
.main_content_page3_right_content_main::-webkit-scrollbar{
	display: block;
	width: 2px;
}
.main_content_page3_right_content_main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #000;
}
.main_content_page3_right_content_main::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #fff;
}
.main_content_page3_right_content_main ul li{
	padding: 0 15%;
	color: #fff;
	height: 35px;
	line-height: 35px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	transition: background-color .5s;
}
.main_content_page3_right_content_main ul li:hover{
	background-color: #222;
	opacity: .5;
}
/*第三页*/

.main_bottom_btn img{
	position: absolute;
	cursor: pointer;
	bottom: 0;
	transition: opacity .5s;
	-moz-transition: opacity .5s; /* Firefox 4 */
	-webkit-transition: opacity .5s; /* Safari 和 Chrome */
	-o-transition: opacity .5s; /* Opera */
}
.main_bottom_btn img:last-child{
	opacity: 0;
}
.main_bottom_btn:hover img:first-child{
	opacity: 0;
}
.main_bottom_btn:hover img:last-child{
	opacity: 1;
}


@media screen and (min-width: 768px){
	.main_bottom_btn{
		position: fixed;
		z-index:  10;
		bottom: 0;
		left: 45%;
	}
}
@media screen and (max-width: 768px){
	.main_bottom_btn{
		position: fixed;
		z-index:  10;
		bottom: 0;
		left: 35%;
	}
}


/* 邓 */
.company_infor{
	width: 100%;
}
.company_infor_top{
	width: 100%;
}
.ci_top_box{
	height: 100%;
	width: 300px;
	margin: 0 auto;
}
.logo_box{
	width: 136px;
}
.top_describe{
	width: 255px;
	height: 30px;
	line-height: 30px;
	margin: 45px auto 0px;
}
.top_describe li{
	float: left;
	color: #fff;
	font-size: 14px;
	font-family: 微软雅黑;
}
.desc_text{
	height: 30px;
	line-height: 30px;
	width: 60px;
	text-align: center;
}
.desc_sg{
	width: 5px;
	height: 30px;
	line-height: 30px;
}
.top_hg{
	height: 6px;
	width: 20px;
	background: #71cfff;
	margin: 15px auto 0px;
}

.company_infor_contain{
	background: #fff;
}
.ci_contain_center{
	width:800px;
	height: 300px;
	margin: 0 auto;
}
.center_title{
	height: 60px;
	line-height: 90px;
	width: 200px;
	margin: 0 auto;
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	font-family: 微软雅黑;
}
.center_title_Eg{
	height: 30px;
	line-height: 30px;
	text-align: center;
	width: 200px;
	font-size: 17px;
}
.center_describe{
	line-height: 26px;
	width: 100%;
	text-align: center;
	font-family: 微软雅黑;
	margin: 18px 0px 30px;
}
.more_about{
	height: 50px;
	width: 105px;
	margin: 0 auto;
	cursor: pointer;
}
</style>