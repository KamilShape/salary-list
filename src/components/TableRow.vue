<template>
  <tr>
    <td>{{ worker.imie }}</td>
    <td>{{ worker.nazwisko }}</td>
    <td>{{ worker.dzial }}</td>
    <td>{{ worker.wynagrodzenieKwota }}</td>
    <td>{{ worker.wynagrodzenieWaluta }}</td>
  </tr>
</template>
<script>
export default {
  props: ["worker"]
};
</script>
<style>
</style>