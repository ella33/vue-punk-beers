<template>
  <div>
    <div v-for="n in notifications" :key="n.id">
      {{n.Component}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NotificationsBar',
  computed: mapState({
    notifications: state => state.notifications.list,
  }),
};
</script>

<style module lang="scss">

</style>
