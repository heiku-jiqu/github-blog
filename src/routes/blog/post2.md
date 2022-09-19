---
title: CSS Horizontal Scrolling Items With Grid
date: '2022-09-09'
---

<script>
    import Carousell from "./components/Carousell.svelte";
</script>

# {title}

There are times when we want to arrange items that scrolls horizontally.
We can achieve this using `grid-auto-flow` and `overflow-x` CSS property in the parent component.

Example component:
<Carousell/>

# Horizontal grid arrangement

First, set `grid-auto-flow: columns;` in the parent component. This will make the child elements "stack horizontally" instead of vertically.

Then set `grid-auto-columns: 27%` to set the width of each grid column. Choosing an odd number is good as it gives visual cue that there are more items to scroll.

# Horizontal scrolling

If you have created more items than the parent component can fit, you will notice that the grid currently just populates child items more and more to the right, causing the whole window to be expanded.

In order to make the items fit into a scrollable component, we just need to add `overflow-x: auto` to the parent component.
This tells the parent component to "clip" (cut off) the extra child items, and add a horizontal scroll to see the rest of the content.

The `auto` keyword actually means that the parent component will automatically include/exclude the scroll bar depending on whether child items exceed the parent component.
To always have the scroll bar, use `overflow-x: scroll` instead!

# Scroll snapping

To further enhance the horizontal scrolling, we can add sroll snapping so that the first item visible will always not be cut off.

To do this, we need to add `scroll-snap-type` and `scroll-snap-align` to parent and child components respectively.

## Activate scroll snapping

In the parent component, add `scroll-snap-type: x mandatory`.
The `x` keyword species that you are activating snap in the x axis, and `mandatory` specifies that you are enforing the component to **always** snap child components (the alternative is using `proximity` keyword).

## Set where to snap to

In the child component, add `scroll-snap-align: start` so that items are always snapped to the start of the first item.
