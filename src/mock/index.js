import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600' // 请求到响应的时间间隔
})

// 定义一个函数，参数是url和其他东西
Mock.mock('http://localhost:8081/login_in',{
	code:200,
	msg:'登录成功',
	data:{
		'token':'@email',
		'id':'@id'
		}
});



Mock.mock('http://localhost:8001/api/menu',{
	code:200,
	msg:'success',
	data: [
		{ id: 1, name: '@email' },
		{ id: 2, name: '@email' },
		{ id: 3, name: '@email' },
		{ id: 4, name: '@email' },
		{ id: 5, name: '@email' },
		{ id: 6, name: '@email' },
		{ id:7,name:'@email'},
		{ id: 8, name: '@email' },
		{ id: 9, name: '@email' },
		{ id:10,name:'@email'},
	]
});
