import IconFont from '@comp/IconFont'
import '@/icons'

export default {
	install (Vue) {
		if (this.installed) return
		this.installed = true
		Vue.component('IconFont', IconFont)
	}
}
