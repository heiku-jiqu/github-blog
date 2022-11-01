---
title: SVG Fundamentals
date: '2022-10-19'
---

<script>
    import GovtBalanceChart from './components/GovtBalanceChart.svelte';
    const data = [1,2,3,4,5];
</script>

# {title}

SVG provides elements that describe shapes / curves, similar to how HTML provides elements that describe headers, paragraphs.

SVG document starts with `<svg>` root element, and within it you can put various shape elements, and group those together using `<g>` element.

SVG is actually an XML language, and therefore:

    - elements and attributes are case sensitive
    - attribute values must be inside quotes even if they are numbers.

<GovtBalanceChart/>
