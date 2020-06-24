<template>
  <div id="wrap" ref="test" class="theme-default">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div class="color-select">
      <Button type="primary" @click="toggleDefaultTheme">默认</Button>
      <Button type="primary" @click="toggleSecondTheme">第一种</Button>
      <Button type="primary" @click="toggleThirdTheme">第二种</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    if (localStorage.getItem('theme') === 'theme-default') {
        this.setTheme('theme-default')
    }
    if (localStorage.getItem('theme') === 'theme-second') {
        this.setTheme('theme-second')
    }
    if (localStorage.getItem('theme') === 'theme-third') {
        this.setTheme('theme-third')
    }
  },
  methods: {
    toggleDefaultTheme () {
      if (localStorage.getItem('theme') !== 'theme-default'){
        this.setTheme('theme-default')
      }
    },
    toggleSecondTheme () {
      if (localStorage.getItem('theme') !== 'theme-second'){
        this.setTheme('theme-second')
      }
    },
    toggleThirdTheme () {
      if (localStorage.getItem('theme') !== 'theme-third'){
        this.setTheme('theme-third')
      }
    },
    setTheme (themeName) {
      localStorage.setItem('theme', themeName)
      this.$refs.test.className = themeName
      // document.documentElement.className = themeName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-default {
   --accent-color: #72f1b8;
   --font-color: #34294f;
}

.theme-second {
    --accent-color: #FFBF00;
    --font-color: #59316B;
}

.theme-third {
    --accent-color: #d9455f;
    --font-color: #303960;
}

#wrap {
    background-color: var(--accent-color);
    color: var(--font-color);
}

/* Style each swatch to match the corresponding theme */
.color-select button:nth-child(1) { background: #72f1b8; border-color: #34294f; }
.color-select button:nth-child(2) { background: #FFBF00; border-color: #59316B; }
.color-select button:nth-child(3) { background: #d9455f; border-color: #303960; }

</style>
