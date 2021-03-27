<script lang="ts">
    import "./TailwindStyles.svelte";

    import { testString } from "circledata-common/lib/api/request";

    const test: string = "test";

    console.log(testString);

</script>

<p class="text-red-400">
    Hello World! {testString}
</p>
