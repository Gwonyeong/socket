import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    console.log('getHello')
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script src='https://cdn.socket.io/3.1.3/socket.io.min.js'></script>
    

    <!-- <script src='./script/script.js'></script> -->
    <script>
        const socket = io('http://localhost:3000/events');

        const init = () => {
    const userName = 'gwon'
    socket.emit('join-room', userName, (data) => {
        console.log(data);
    });
}

init()
    </script>
</html>`
  }
}
