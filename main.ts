import{mkdirSync,readdirSync,readFileSync,writeFileSync}from"node:fs";
const T="!2R%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const d of readdirSync(I).sort()){
const p=readFileSync(I+"/"+d+"/program.bin"),q=readFileSync(I+"/"+d+"/input.bin"),D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256);
let s=0,c=0,pc=0,t=0,ip=0,o="",e=0;
for(;;){
if(t===1e6){e=10;break}
if(pc<0||pc>=p.length){e=9;break}
const op=p[pc],n=T.charCodeAt(op)-33;
if(op>83||n<0||n>79){e=5;break}
const k=n>>4,im=k>2?4:k,po=(n>>2)&3,pu=n&3;
if(pc+im>=p.length){e=9;break}
t++;
if(s<po){e=2;break}
if(s-po+pu>256){e=3;break}
const nx=pc+1+im;pc=nx;
if(op<8){
if(op===0){e=0;break}
if(op===1)D[s++]=(p[nx-1]<<24)>>24;
else if(op===2)D[s++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;
else if(op===3)s--;
else if(op===4){D[s]=D[s-1];s++}
else if(op===5){const x=D[s-1];D[s-1]=D[s-2];D[s-2]=x}
else if(op===6){D[s]=D[s-2];s++}
else{const x=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=x}
continue}
if(op>15&&op<35&&op!==23&&op!==27){
const b=D[--s],a=D[s-1];let r;
if(op===16)r=a+b|0;
else if(op===17)r=a-b|0;
else if(op===18)r=Math.imul(a,b);
else if(op===19){if(!b){e=4;break}r=a/b|0}
else if(op===20){if(!b){e=4;break}r=a%b|0}
else if(op===21){if(!b){e=4;break}r=(a>>>0)/(b>>>0)|0}
else if(op===22){if(!b){e=4;break}r=(a>>>0)%(b>>>0)|0}
else if(op===24)r=a&b;
else if(op===25)r=a|b;
else if(op===26)r=a^b;
else if(op===28)r=a<<b;
else if(op===29)r=a>>b;
else if(op===30)r=a>>>b|0;
else if(op===32)r=a===b?1:0;
else if(op===33)r=a<b?1:0;
else r=(a>>>0)<(b>>>0)?1:0;
D[s-1]=r;
continue}
if(op===23){D[s-1]=-D[s-1]|0;continue}
if(op===27){D[s-1]=~D[s-1];continue}
if(op>=48&&op<51){
const r=((p[nx-2]|p[nx-1]<<8)<<16)>>16;
if(op===48||(op===49)===(D[--s]===0))pc=nx+r;
continue}
if(op===51){if(c===64){e=7;break}C[c++]=nx;pc=p[nx-2]|p[nx-1]<<8;continue}
if(op===52){if(!c){e=8;break}pc=C[--c];continue}
if(op===64){const a=D[s-1];if(a<0||a>255){e=6;break}D[s-1]=M[a];continue}
if(op===65){const a=D[s-1];if(a<0||a>255){e=6;break}s-=2;M[a]=D[s];continue}
if(op===80){const v=D[s-1],w=String(v);if(o.length+w.length>65536){e=11;break}s--;o+=w;continue}
if(op===81){if(o.length+1>65536){e=11;break}o+=String.fromCharCode(D[--s]&255);continue}
if(op===82){D[s++]=ip<q.length?q[ip++]:-1;continue}
e=D[--s]&255;break}
mkdirSync(O+"/"+d,{recursive:true});
writeFileSync(O+"/"+d+"/stdout.bin",Buffer.from(o,"latin1"));
writeFileSync(O+"/"+d+"/exit.txt",e+"\n")}
