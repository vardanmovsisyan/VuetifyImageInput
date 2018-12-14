(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("vueclaw")):"function"==typeof define&&define.amd?define(["vueclaw"],b):a.VuetifyImageInput=b(a.VueClaw)})(this,function(a){"use strict";var f=Math.round,g=Math.min,h=Math.max;function b(a,b,c){return g(h(a,b),c)}function c(a){return function(){return a}}function d(a){return"function"==typeof a}function e(a){return d(a)?a:c(a)}a=a&&a.hasOwnProperty("default")?a["default"]:a;var i=function(a,b){var c={};return Object.entries(a).forEach(function(d){var e=d[0],f=d[1];c[e]=b(f,e,a)}),c}({remappedClearIcon:"clearIcon",remappedClearIconStyle:"clearIconStyle",remappedFlipHorizontallyIcon:"flipHorizontallyIcon",remappedFlipHorizontallyIconStyle:"flipHorizontallyIconStyle",remappedFlipVerticallyIcon:"flipVerticallyIcon",remappedFlipVerticallyIconStyle:"flipVerticallyIconStyle",remappedOverlayBackgroundColor:"overlayBackgroundColor",remappedOverlayBorderColor:"overlayBorderColor",remappedRotateClockwiseIcon:"rotateClockwiseIcon",remappedRotateClockwiseIconStyle:"rotateClockwiseIconStyle",remappedRotateCounterclockwiseIcon:"rotateCounterclockwiseIcon",remappedRotateCounterclockwiseIconStyle:"rotateCounterclockwiseIconStyle",remappedScalingSliderColor:"scalingSliderColor",remappedUploadIcon:"uploadIcon",remappedUploadIconStyle:"uploadIconStyle"},function(a){return function(){return e(this[a]).call(this)}}),j=Object.assign({},{checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')","center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return h(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return h(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return h(this.maxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return g(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return g(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.minScaling){case"cover":return h(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return g(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);}return 0},croppingLeft:{get:function(){return f(b(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set:function(a){var b=this,c=b.scaledRotatedInternalImageWidthDifference;this.dirtyOriginLeft=c?a/c:1/2}},croppingTop:{get:function(){return f(b(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set:function(a){var b=this,c=b.scaledRotatedInternalImageHeightDifference;this.dirtyOriginTop=c?a/c:1/2}},relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return f(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return f(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:{get:function(){return b(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set:function(a){this.dirtyScaling=a}},updateImageData:function(){var a=this,b=this,c=b.backgroundColor,d=b.croppingLeft,e=b.croppingTop,f=b.scaling,g=b.debounce,h=b.flippedHorizontally,i=b.flippedVertically,j=b.imageFormat,k=b.imageHeight,l=b.imageQuality,m=b.imageWidth,n=b.internalImageData,o=b.internalImageHeight,p=b.internalImageWidth,q=b.rotated;return setTimeout(function(){var g,b=Math.PI;if(n){var r=new Image;r.src=n;var s=document.createElement("canvas"),t=s.getContext("2d");s.width=m,s.height=k,c&&(t.fillStyle=c,t.fillRect(0,0,m,k)),t.translate(d,e),t.scale(f,f),q&&(t.translate(o,0),t.rotate(b/2)),h&&(t.translate(p,0),t.scale(-1,1)),i&&(t.translate(0,o),t.scale(1,-1)),t.drawImage(r,0,0),h&&(t.translate(m,0),t.scale(-1,1)),i&&(t.translate(0,k),t.scale(1,-1)),g=s.toDataURL("image/"+j,l)}else g=null;a.imageData=g},g)}},i),k={Claw:a},l={backgroundColor:String,clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},clearIconStyle:[Function,Object],debounce:{type:Number,default:0},disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:c({transform:"rotate(90deg)"})},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageFormat:{type:String,default:"png"},imageHeight:{type:Number,default:256},imageQuality:{},imageWidth:{type:Number,default:256},maxScaling:{type:Number,default:1},minScaling:{type:String,default:"cover"},name:String,overlayBackgroundColor:{type:[Function,String],default:"rgba(0,0,0,0.5)"},overlayBorderColor:{type:[Function,String],default:"#fff"},overlayBorderWidth:{type:String,default:"4px"},overlayPadding:{type:String,default:"50px"},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:c({transform:"scaleX(-1)"})},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],scalingSliderColor:[Function,String],uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},m={name:"VImageInput",components:{MyActionButton:{functional:!0,render:function(a,b){var c=b.listeners,d=b.props;return a("VBtn",{class:"ma-1",props:{disabled:d.disabled,flat:!0,icon:!0},on:c},[a("VIcon",{style:d.iconStyle},d.icon)])}},MyUploader:{inject:{theme:{default:{isDark:!1}}},props:["disabled","uploadIcon","uploadIconStyle"],methods:{onChange:function(a){var b=a.target.files;b&&this.uploadFiles(b)},onClick:function(){this.disabled||(this.$refs.input.value=null,this.$refs.input.click())},onDragLeave:function(a){a.preventDefault()},onDragOver:function(a){a.preventDefault()},onDrop:function(a){if(a.preventDefault(),!this.disabled){var b=a.dataTransfer.files;b&&this.uploadFiles(b)}},uploadFile:function(a){var b=this,c=new FileReader;c.addEventListener("load",function(){b.$emit("load",c.result)}),c.readAsDataURL(a)},uploadFiles:function(a){a.length&&this.uploadFile(a[0])}},render:function(a){return a("div",{style:{alignItems:"center",border:"1px dashed rgba("+(this.theme.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",cursor:"pointer",display:"flex",justifyContent:"center"},on:{dragleave:this.onDragLeave,dragover:this.onDragOver,drop:this.onDrop,click:this.onClick}},[a("input",{style:{display:"none"},attrs:{type:"file"},on:{change:this.onChange},ref:"input"}),a("VIcon",{style:this.uploadIconStyle,props:{large:!0}},this.uploadIcon)])}}},directives:k,inject:{theme:{default:{isDark:!1}}},props:l,data:function(){return{dirtyOriginLeft:1/2,dirtyOriginTop:1/2,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:j,watch:{imageData:function(a){this.$emit("input",a)},updateImageData:function(a,b){clearTimeout(b)},value:{handler:function(a){this.load(a)},immediate:!0}},methods:{clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(a){var b=this;if((this.imageData||a)&&this.imageData!==a){var c=new Image;c.addEventListener("load",function(){var d=c.naturalWidth||c.width,e=c.naturalHeight||c.height;d&&e?(b.internalImageData=a,b.internalImageWidth=d,b.internalImageHeight=e,b.flippedHorizontally=!1,b.flippedVertically=!1,b.rotated=!1,b.scaling=0,b.dirtyOriginLeft=1/2,b.dirtyOriginTop=1/2):b.internalImageData=null}),c.src=a}},onPan:function(a){this.croppingLeft+=a.x-a.previousX,this.croppingTop+=a.y-a.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;var a=this,b=a.dirtyOriginTop;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-b},rotateCounterclockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);var a=this,b=a.dirtyOriginLeft;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-b},scaleTo:function(a){this.scaling=a}},render:function(a){return a("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},this.fullHeight?{height:"100%"}:{},this.fullWidth?{width:"100%"}:{})},[a("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[a("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%",zIndex:0},this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}),[a("div",{style:{boxShadow:"0 0 4000px 4000px "+this.remappedOverlayBackgroundColor,maxHeight:"100%",maxWidth:"100%",outline:this.overlayBorderWidth+" solid "+this.remappedOverlayBorderColor,pointerEvents:"none"}},[a("div",{style:Object.assign({},{height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px",zIndex:-1},this.backgroundColor?{backgroundColor:this.backgroundColor}:{})},(this.internalImageData?[a("img",{style:{pointerEvents:"none",position:"absolute",transform:["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)","scale("+this.scaling+")"].concat(this.rotated?["translateX("+this.internalImageHeight+"px)","rotate(90deg)"]:[],this.flippedVertically?["translateY("+this.internalImageHeight+"px)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX("+this.internalImageWidth+"px)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[]).concat(this.internalImageData&&this.imageData?[a("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]))])])].concat(this.internalImageData||this.readonly?[]:[a("MyUploader",{props:{disabled:this.disabled,uploadIcon:this.remappedUploadIcon,uploadIconStyle:this.remappedUploadIconStyle},style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),a("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center"},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},(this.clearable?[a("MyActionButton",{props:{disabled:this.disabled,icon:this.remappedClearIcon,iconStyle:this.remappedClearIconStyle},on:{click:this.clear}}),a("VSpacer")]:[]).concat(this.hideActions||this.readonly?[]:[a("MyActionButton",{props:{disabled:this.disabled,icon:this.remappedRotateClockwiseIcon,iconStyle:this.remappedRotateClockwiseIconStyle},on:{click:this.rotateClockwise}}),a("MyActionButton",{props:{disabled:this.disabled,icon:this.remappedRotateCounterclockwiseIcon,iconStyle:this.remappedRotateCounterclockwiseIconStyle},on:{click:this.rotateCounterclockwise}}),a("MyActionButton",{props:{disabled:this.disabled,icon:this.remappedFlipHorizontallyIcon,iconStyle:this.remappedFlipHorizontallyIconStyle},on:{click:this.flipHorizontally}}),a("MyActionButton",{props:{disabled:this.disabled,icon:this.remappedFlipVerticallyIcon,iconStyle:this.remappedFlipVerticallyIconStyle},on:{click:this.flipVertically}})])),a("div",{style:Object.assign({},{gridColumn:1,gridRow:2},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.hideActions||this.readonly?[]:[a("VSlider",{class:"mx-2 my-1",props:{color:this.remappedScalingSliderColor,disabled:this.disabled,hideDetails:!0,max:this.computedMaxScaling,min:this.computedMinScaling,step:1/1e3,value:this.scaling},on:{input:this.scaleTo}})])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(m.name,m),m});
