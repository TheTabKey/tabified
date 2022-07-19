<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Tabified</h1>
          <h3>An easy rust server.</h3>
          <h6 style="margin-top: 200px;">
            Direct Connect:
            <a href="steam://connect/147.135.86.16:28015" target="_blank">
              tabified.net:28015 </a
            >
          </h6>
        </div>

      </div>
    </div>
    <basic-elements></basic-elements>
    <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Server Details</h2>
            <h5 class="description">Max Group Size: 6
- 3x components and gather
- autosplitter/quicksmelt/instant craft

- 2 minute nights

- skinbox

- 3200m map size

- Full wipes automatically every Friday at 3PM EST

- Boats and minicopters can spawn

- Custom Train Event
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax
  }
};
</script>
<style></style>
