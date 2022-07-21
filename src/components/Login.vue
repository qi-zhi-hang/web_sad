<template>
	<div class="login_contain">
		<div class="login">
			<div class="avator_box">
				<img src="../assets/logo.png" alt="">
			</div>
			<div class="login_input">
				<el-form ref="ruleForm2Ref" :model="ruleForm2" :rules="loginRule" status-icon   label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用户名" prop="user_name">
					<el-input type="text" v-model="ruleForm2.user_name"   auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
				  </el-form-item>
				 
				  <el-form-item>
					<el-button type="primary" @click="submitForm()">提交</el-button>
					<el-button @click="resetForm()">重置</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
			return {
				ruleForm2: {
				  user_name: '',
				  password: '',
				},
				idss:[],
				loginRule:{
					user_name:[
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password:[
						{ required: true, message: '请输入密码', trigger: 'blur' }
					]
					
				}
				
			}
		},
		methods:{
			submitForm(){
				this.$refs.ruleForm2Ref.validate(async valid=>{
					if(!valid){
						this.$message.error("参数不足")
						return
					}

				 await	this.$http.post('/api/login',{user_name:this.ruleForm2.user_name,password:this.ruleForm2.password}).then(res=>{
						const {data} = res
						if(data.code === 200){
								const token = data.data.token
								console.log(token)
								window.sessionStorage.setItem('token',token)
								this.$router.push('/')

						}else{
							this.$message.error("登录失败")
						}
					})
					
				})		
			},
			resetForm(){
				this.$refs.ruleForm2Ref.resetFields();
			},
			worldClick(param){
				console.log(88888,param)
			}
		},
		created(){

			const token = window.sessionStorage.getItem('token')
			if(token){
				this.$router.push('/')
			}
		}
	}
	
	
</script>

<style lang="scss" scoped>
	.login_contain{
		background-color: #2b4b6b;
		height: 100%;
	}
	.login{
		width: 450px;
		height: 300px;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border-radius: 3px;
		cursor: pointer;
		.avator_box{
			width: 130px;
			height: 130px;
			border: 1px solid #eee;
			border-radius: 50%;
			padding: 10px;
			box-shadow: 0 0 10px;
			position: absolute;
			left: 50%;
			transform: translate(-50%,-50%);
			img{
				width: 130px;
				height: 130px;
				border-radius: 50%;
				background-color: #eee	
			}
			
		}
		
		
	}
	.login_input{
		width: 90%;
		position: absolute;
		top:30%;
	}
</style>
