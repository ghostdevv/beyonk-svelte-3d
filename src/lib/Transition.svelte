<script lang="ts">
    import { linear } from 'svelte/easing';

    type Settings = {
        duration?: number;
        delay?: number;
        easing?: (t: number) => number;
    };

    let _in: Settings | undefined | true = undefined;
    let _out: Settings | undefined | true = undefined;
    let _both: Settings | undefined | true = undefined;

    export { _in as in, _out as out, _both as both };

    let value = 1;

    const animate = (
        _: HTMLElement,
        options: {
            duration?: number;
            delay?: number;
            easing?: (t: number) => number;
        } = {
            duration: 400,
            delay: 0,
            easing: linear,
        },
    ) => {
        return {
            duration: options.duration,
            delay: options.delay,
            easing: options.easing,
            tick: (t: number) => {
                value = t;
            },
        };
    };
</script>

{#if _both}
    <div transition:animate={typeof _both === 'boolean' ? undefined : _both} />
{:else if _in && _out}
    <div
        in:animate={typeof _in === 'boolean' ? undefined : _in}
        out:animate={typeof _out === 'boolean' ? undefined : _out} />
{:else if _in}
    <div in:animate={typeof _in === 'boolean' ? undefined : _in} />
{:else if _out}
    <div out:animate={typeof _out === 'boolean' ? undefined : _out} />
{/if}

<slot {value} />
