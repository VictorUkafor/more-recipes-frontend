<template>
<header
class="header"
:style="{
    backgroundImage: 'url('+ require('@/'+$store.getters.headerImage) +')',
    backgroundPosition: 'top center'
    }"
     >
     <div class="container clearfix">
         <button class="nav-toggle">
             <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="logo">
            <a href="/">
            <img src="../../assets/img/logo.png"
            alt="Recipes" height="40" width="170" />
            </a>
            </div>
            <LogIns />
            <HeaderNav />
        </div>
        <HeaderAd />
        </header>
</template>

<script>
import HeaderNav from '../components/HeaderNav';
import HeaderAd from '../components/HeaderAd';
import LogIns from '../components/LogIns';

export default {
  name: 'Header',
  components: {
    HeaderNav,
    HeaderAd,
    LogIns,
  },
};
</script>

