<template>
  <div>
    <header>
      <nav class="container">
        <router-link to="/">
          <img
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="WDEV"
            id="logo"
          />
        </router-link>

        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
          alt="Abrir menu"
          id="menu-button"
          v-on:click="openMenu"
        />

        <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>
        <div id="menu-itens" :class="{ active: menuActive }">
          <img
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="WDEV"
            id="menu-logo"
          />

          <ul>
            <li><router-link to="/"> Home </router-link></li>
            <li><router-link to="/videos"> Videos </router-link></li>
            <li><router-link to="/sobre"> Sobre </router-link></li>
            <li><router-link to="/contato"> Contato </router-link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuActive: false,
    }
  },
  components: {},
  methods: {
    openMenu: function () {
      this.menuActive = true
    },
    closeMenu: function () {
      this.menuActive = false
    },
  },
  props: {},
  emits: [],
}
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

#logo {
  width: 130px;
}

#menu-button {
  width: 30px;
  cursor: pointer;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-itens {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-itens.active {
  display: flex;
}

#menu-itens ul {
  list-style: none;
  text-align: center;
}

#menu-itens ul li {
  margin: 20px 0;
}

#menu-itens ul li a {
  color: var(--color-text-light);
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-itens {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }

  #menu-itens ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  #menu-itens ul li {
    margin: 0;
    margin-left: 14px;
  }
}
</style>
