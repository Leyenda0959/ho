let _0x3e1=function(s){return Buffer.from(s,'base64').toString('utf8')};
let _0xa1=[],_0xb3=()=>{let t=Date.now(),m=2e4;_0xa1=_0xa1.filter(e=>e.timestamp&&t-e.timestamp<=m)};
setInterval(_0xb3,1e3);

module.exports=async(r,s)=>{

s.setHeader(_0x3e1('QWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHM='),true);
s.setHeader(_0x3e1('QWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2lu'),'*');
s.setHeader(_0x3e1('QWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcw=='),_0x3e1('R0VULE9QVElPTlMsUEFUQ0gsREVMRVRFLE5PVEUsUE9TVCxQVVQ='));
s.setHeader(_0x3e1('QWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycw=='),
_0x3e1('WC1DU1JGLVRva2VuLCBYLVJlcXVlc3RlZC1XaXRoLCBBY2NlcHQsIEFjY2VwdC1WZXJzaW9uLCBDb250ZW50LUxlbmd0aCwgQ29udGVudC1NRDUsIENvbnRlbnQtVHlwZSwgRGF0ZSwgWC1BcGktVmVyc2lvbg=='));

if(r.method===_0x3e1('T1BUSU9OUw=='))return s.status(200).end();

try{
let b={};
if(r.body)b=typeof r.body===_0x3e1('c3RyaW5n')?JSON.parse(r.body):r.body;

if(r.method===_0x3e1('R0VU')){
_0xb3();
let z=_0xa1.map(e=>({
placeId:e.placeId,
gameInstanceId:e.gameInstanceId,
animalData:e.animalData||{
displayName:_0x3e1('RGVzY29ub2NpZG8='),
value:0,
generation:_0x3e1('Pw=='),
rarity:_0x3e1('Pw==')
},
expiresIn:Math.max(0,2e4-(Date.now()-e.timestamp))+'ms',
timestamp:e.timestamp
}));

return s.status(200).json({success:true,queueLength:_0xa1.length,activeServers:z,timestamp:new Date().toISOString()});
}

if(r.method===_0x3e1('UE9TVA==')){
let {action,placeId,gameInstanceId,animalData,source}=b;
_0xb3();

if(source===_0x3e1('cm9ibG94X3NjcmlwdA==')&&placeId&&gameInstanceId){
let o={
placeId,
gameInstanceId,
animalData:{
displayName:animalData?.displayName||_0x3e1('RGVzY29ub2NpZG8='),
value:animalData?.value||0,
generation:animalData?.generation||_0x3e1('Pw=='),
rarity:animalData?.rarity||_0x3e1('Pw==')
},
timestamp:Date.now(),
source:_0x3e1('cm9ibG94X2RpcmVjdA=='),
id:placeId+'-'+gameInstanceId+'-'+Date.now()
};
let f=_0xa1.some(x=>x.placeId===placeId&&x.gameInstanceId===gameInstanceId);
if(!f)_0xa1.push(o);
return s.status(200).json({success:true,queueLength:_0xa1.length,added:!f});
}

if(action===_0x3e1('Z2V0VGVsZXBvcnREYXRh')){
if(_0xa1.length>0){
let y=_0xa1[0];
let u=Math.max(0,2e4-(Date.now()-y.timestamp));
return s.status(200).json({success:true,data:{
placeId:y.placeId,gameInstanceId:y.gameInstanceId,
animalData:y.animalData,timeLeft:u,
queuePosition:1,queueLength:_0xa1.length}});
}
return s.status(200).json({success:true,data:null});
}

if(action===_0x3e1('cmVtb3ZlRmlyc3RGcm9tUXVldWU=')){
if(_0xa1.length>0){
let g=_0xa1.shift();
return s.status(200).json({success:true,removed:g.gameInstanceId,queueLength:_0xa1.length});
}
return s.status(200).json({success:true});
}

if(action===_0x3e1('Y2xlYXJRdWV1ZQ==')){
let c=_0xa1.length;_0xa1=[];
return s.status(200).json({success:true,count:c});
}

return s.status(400).json({success:false});
}

return s.status(405).json({success:false});
}catch(e){return s.status(500).json({success:false,error:e.message})}

};
