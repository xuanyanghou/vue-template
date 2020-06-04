import {
	Button,
	List,
	Page,
	Input,
	Table,
	Select,
	Upload,
	Form,
	FormItem,
	Alert,
	Message,
	Modal,
	Poptip,
	TabPane,
	Tabs
} from 'view-design'

export default {
	install (Vue) {
		if (this.installed) return
		this.installed = true

		Vue.component('Button', Button)
		Vue.component('List', List)
		Vue.component('Page', Page)
		Vue.component('Input', Input)
		Vue.component('Table', Table)
		Vue.component('Select', Select)
		Vue.component('Upload', Upload)
		Vue.component('Form', Form)
		Vue.component('FormItem', FormItem)
		Vue.component('Alert', Alert)
		Vue.component('Message', Message)
		Vue.component('Modal', Modal)
		Vue.component('Poptip', Poptip)
		Vue.component('TabPane', TabPane)
		Vue.component('Tabs', Tabs)
	}
}
