<template>
  <div id="app">
    <div id="header">
      <h3>足球圈</h3>
    </div>
    <div id="content">
      <router-view></router-view>
      
    </div>
    <div id="footer">
      <ul>
        <li class="active">
          <router-link to="/home"><div class="iconbox"><i class="icon iconfont icon-home"></i></div><p>首页</p></router-link>
        </li>
        <li>
          <router-link to="/find"><div class="iconbox"><i class="icon iconfont icon-speed"></i></div><p>发现</p></router-link>
        </li>
        <li></li>
        <li>
          <router-link to="/mine"><div class="iconbox"><i class="icon iconfont icon-user"></i></div><p>我的</p></router-link>
        </li>
        <li><div class="iconbox"><i class="icon iconfont icon-upload"></i></div><p>退出</p></li>
      </ul>
      <div class="photo"><i class="icon iconfont icon-camera"></i></div>
    </div>
  </div>    
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      pickerValue: ''
    }
  }
}
</script>

<style>
  body,html{
    height: 100%;
  }
  #app{
    height:100%;
    display: flex;
    flex-direction: column;
  }
  #header{
    height: .88rem;
    background: #0dc441;
  }
  #content{
    flex:1;
    overflow: auto;
    background: #fff;
    height: 1000px;

  }
  #footer{
    position: absolute;
    width:100%;
    bottom:0;
    left:0;
    background: #ffffff;
  }
  #footer>ul{
    height: .87rem;
    border-top: 1px solid #cbd7cc;
    display: flex;
    justify-content:space-around;
    align-items:center;
  }
  #footer>ul>li{
    width:.58rem;
    text-align: center;
    color:#d2d2d2;
  }

  #footer>ul>li>a{
    color:#d2d2d2;
  }
  #footer ul li p{
    font-size: .24rem;
  }
  #footer .iconbox{
    width:.58rem;
    height: .4rem;
    line-height: .4rem;
  }
  #footer .iconfont{
    font-size: .32rem;
  }
  #footer>ul .router-link-active{
    color:#0dc441;
  }
  #footer .photo{
    position: absolute;
    width:1.05rem;
    height: 1.05rem;
    border-radius:50%;
    border:1px solid #d2d2d2;
    color:#d2d2d2;
    background: #fff;
    bottom: 0;
    text-align:center;
    line-height: .97rem;
    left:50%;
    transform:translateX(-50%);
  }
  #footer>.photo .iconfont{
    font-size: .47rem;
  }
  #header h3{
    color: #fff;
    text-align: center;
    line-height: .88rem;
    height: .88rem;
    font-size: .32rem;
    font-weight: normal;
  }

</style>
