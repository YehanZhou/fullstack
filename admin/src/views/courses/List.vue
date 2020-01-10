<template>
  <div>
      <h3>课程列表</h3>
      <el-table :data="data.data" border stripe>
        <el-table-column v-for="(col, key) in columns"
          :prop="key"
          :key="key"
          :label="col.label"
          :width="col.width">
        </el-table-column>
      </el-table>
  </div>
</template>

<script lang="ts">
import { Component , Vue } from 'vue-property-decorator'

@Component({})
export default class CourseList extends Vue {
  data = {}
  columns = {
    _id: { label: "ID" },
    name: { label: "课程名称" },
    cover: { label: "课程封面图" }
  }

  async fetch () {
    const res = await this.$http.get('courses')
    this.data = res.data
  }

  created () {
    this.fetch()
  }

}
</script>

<style>

</style>