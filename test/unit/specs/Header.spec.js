import Vue from 'vue'
import Header from '../../../packages/Header/index.vue'
import {createVueInstance, destroyVM} from '../utils.js'

Vue.component(Header.name, Header)

describe('Header', () => {
  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('title', done => {
    vm = createVueInstance({
      template: `
        <ivc-header title="标准标题" ref="header"></ivc-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $titleContent = $dom.querySelector('.ivc-header-title')
      expect($titleContent.textContent).to.equal('标准标题')
      done()
    })
  })

  it('left slot', done => {
    vm = createVueInstance({
      template: `
        <ivc-header title="左侧容器" ref="header">
          <router-link to="/" slot="left">
            <span class="left">返回</span>
          </router-link>
        </ivc-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $titleContent = $dom.querySelector('.ivc-header-title')
      let $leftContent = $dom.querySelector('.left')
      expect($titleContent.textContent).to.equal('左侧容器')
      expect($leftContent.textContent).to.equal('返回')
      done()
    })
  })

  it('right slot', done => {
    vm = createVueInstance({
      template: `
        <ivc-header title="右侧容器" ref="header">
          <router-link to="/" slot="right">
            <span class="right">返回</span>
          </router-link>
        </ivc-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $titleContent = $dom.querySelector('.ivc-header-title')
      let $rightContent = $dom.querySelector('.right')
      expect($titleContent.textContent).to.equal('右侧容器')
      expect($rightContent.textContent).to.equal('返回')
      done()
    })
  })

  it('title slot', done => {
    vm = createVueInstance({
      template: `
        <ivc-header ref="header">
          <p slot="title" class="title">复杂样式标题</p>
        </ivc-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $title = $dom.querySelector('.title')
      expect($title.textContent).to.equal('复杂样式标题')
      done()
    })
  })

  it('fixed', done => {
    vm = createVueInstance({
      template: `
        <ivc-header fixed title="悬挂标题" ref="header"></ivc-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $titleContent = $dom.querySelector('.ivc-header-title')
      expect($dom.style.position).to.equal('fixed')
      expect($titleContent.textContent).to.equal('悬挂标题')
      done()
    })
  })
})
