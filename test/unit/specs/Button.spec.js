import Button from '../../../packages/button/index.vue'
import {createCompInstance} from '../utils.js'

describe('Button', () => {
  let vm
  it('button', () => {
    vm = createCompInstance(Button)
    // console.log(vm.$el.classList)
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('ivc-button-primary')
  })

  it('type', () => {
    vm = createCompInstance(Button, {
      type: 'submit'
    })
    expect(vm.$el.getAttribute('type')).to.equal('submit')
  })

  it('disabled', () => {
    vm = createCompInstance(Button, {
      disabled: true
    })
    expect(vm.$el.hasAttribute('disabled')).to.be.true
  })
})
