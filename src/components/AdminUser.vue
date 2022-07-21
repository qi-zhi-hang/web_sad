<template>
  <div>
    <el-form :inline="true" :model="userForm" class="demo-form-inline">
      <el-form-item label="用户名称">
        <el-input v-model="userForm.userName" placeholder="用户名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-button type="danger" @click="addAdmin">新增管理员</el-button>
    </el-form>

    <el-table :data="tableData" border style="width: 75%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="新增管理员"
      :visible.sync="centerDialogVisible"
      width="80%"
      center
    >
      <el-form ref="form" :model="form" :rules="addRule" label-width="80px">
        <el-form-item label="管理员名称">
          <el-input v-model="form.adminNname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="管理员组">
          <el-select v-model="form.grop_id" placeholder="管理员组">
            <el-option label="超级管理员" value="1"></el-option>
            <el-option label="一级商户" value="2"></el-option>
            <el-option label="二级商户" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="初始化状态">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      userForm: {
        userName: "",
      },
      centerDialogVisible: false,
      form: {
        adminNname: "",
        password: "",
        grop_id: "",
      },
      addRule: {
        adminNname: [
          { required: true, message: "请输入管理员名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        grop_id: [{ required: true, message: "请选择组名", trigger: "blur" }],
      },
    };
  },
  methods: {
    addAdmin() {
      this.centerDialogVisible = true;
    },
    onSubmit() {},
    addOnSubmit() {},
  },
};
</script>