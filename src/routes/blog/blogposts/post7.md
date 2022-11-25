---
title: Drawing a Line Chart
date: '2022-11-16'
---

# {title}

<script>
    import MASMoneySupplyChart from './components/MASMoneySupplyChart.svelte';
    import MASMoneySupplyChartMultiLine from './components/MASMoneySupplyChartMultiLine.svelte';
</script>

<MASMoneySupplyChart/>

### `line()` from d3-shape

### `axisBottom()` from d3-axis

<MASMoneySupplyChartMultiLine/>

### d3-group

### dynamic `line()` accessors

For each line to plot, there is a need to change the y-accessor of `line()` dynamically based on the group.
Example: `line().y((d) => yScale(d.m1))` for m1, and `line().y((d) => yScale(d.m2))` for m2, etc.
Use `d[category]` instead of using dot notation.
