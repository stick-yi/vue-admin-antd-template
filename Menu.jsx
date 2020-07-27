import { Icon, Menu } from 'ant-design-vue'

export default {
  name: 'Menu',
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    },
    menu: {
      type: Array,
      required: true,
      default: () => []
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      openKeys: [],
      selectedKeys: [],
      cachedOpenKeys: []
    }
  },
  watch: {
    $route () {
      // 监听route来更新menu无需使用select改变menu状态
      this.updateMenu()
    }
  },
  computed: {
    rootSubMenuKeys: vm => vm.menu.map(item => item.name)
  },
  // 使用创建前更新menu而不是使用mounted不会导致render两次
  created () {
    this.updateMenu()
  },
  methods: {
    /**
     * 设置展开菜单的key
     * @param openKeys
     * @returns {boolean}
     */
    onOpenChange (openKeys) {
      if (this.mode === 'horizontal') {
        this.openKeys = openKeys
        return false
      }
      // 非水平模式
      const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
      if (!this.rootSubMenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    /**
     * 更新菜单选中状态
     */
    updateMenu () {
      const routes = this.$route.matched.concat()
      const { hidden } = this.$route.meta
      if (routes.length >= 3 && hidden) {
        routes.pop()
        this.selectedKeys = [routes[routes.length - 1].name]
      } else {
        this.selectedKeys = [routes.pop().name]
      }
      const openKeys = []
      if (this.mode === 'inline') {
        routes.forEach(item => {
          openKeys.push(item.name)
        })
      }
      this.openKeys = openKeys
    },
    renderType (menu) {
      if (menu?.hidden) {
        return null
      } else if (menu?.children) {
        return this.renderSubMenu(menu)
      } else {
        return this.renderItem(menu)
      }
    },
    renderItem (item) {
      const props = {
        key: item.name,
        disabled: item?.meta?.disabled,
        title: item?.meta?.title
      }
      return (
        <Menu.Item {...{ ...props }} >
          <router-link to={item.path}>
            {this.renderIcon(item?.meta?.icon)}
            <span>{item?.meta?.title}</span>
          </router-link>
        </Menu.Item>
      )
    },
    renderSubMenu (item) {
      const childrenNodes = item.children.map(_item => this.renderType(_item))
      return (
        <Menu.SubMenu {...{
          key: item.name,
          scopedSlots: {
            title: () => <span>{this.renderIcon(item?.meta?.icon)}<span>{item?.meta?.title}</span></span>
          }
        }}>
          {childrenNodes}
        </Menu.SubMenu>
      )
    },
    renderIcon (icon) {
      if (icon === 'none' || icon === undefined) {
        return null
      }
      const props = {}
      typeof icon === 'object' ? props.component = icon : props.type = icon
      return <Icon {...{ props }} />
    }
  },
  render () {
    const { menu, openKeys, mode, selectedKeys, onOpenChange, renderType, theme } = this
    const menuTree = menu.map(item => renderType(item))
    const props = {
      mode,
      theme,
      openKeys,
      selectedKeys
    }
    return (
      <Menu class="ant-pro-menu" {...{
        props,
        on: {
          openChange: onOpenChange
        }
      }}>
        {menuTree}
      </Menu>
    )
  }
}
