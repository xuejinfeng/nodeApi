const {app,pool,Result}=require('./connect');
const login=require('./login/index');
app.all('/',(req,res)=>{
  pool.getConnection((err,conn)=>{
    res.json({a:"b"})
    conn.release();//释放链接池，等待别的连接使用
  })
})
// app.use(path,callback)中的callback既可以是router对象又可以是函数；
// 将一个URL路径与一个函数绑定，第一个参数为访问的路径，如果第一参数为空，
// 则表示任何路径都触发这个处理函数；第二个参数为执行的函数
//app.get(path,callback)中的callback只能是函数
app.use('/login',login);
app.listen(80,()=>console.log('服务启动'));