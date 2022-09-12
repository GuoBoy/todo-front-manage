<template>
  <div class="tools">
    <el-button type="primary" @click="onRefresh">刷新</el-button>
  </div>
  <el-table :data="filterUsers" style="width: 100%" size="small">
    <el-table-column prop="id" label="ID" width="36" />
    <el-table-column prop="username" label="Name" />
    <el-table-column prop="created_at" label="created_at" />
    <el-table-column prop="updated_at" label="updated_at" />
    <el-table-column prop="last_update_time" label="last_update_time" />
    <el-table-column>
      <template #header>
        <el-input v-model="searchKey" size="small" clearable></el-input>
      </template>
      <template #default="scope">
        <el-button type="danger" size="small" @click="onDel(scope.row.id)">删除</el-button>
        <el-button type="warning" size="small" @click="dialogVisible = true, currentId = scope.row.id">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 修改对话框 -->
  <el-dialog v-model="dialogVisible" title="修改密码" width="40%" :before-close="handleClose">
    <el-form :model="pp" ref="formRef" :rules="rules" label-width="80px" class="rest-form">
      <el-form-item label="旧密码" prop="op">
        <el-input v-model="pp.op"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="np">
        <el-input v-model="pp.np"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false,clearPP()">取消</el-button>
        <el-button type="primary" @click="onModify">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { apiDelUser, apiGetAllUsers, apiUpdateUser } from '@/api';
import { OPPwdModel, UserItem } from '@/model/user';
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { computed, onMounted, reactive, ref } from 'vue';

const users = ref<UserItem[]>([])
const onRefresh = () => {
  apiGetAllUsers().then((res: any) => {
    if (res.code !== 200) {
      ElMessage.error("刷新失败")
      return
    }
    users.value = res.data
    ElMessage.success("刷新成功")
  })
}
onMounted(() => {
  onRefresh()
})

const onDel = (id: number) => {
  ElMessageBox.confirm(`确定删除ID :${id}`, '提示', { confirmButtonText: "确定", cancelButtonText: "取消", type: "warning" }).then(ok => {
    if (ok) {
      apiDelUser(id).then((res: any) => {
        if (res.code !== 200) {
          ElMessage.error("删除失败")
          return
        }
        users.value = res.data
        ElMessage.success("删除成功")
      })
    }
  })
}

// 修改
const dialogVisible = ref(false)
const handleClose = (done: () => void) => {
  done()
}
const currentId = ref<number>(0)
const pp = reactive<OPPwdModel>({
  np: "",
  op: ""
})
const formRef = ref<FormInstance>()
const rules = {
  op: [{ required: true, message: '输入旧密码', trigger: 'blur' },],
  np: [{ required: true, message: '输入新密码', trigger: 'blur' },]
}

const onModify = async () => {
  var ok = false
  formRef.value ? ok = await formRef.value.validate() : ""
  if (ok) {
    const res: any = await apiUpdateUser(currentId.value, pp)
    if (res.code === 200) {
      ElMessage.success("修改成功")
      dialogVisible.value = false
      formRef.value?.resetFields()
      return
    }
  }
  ElMessage.error("修改失败")
}
const clearPP = () => {
  pp.op = ""
  pp.np = ""
}
const searchKey = ref('')
const filterUsers = computed(() => {
  return users.value.filter((v) => !searchKey.value || v.username.includes(searchKey.value))
})

</script>

