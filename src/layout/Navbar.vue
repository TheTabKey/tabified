<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template>
    </template>
    <template slot="navbar-menu">
          <a
            class="nav-link"
            rel="tooltip"
            title="Follow us on Discord"
            data-placement="bottom"
            href="https://discord.com/invite/yV3pys7Nma"
            target="_blank"
          >
            <i style="font-size: 3rem;" class="fab fa-discord"></i>
            <p class="d-lg-none d-xl-none">Discord</p>
          </a>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
