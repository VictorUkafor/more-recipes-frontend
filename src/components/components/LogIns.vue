<template>
<ul class="xtra-nav">
    <li v-for="(log, i) in logs" v-if="log.auth === auth" :key="i">
        <a :href="log.link" :title="log.title">
            <i class="fa" :class="log.style" aria-hidden="true"></i>
        </a>
    </li>
</ul>
</template>

<script>
export default {
  name: 'LogIns',
  data() {
    return {
      logs: [
        {
          title: 'Sign Up',
          link: '/sign-up',
          style: 'fa-plus-square',
          auth: false,
        },
        {
          title: 'Sign In',
          link: '/login',
          style: 'fa-sign-in',
          auth: false,
        },
        {
          title: 'Log Out',
          link: '/logout',
          style: 'fa-sign-out',
          auth: true,
        },
      ],
      auth: false,
    };
  },
  methods: {
    authLogins() {
      return this.logs.map((log) => {
        if (log.auth === this.auth) {
          return log;
        }
      });
    },
  },
};
</script>

