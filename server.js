const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 4000
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)



////////////////////
app.set('views',"./views")
app.set('view engine' ,'ejs')

/// set stacic folder
 app.use(express.static(path.join(__dirname,"public")))

 ////////////////////////
 app.use(express.urlencoded({extended:true}))

 const rooms = {}

 app.get('/',(req,res)=>{
  res.render('index' )
 })

 app.get('/singleplayer',(req,res)=>{
  res.render('singleplayer.ejs')
 })
 app.get('/room', (req,res) =>{
  res.render('room.ejs' , {rooms: rooms })
 })
 app.post('/multiplayer',(req, res)=>{
   if(rooms[req.body.room] != null){
     return res.redirect('/room')
   }
   rooms[req.body.room] = { user: {} }
   res.redirect(req.body.room)

 })

 app.get('/:multiplayer', (req,res) =>{
  res.render('multiplayer.ejs',{roomName:req.params.room} ) 
})


// server listen
server.listen(PORT,()=> console.log(`server running on port ${PORT}`))

////////////////////handel asocket connection from web client
const connections = [null,null]
io.on('connection',socket =>{
    ///consollog new WS connection
    console.log('new WS connection')
    /// find avalible player number
    let playerIndex =-1
    for(const i in connections){
        if (connections[i] === null){
            playerIndex = i
            break
        }
    }

    var v=false;
    //// tell the connectind client what player number they r
    socket.emit('player-number',playerIndex)
    console.log(`player ${playerIndex} has connected `)
    
    //ignor player 3
    if(playerIndex === -1) 
    return
    connections[playerIndex]=false
    //tell everyone what player number just connected
    socket.broadcast.emit("player-connection",playerIndex)

    // Handle Diconnect
  socket.on('disconnect', () => {
    console.log(`Player ${playerIndex} disconnected`)
    connections[playerIndex] = null
    //Tell everyone what player numbe just disconnected
    socket.broadcast.emit('player-connection', playerIndex)
    var v=true;
    socket.broadcast.emit('refresh',v);
  })


  //on ready
  socket.on('player-ready', () => {
    socket.broadcast.emit('enemy-ready',playerIndex)
    connections[playerIndex]=true
  })


  //////////
  //check player connection
  socket.on('check-players', ()=>{
    const players = []
    for(const i in connections){
      connections[i]===null ? players.push({connected:false ,ready:false}) : players.push({connected:true,ready:connections[i]})

    }
    socket.emit('check-players',players)
  })
  


  /////////


  socket.on('sender', send =>{
    console.log(send)
    socket.broadcast.emit('reciv', send)
    
  })
})

