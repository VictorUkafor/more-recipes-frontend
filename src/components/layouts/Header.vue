<template>
<header
class="header"
:style="{
    backgroundImage: 'url('+ require('@/'+headerImage) +')',
    backgroundPosition: 'top center'
    }"
     >
     <div class="container clearfix">
         <button class="nav-toggle">
             <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="logo">
            <a href="/">
            <img
            src="../../assets/img/logo.png"
            alt="Recipes"
            height="40"
            width="170"
            />
            </a>
            </div>
            <LogIns />
            <HeaderNav :page=page />
        </div>
        <HeaderAd
        :headerContent=headerContent
        :headerAction=headerAction
        />
        </header>
</template>

<script>
import HeaderNav from '../components/HeaderNav';
import HeaderAd from '../components/HeaderAd';
import LogIns from '../components/LogIns';

export default {
  name: 'Header',
  props: {
    headerContent: String,
    headerAction: Array,
    page: String,
    headerImage: String,
  },
  components: {
    HeaderNav,
    HeaderAd,
    LogIns,
  },
};
</script>

