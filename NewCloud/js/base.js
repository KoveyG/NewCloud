const bases=[{
    "widget": {
        "type": "text",//类型
        "width":"250px",
        // "height":"36px",
        "nowheight":"36px",
        "minheight":"50px",
        'fontFamily':'微软雅黑',
        'fontSize':'24px',
        'fontLine':'30px',
        'fontLetter':'2px',
        'colors':'#312829',
        'bgcolors':'rgba(255,255,0,0)',
        'fontWeight':'normal',
        'fontStyle':'normal',
        'textDecoration':'none', 
        'textAlign':'center',
        'events':'请选择点击事件',
        'eventtype':'',
        'eurl':'javascript:void(0)',
        'eventurl':'http://www.baidu.com',
        'eventloc':'请选择锚点',
        'eventtel':'13888888888',
        'eventsms':'13888888888',
        'urlshow':false,
        'locshow':false,
        'telshow':false,
        'smsshow':false,
        'lefts':'60px',
        'tops':'10px',
        'value':'双击可输入文本',
        "hasvalue": false,
        "noRepeat": false,
        "opcontrol":true,
        "opwidth":360,
        "opheight":69,
        "index":true,
        "pointerevents":'none'
    },
    "description": "文本",
    "show":true,//部件列表隐藏显示
    "spanshow":true,//部件列表是否可编辑
    "isshow":true,
    "control":true,
    "use":true,//左侧可用标识
    "pitch":false,
    "label": "文本"
}, {
    "widget": {
        "type": "image",
        "width":"200px",
        "height":"200px",
        "nowheight":"200px",
        "src":"images/filebg.jpg",
        'events':'请选择点击事件',
        'eventtype':'',
        'eurl':'javascript:void(0)',
        'eventurl':'http://www.baidu.com',
        'eventloc':'请选择锚点',
        'eventtel':'13888888888',
        'eventsms':'13888888888',
        'urlshow':false,
        'locshow':false,
        'telshow':false,
        'smsshow':false,
        'opacity':'1',
        'rotate':'0',
        'lefts':'60px',
        'tops':'10px',
        'hassize':true,
        'hasloc':true,
        'hasopacity':true,
        'hasrotate':true,
        'imgroom':false,
        "opcontrol":true,
        "opwidth":100,
        "opheight":37,
        "index":true,
        "pointerevents":'none'
    },
    "description": "图片",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "图片"
}, {
    "widget": {
        "type": "btn",
        "width":"150px",
        "height":"50px",    
        "nowheight":"50px",
        "hasvalue":true,
        'value':'提交',
        'fontFamily':'微软雅黑',
        'btnstyle':'btn1',
        'fontSize':'20px',
        'fontLine':'36px',
        'fontLetter':'2px',
        'colors':'#312829',
        'bgcolors':'#91abce',
        'events':'请选择点击事件',
        'eventtype':'',
        'eurl':'javascript:void(0)',
        'eventurl':'http://www.baidu.com',
        'eventloc':'锚点名称',
        'eventtel':'13888888888',
        'eventsms':'13888888888',
        'urlshow':false,
        'locshow':false,
        'telshow':false,
        'smsshow':false,
        'lefts':'60px',
        'tops':'10px',
        "loc":'left:20px;top:20px;',
        'placeholder':'',
        "opcontrol":true,
        "opwidth":430,
        "opheight":37,
        "index":true,
        "pointerevents":'none'
    },
    "description": "按钮",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "按钮"
}, {
    "widget": {
        "type": "video",
        "width":"335px",
        "height":"251px",     
        "nowheight":"251px",
        'lefts':'60px',
        'tops':'10px',
        'hassize':true,
        'hasloc':true,
        'hasvideo':true,
        'imgroom':false,
        "opcontrol":true,
        "opwidth":100,
        "opheight":37,
        "index":true,
        'videotype':'iframe',
        'videosrc':'http://vjs.zencdn.net/v/oceans.mp4',
        'videostring':"<iframe height=498 width=800 src='http://player.youku.com/embed/XMjIyMjA4OTky' frameborder=0 'allowfullscreen'></iframe>",
        "pointerevents":'none',
    },
    "description": "视频",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "视频"
}, {
    "widget": {
        "type": "audio",
        "width":"40px",
        "height":"40px",   
        "nowheight":"40px",
        'lefts':'60px',
        'tops':'10px',
        'hassize':true,
        'hasloc':true,
        'hasaudio':true,
        'audiostyle':'iconfont icon-yinpin3',
        'hasstylesize':true,
        'stylesize':'35px',
        'audioauto':false,
        'audioroom':true,
        'hasauto':true,
        'audioroom':false,
        "opcontrol":false,
        "opwidth":100,
        "opheight":37,
        "index":true,
        'audiosrc':'http://ar.h5.ra01.sycdn.kuwo.cn/resource/n3/192/25/34/2159345605.mp3',
        "pointerevents":'none'
    },
    "description": "音频",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "音频"
}, {
    "widget": {
        "type": "location",
        "locname": "锚点名称",
        "width":"25px",
        "height":"25px", 
        "nowheight":"25px",
        'lefts':'60px',
        'tops':'10px',
        'hasloc':true,
        "opcontrol":false,
        "opwidth":100,
        "opheight":37,
        "index":true,
        "pointerevents":'none'
    },
    "description": "锚点",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "锚点"
}, {
    "widget": {
        "type": "polygon",
        "op":false,
        "opwidth":300,
        "opheight":37,
        "index":true,
    },
    "description": "多边形",
    "use":false,
    "label": "多边形"
}, {
    "widget": {
        "type": "CountDown",
        "op":false,
        "opwidth":300,
        "opheight":37,
        "index":true,
    },
    "description": null,
    "use":false,
    "label": "倒计时"
}, {
    "widget": {
        "type": "Mimg",
        "op":false,
        "opwidth":300,
        "opheight":37,
        "index":true,
    },
    "description": null,
    "use":false,
    "label": "多图"
}];
const boss=[{
    "widget": {
        "type": "liuyanban",
        'btnval':'提交',
        "width":"300px",
        // "height":"400px",
        "nowheight":"400px",
        "hasvalue":true,
        'value':'提交',
        'placeholder':'请输入关键词',
        'colors':'#000',
        'bordercolors':'#000',
        'bgcolors':'rgba(255,255,0,0)',
        'btcolors':'#8fa7e6',
        'lefts':'60px',
        'tops':'10px',
        "noRepeat": false,
        "opcontrol":true,
        "opwidth":118,
        "opheight":37,
        "index":true,
        "pointerevents":'none',
        'form':[
            {type:'stext',name:'单行文本',val:'姓名',k:'',hasregx:false,regx:'text',must:true,opshow:false},
            {type:'stext',name:'单行文本',val:'电话',k:'',hasregx:true,regx:'tel',must:true,opshow:false},
            {type:'stext',name:'单行文本',val:'邮箱',k:'',hasregx:true,regx:'email',must:false,opshow:false},
            {type:'dbtext',name:'多行文本',val:'留言',lnum:'2',k:'',must:true,opshow:false},
            {type:'radio',name:'单选',cue:'单选',val:[{k:'',val:'请选择'},{k:'',val:'单选项1'},{k:'',val:'单选项2'},{k:'',val:'单选项3'}],k:'',must:false,opshow:false},
            {type:'checkbox',name:'多选',cue:'多选',val:[{k:'',val:'多选项1'},{k:'',val:'多选项2'},{k:'',val:'多选项3'}],k:'',must:false,opshow:false},
        ],
        'addform':true,
        "pointerevents":'none'
    },
    "description": "预约",
    "show":true,
    "spanshow":true,
    "isshow":true,
    "control":true,
    "use":true,
    "label": "预约"
}, {
    "widget": {
        "type": "yuyinliuyan",
        "op":false,
        "opwidth":300,
        "opheight":37,
        "index":true,
    },
    "description": null,
    "use":false,
    "label": "语音"
}];