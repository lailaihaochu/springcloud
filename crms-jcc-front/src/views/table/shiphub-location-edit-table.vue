<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column width="180px" align="center" label="location_num" prop="location_num">
        <template slot-scope="{row}">
          <span>{{ row.location_num }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="location_name" prop="location_name">
        <template slot-scope="{row}">
          <span>{{ row.location_name }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="longitude" prop="longitude">
        <template slot-scope="{row}">
          <span>{{ row.longitude }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="latitude" prop="latitude">
        <template slot-scope="{row}">
          <span>{{ row.latitude }}</span>
        </template>
      </el-table-column>
      <el-table-column width="200px" align="center" label="created_time">
        <template slot-scope="{row}">
          <span>{{ row.created_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="updated_time">
        <template slot-scope="{row}">
          <span>{{ row.updated_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="165">
        <template slot-scope="{row}">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="handleUpdate(row)"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="shiphubLocationInfo" label-position="left" label-width="140px" style="width: 400px; margin-left:50px;">
        <el-form-item label="location_num" prop="location_num">
          <p>{{shiphubLocationInfo.location_num}}</p>
        </el-form-item>
        <el-form-item label="longitude" prop="longitude">
          <el-input v-model="shiphubLocationInfo.longitude"  />
        </el-form-item>
        <el-form-item label="latitude" prop="latitude">
          <el-input v-model="shiphubLocationInfo.latitude"  />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
import axios from 'axios'
export default {
  name: 'InlineLocationEdit',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      shiphubLocationInfo: {
        location_num: '1',
        longitude: '',
        latitude: ''
      },
      dialogStatus: '',
      dialogFormVisible: false,
      rules: {

      },
      test: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      // const { data } = await fetchList(this.listQuery)
      // const { data } = await axios.get('https://shiphub-asia.preprod.subsidia.org/shiphub_location/locations?location_num_list=0070038800388,0070085000850')
      const { data } = await axios.get('http://localhost:12001/shiphub_web/stores/location/list?location_num_list=0070038800388,0070085000850')
      this.list = data
      this.list = data.map(v => {
        this.$set(v, 'edit', false)
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit() {
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    handleUpdate(row) {
      this.shiphubLocationInfo.location_num = row.location_num
      this.shiphubLocationInfo.longitude = row.longitude
      this.shiphubLocationInfo.latitude = row.latitude
      this.dialogFormVisible = true
      this.dialogStatus = 'update'
    },
    async updateData() {
      const jsonArr = []
      jsonArr.push(this.shiphubLocationInfo)
      const response = await axios({
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'post',
        url: 'http://localhost:12001/shiphub_web/stores/update/locations',
        data: JSON.stringify(jsonArr)
      })
      if (response.data.status === '210000') {
        this.$message({
          message: 'The edit is success！',
          type: 'success'
        })
        this.dialogFormVisible = false
        this.getList()
      } else {
        this.$message({
          message: 'The edit is error！',
          type: 'error'
        })
        this.dialogFormVisible = false
        this.getList()
      }
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
