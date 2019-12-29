<template>
    <Grid container>
        {{ this.$route.params.id }}
    </Grid>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Grid } from "~/components/UI";
export default Vue.extend({
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    components: {
        Grid
    },
});
</script>

<style lang="scss">

</style>