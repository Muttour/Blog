<template>
  <list-menu :datas="list" />
</template>

<script>
import ListMenu from "./ListMenu.vue";
export default {
  components: { ListMenu },
  data() {
    return {
      list: [
        {
          name: "1 - 1",
          isSelected: false,
          children: [],
        },
        {
          name:" 1 - 2",
          isSelected: true,
          children: [
            {
              name: "1 - 2 - 1",
              isSelected: true,
              children: [],
            },
            {
              name:" 1 - 2 - 2",
              isSelected: false,
              children: [],
            },
            {
              name: "1 - 2 - 3",
              isSelected: false,
              children: [],
            },
            {
              name:" 1 - 2 - 4",
              isSelected: false,
              children: [],
            },
          ],
        },
        {
          name:" 1 - 3",
          isSelected: false,
          children: [],
        },
        {
          name:" 1 - 4",
          isSelected: false,
          children: [],
        },
      ],
    };
  },
};
</script>

<style>
</style>