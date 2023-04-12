const express=require('express');
const userRouter= require('./routers/userRouter');
const movieRouter= require('./routers/movieRouter');
const memberRouter= require('./routers/memberRouter');
const subscriptionRouter= require('./routers/subscriptionsRouter');

const authControler=require('./routers/authControler')

var cors=require('cors') //מבטלים את החסימה

const app = express();

app.use(cors())
require('./confing/database') //התחברות לדטהביס

app.use(express.json())

app.use("/api/users",userRouter);
app.use("/api/movies",movieRouter);
app.use("/api/members",memberRouter);
app.use("/api/subs",subscriptionRouter);

// app.use("/api/auth",authControler);



app.listen(8000);