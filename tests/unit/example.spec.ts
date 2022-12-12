import { mount } from '@vue/test-utils'
import Tab1Page from '@/views/TabAccount.vue'

describe('TabAccount.vue', () => {
  it('renders tab 1 TabAccount', () => {
    const wrapper = mount(Tab1Page)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
