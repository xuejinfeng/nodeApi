const {pool,router,Result}=require('../connect');
router.all('*',(req,res,next)=>{
  // res.json('我拦截的是/还是/login呢');
  next();
})
router.get('/',(req,res)=>{
  pool.getConnection((err,conn)=>{
    conn.query(`select *
    from userTable`,(e,r)=>res.json(new Result({data:r})));
    conn.release();
  })
})
router.get('/reg',(req,res)=>{
  res.json('reg')
})
module.exports=router;

