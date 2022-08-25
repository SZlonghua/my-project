<template>
  <div id='' class='letter-content'>
    <div class="header">
      <div class="total">
        共0封邮件
      </div>
      <div>
        <el-button class="markReaded" size="small">全部标为已读</el-button>
      </div>
      <div class="page">
        <span>0 / 0页&nbsp;</span>
        <el-button size="mini">上一页</el-button>
        <el-button size="mini">下一页</el-button>
      </div>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th width="22%">发件人</th>
            <th width="59%">主题</th>
            <th width="19%">日期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style="letter-spacing: -1px">1053595189@qq.com</th>
            <th style="letter-spacing: -1px">item.subject</th>
            <th>item.date</th>
            <th><i class="el-icon-star-on"></i></th>
          </tr>
          <tr class="notRead">
            <th style="letter-spacing: -1px">1053595189@qq.com</th>
            <th style="letter-spacing: -1px">item.subject</th>
            <th>item.date</th>
            <th><i class="el-icon-star-off"></i></th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="header footer">
      <div class="page">
        <span>0 / 0页&nbsp;</span>
        <el-button size="mini">上一页</el-button>
        <el-button size="mini">下一页</el-button>
      </div>
    </div>
  </div>
  
</template>
<script>
  export default {
    name: 'inbox'
  }
</script>
<style>
.letter-content {
  height: 100%;
  width: 100%;
  min-width: 490px;
  padding: 0 5px;
  box-sizing: border-box;
  overflow-y: auto;
}
.letter-content .header {
  height: 40px;
  border-bottom: 1px solid #409EFF;
  line-height: 40px;
  width: 100%;
}
.letter-content .header div {
  display: inline-block;
}
.letter-content .header .total {
  margin-left: 15px;
  margin-right: 15px;
}
.letter-content .header .markReaded {
  transform: translateY(-1px);
}
.letter-content .header .page {
  float: right;
}
.letter-content .header .page .el-button {
  transform: translateY(-1px);
}
.letter-content .header .page a {
  cursor: pointer;
  color: #000;
  user-select: none;
}
.letter-content .header .page a:hover {
  text-decoration: underline;
}

table {
  width: 100%;
  color: #545454;
  font-size: 15px;
}
table thead {
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ebeef5;
}
table thead tr th {
  font-weight: normal !important;
}
table thead tr th, table tbody tr th{
  text-align: start;
}
table tbody tr {
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #ebeef5;
  height:30px;
  cursor: pointer;
  transition: all .3s;
}
table tbody tr:hover {
  background: #eae9e9;
}
table tbody tr.notRead th {
  font-weight: normal !important;
}

table tbody tr th .el-icon-star-on {
  color: #409EFF;
}

.letter-content .footer {
  border-bottom: none;
}
</style>
