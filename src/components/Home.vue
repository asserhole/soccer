<template>
	<div id="homepage">
		<div id="shiftbox">
			<div :class="{isact: active==='tab1'}" @click="toact('tab1')">足球现场</div>
			<div :class="{isact: active==='tab2'}" @click="toact('tab2')">足球生活</div>
			<div :class="{isact: active==='tab3'}" @click="toact('tab3')">足球美女</div>
		</div>

		
		
		<mt-tab-container v-model="active" :swipeable="isswip">
		  <mt-tab-container-item id="tab1">
			<div id="picbox">
				<dl>
					<dt><img src="../assets/imgs/1.jpg"></dt>
					<dd>梅西读秒绝杀</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/2.jpg"></dt>
					<dd>格策是傻叉</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/3.jpg"></dt>
					<dd>临门一脚</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/4.jpg"></dt>
					<dd>梅开二度</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/5.jpg"></dt>
					<dd>曼联夺取欧联杯</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/1.jpg"></dt>
					<dd>梅西读秒绝杀</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/2.jpg"></dt>
					<dd>格策是傻叉</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/3.jpg"></dt>
					<dd>临门一脚</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/4.jpg"></dt>
					<dd>梅开二度</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/5.jpg"></dt>
					<dd>曼联夺取欧联杯</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/1.jpg"></dt>
					<dd>梅西读秒绝杀</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/2.jpg"></dt>
					<dd>格策是傻叉</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/3.jpg"></dt>
					<dd>临门一脚</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/4.jpg"></dt>
					<dd>梅开二度</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/5.jpg"></dt>
					<dd>曼联夺取欧联杯</dd>
				</dl>
			</div>
		    

		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab2">
		    <div id="box2">
		    	<mt-cell  title="足球引援应回归理性"></mt-cell>
		    	<mt-cell  title="被足球耽误的篮球天才!卡瓦尼12投全部命中"></mt-cell>
		    	<mt-cell  title="足协新政又来,中超可改名:青少年足球联赛"></mt-cell>
		    	<mt-cell  title="社区足球如何翻越师资、场地“两座大山”"></mt-cell>
		    	<mt-cell  title="日媒:中国足球没有优秀的年轻人闪光,靠中超当遮羞布!"></mt-cell>
		    	<mt-cell  title="足球引援应回归理性"></mt-cell>
		    	<mt-cell  title="被足球耽误的篮球天才!卡瓦尼12投全部命中"></mt-cell>
		    	<mt-cell  title="足协新政又来,中超可改名:青少年足球联赛"></mt-cell>
		    	<mt-cell  title="社区足球如何翻越师资、场地“两座大山”"></mt-cell>
		    	<mt-cell  title="日媒:中国足球没有优秀的年轻人闪光,靠中超当遮羞布!"></mt-cell>
		    	<mt-cell  title="足球引援应回归理性"></mt-cell>
		    	<mt-cell  title="被足球耽误的篮球天才!卡瓦尼12投全部命中"></mt-cell>
		    	<mt-cell  title="足协新政又来,中超可改名:青少年足球联赛"></mt-cell>
		    	<mt-cell  title="社区足球如何翻越师资、场地“两座大山”"></mt-cell>
		    	<mt-cell  title="日媒:中国足球没有优秀的年轻人闪光,靠中超当遮羞布!"></mt-cell>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="tab3">
		    <div id="picbox">
		    	<dl>
					<dt><img src="../assets/imgs/6.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/7.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/8.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/9.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/10.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/11.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/6.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/7.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/8.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/9.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/10.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/11.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/6.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/7.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/8.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/9.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/10.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
				<dl>
					<dt><img src="../assets/imgs/11.jpg"></dt>
					<dd>足球宝贝</dd>
				</dl>
		    </div>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      active: 'tab1',
	      isswip: true
	    }
	  },
	  methods: {
	    toact(val){
	    	this.active = val;
	    }
	  }
	}
	
</script>

<style>
	#shiftbox{
		background: rgba(255,255,255,0.9);
		height: .68rem;
		width:100%;
		position: absolute;
		z-index: 310;
	}
	#shiftbox>div{
		float:left;
		color: #666666;
		width: 33.33%;
		line-height: .68rem;
		text-align: center;
		font-size: .25rem;
	}
	#shiftbox>.isact{
		color: #0dc441;
		border-bottom: .05rem solid #0dc441;
	}
	#picbox{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-between;
		margin-bottom: .87rem;
		margin-top: .68rem;
	}
	#picbox dl{
		width:3.13rem;
		height: 3.7rem;
		margin-bottom: .1rem;
		border:1px solid #e5e5e5;
	}
	#picbox dl>dt{
		height: 3.15rem;
		border-bottom: 1px solid #e5e5e5;
	}
	#picbox dl>dt>img{
		width:3.13rem;
		height:3.15rem;
	}
	#picbox dl>dd{
		height: .5rem;
		line-height: .5rem;
		font-size: .23rem;
		text-indent: .21rem;
	}
	#box2{
		margin-bottom: .87rem;
		margin-top: .68rem;
	}
	#box2 .mint-cell-text{
		font-size: .12rem;
	}
</style>