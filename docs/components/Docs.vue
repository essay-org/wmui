<template>
  <div class="docs">
    <aside class="aside">
      <div class="intro" v-for="(item, index) in menu" :key="index">
        <div class="title">{{menuTitle[index]}}</div>
        <ul>
          <li v-for="(i, index) in item" :key="index">
            <router-link :to="`/docs/${i.en}`">{{ i.en | capitalize }} {{ i.zh }}</router-link>
          </li>
        </ul>
      </div>
    </aside>
    <div class="content">
      <div class="doc">
        <doc-render :componentName="componentName"></doc-render>
      </div>
    </div>
  </div>
</template>
<script>
import DocRender from './DocRender.vue'
import docs from '../zh-cn/config.js'
import {capitalize} from '../util/utils.js'
export default {
  data () {
    return {
    menu:[],
    menuTitle:[],
    isPhoneShow: true,
    active: this.$route.params.componentName || 'start',
    componentName: this.$route.params.componentName || 'start'
    }
  },
  mounted() {
   for (const key in docs) {
    const element = docs[key];
    this.menuTitle.push(key)
    this.menu.push(element)
    }
  },
  components: {
    DocRender
  },
  filters: {
   capitalize
  },
  watch: {
    $route(params) {
      this.active = this.componentName = params.params.componentName
    }
  }
}
</script>
<style lang="scss">
.docs {
  display: flex;
  height: 100%;
  width: 100%;
  .aside {
    position: fixed;
    left:0;
    top:0;
    height: 100%;
    width: 230px;
    background-color: #FAFAFA;
    color: #364149;
    overflow-y: scroll;
    .title {
      font-size:16px;
      font-weight: bold;
      padding: 8px 15px;
    }
    li {
      a {
        display: inline-block;
        padding:5px 0 5px 30px;
        font-size: 15px;
        color: #364149;
        &:hover {
          text-decoration: none;
        }
        &.current {
          color: #008CFF;
        }
      }
    }
  }
  .content {
    flex: 1;
    background-color: #fff;
    display: flex;
    margin-left: 230px;
    .doc {
      flex:1;
      padding: 10px 15px;
    }
    .phone {
      width: 375px;
      height: 714px;
      background-image: url('../assets/images/iphone.png');
      background-repeat: no-repeat;
      background-size: 375px 714px;
      position: relative;
      margin:10px;
      iframe {
        position: absolute;
        border: 0;
        top: 88px;
        left: 25px;
        width: 325px;
        height: 540px;
        background-color: #F7F7F7;
        overflow: scroll;
      }
    }
  }
}
</style>
