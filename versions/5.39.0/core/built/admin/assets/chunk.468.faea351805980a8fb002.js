"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[468],{15673:(t,e,n)=>{n.d(e,{T:()=>u,l:()=>p})
var i=n(88521),s=n(16140),a=n(8651),r=n(12058),o=n(618),c=n(17827)
function _(){const t=this.getScope()
if(t){const e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function d(t,e,n){if(!(0,r.z)(e))return t.sampled=!1,t
if(void 0!==t.sampled)return t.setMetadata({sampleRate:Number(t.sampled)}),t
let a
return"function"==typeof e.tracesSampler?(a=e.tracesSampler(n),t.setMetadata({sampleRate:Number(a)})):void 0!==n.parentSampled?a=n.parentSampled:void 0!==e.tracesSampleRate?(a=e.tracesSampleRate,t.setMetadata({sampleRate:Number(a)})):(a=1,t.setMetadata({sampleRate:a})),o=a,((0,s.i2)(o)||"number"!=typeof o&&"boolean"!=typeof o?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`),0):!(o<0||o>1)||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${o}.`),0))?a?(t.sampled=Math.random()<a,t.sampled?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(a)})`),t)):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)
var o}function l(t,e){const n=this.getClient(),s=n&&n.getOptions()||{},a=s.instrumenter||"sentry",r=t.instrumenter||"sentry"
a!==r&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${a}\` instrumenter.\nThe transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`),t.sampled=!1)
let o=new c.Y(t,this)
return o=d(o,s,{parentSampled:t.parentSampled,transactionContext:t,...e}),o.sampled&&o.initSpanRecorder(s._experiments&&s._experiments.maxSpans),n&&n.emit&&n.emit("startTransaction",o),o}function p(t,e,n,i,s,a,r){const c=t.getClient(),_=c&&c.getOptions()||{}
let l=new o.io(e,t,n,i,r,s)
return l=d(l,_,{parentSampled:e.parentSampled,transactionContext:e,...a}),l.sampled&&l.initSpanRecorder(_._experiments&&_._experiments.maxSpans),c&&c.emit&&c.emit("startTransaction",l),l}function u(){const t=(0,a.cu)()
t.__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=l),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=_))}},618:(t,e,n)=>{n.d(e,{AT:()=>o,io:()=>_})
var i=n(88468),s=n(88521),a=n(3),r=n(17827)
const o={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3}
class c extends a.gB{constructor(t,e,n,i){super(i),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=n}add(t){t.spanId!==this.transactionSpanId&&(t.finish=e=>{t.endTimestamp="number"==typeof e?e:(0,i._I)(),this._popActivity(t.spanId)},void 0===t.endTimestamp&&this._pushActivity(t.spanId)),super.add(t)}}class _ extends r.Y{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._idleTimeoutCanceledPermanently=!1}__init5(){this._beforeFinishCallbacks=[]}constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.idleTimeout,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.finalTimeout,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.heartbeatInterval,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
super(t,e),this._idleHub=e,this._idleTimeout=n,this._finalTimeout=i,this._heartbeatInterval=a,this._onScope=r,_.prototype.__init.call(this),_.prototype.__init2.call(this),_.prototype.__init3.call(this),_.prototype.__init4.call(this),_.prototype.__init5.call(this),r&&(d(e),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),e.configureScope((t=>t.setSpan(this)))),this._restartIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this.finish())}),this._finalTimeout)}finish(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i._I)()
if(this._finished=!0,this.activities={},this.spanRecorder){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op)
for(const e of this._beforeFinishCallbacks)e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanId===this.spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
const n=e.startTimestamp<t
return n||("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(e,void 0,2)),n})),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] flushing IdleTransaction")}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] No active IdleTransaction")
return this._onScope&&d(this._idleHub),super.finish(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){if(!this.spanRecorder){const e=t=>{this._finished||this._pushActivity(t)},n=t=>{this._finished||this._popActivity(t)}
this.spanRecorder=new c(e,n,this.spanId,t),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(t){let{restartOnChildSpanChange:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{restartOnChildSpanChange:!0}
this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,this._idleTimeoutCanceledPermanently=!1===e,0===Object.keys(this.activities).length&&this._idleTimeoutCanceledPermanently&&this.finish(t))}_restartIdleTimeout(t){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||this.finish(t)}),this._idleTimeout)}_pushActivity(t){this.cancelIdleTimeout(),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] popActivity ${t}`),delete this.activities[t],("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){const t=(0,i._I)()
this._idleTimeoutCanceledPermanently?this.finish(t):this._restartIdleTimeout(t+this._idleTimeout/1e3)}}_beat(){if(this._finished)return
const t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.finish()):this._pingHeartbeat()}_pingHeartbeat(){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),this._heartbeatInterval)}}function d(t){const e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}},3:(t,e,n)=>{n.d(e,{Dr:()=>c,Zd:()=>_,gB:()=>o})
var i=n(7209),s=n(88468),a=n(88521),r=n(15834)
class o{__init(){this.spans=[]}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
o.prototype.__init.call(this),this._maxlen=t}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class c{__init2(){this.traceId=(0,i.DM)()}__init3(){this.spanId=(0,i.DM)().substring(16)}__init4(){this.startTimestamp=(0,s._I)()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(t){if(c.prototype.__init2.call(this),c.prototype.__init3.call(this),c.prototype.__init4.call(this),c.prototype.__init5.call(this),c.prototype.__init6.call(this),c.prototype.__init7.call(this),!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp),t.instrumenter&&(this.instrumenter=t.instrumenter)}startChild(t){const e=new c({...t,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId})
if(e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e),e.transaction=this.transaction,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&e.transaction){const n=`[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`
e.transaction.metadata.spanMetadata[e.spanId]={logMessage:n},a.kg.log(n)}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setStatus(t){return this.status=t,this}setHttpStatus(t){this.setTag("http.status_code",String(t))
const e=_(t)
return"unknown_error"!==e&&this.setStatus(e),this}isSuccess(){return"ok"===this.status}finish(t){if(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId]
t&&a.kg.log(t.replace("Starting","Finishing"))}this.endTimestamp="number"==typeof t?t:(0,s._I)()}toTraceparent(){let t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${t}`}toContext(){return(0,r.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(t){return this.data=t.data||{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=t.spanId||this.spanId,this.startTimestamp=t.startTimestamp||this.startTimestamp,this.status=t.status,this.tags=t.tags||{},this.traceId=t.traceId||this.traceId,this}getTraceContext(){return(0,r.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return(0,r.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function _(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},17827:(t,e,n)=>{n.d(e,{Y:()=>c})
var i=n(88521),s=n(15834),a=n(26939),r=n(8651),o=n(3)
class c extends o.Dr{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(t,e){super(t),c.prototype.__init.call(this),c.prototype.__init2.call(this),c.prototype.__init3.call(this),this._hub=e||(0,r.Gd)(),this._name=t.name||"",this.metadata={source:"custom",...t.metadata,spanMetadata:{}},this._trimEnd=t.trimEnd,this.transaction=this
const n=this.metadata.dynamicSamplingContext
n&&(this._frozenDynamicSamplingContext={...n})}get name(){return this._name}set name(t){this.setName(t)}setName(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom"
this._name=t,this.metadata.source=e}initSpanRecorder(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
this.spanRecorder||(this.spanRecorder=new o.gB(t)),this.spanRecorder.add(this)}setContext(t,e){null===e?delete this._contexts[t]:this._contexts[t]=e}setMeasurement(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
this._measurements[t]={value:e,unit:n}}setMetadata(t){this.metadata={...this.metadata,...t}}finish(t){if(void 0!==this.endTimestamp)return
this.name||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(t)
const e=this._hub.getClient()
if(e&&e.emit&&e.emit("finishTransaction",this),!0!==this.sampled)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(e&&e.recordDroppedEvent("sample_rate","transaction"))
const n=this.spanRecorder?this.spanRecorder.spans.filter((t=>t!==this&&t.endTimestamp)):[]
this._trimEnd&&n.length>0&&(this.endTimestamp=n.reduce(((t,e)=>t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t)).endTimestamp)
const s=this.metadata,a={contexts:{...this._contexts,trace:this.getTraceContext()},spans:n,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...s,dynamicSamplingContext:this.getDynamicSamplingContext()},...s.source&&{transaction_info:{source:s.source}}}
return Object.keys(this._measurements).length>0&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),a.measurements=this._measurements),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&i.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(a)}toContext(){const t=super.toContext()
return(0,s.Jr)({...t,name:this.name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this.name=t.name||"",this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext
const t=this._hub||(0,r.Gd)(),e=t&&t.getClient()
if(!e)return{}
const{environment:n,release:i}=e.getOptions()||{},{publicKey:o}=e.getDsn()||{},c=this.metadata.sampleRate,_=void 0!==c?c.toString():void 0,d=t.getScope(),{segment:l}=d&&d.getUser()||{},p=this.metadata.source,u=p&&"url"!==p?this.name:void 0
return(0,s.Jr)({environment:n||a.J,release:i,transaction:u,user_segment:l,public_key:o,trace_id:this.traceId,sample_rate:_})}}},85582:(t,e,n)=>{n.d(e,{x1:()=>s})
var i=n(8651)
function s(t){const e=(t||(0,i.Gd)()).getScope()
return e&&e.getTransaction()}},12058:(t,e,n)=>{n.d(e,{z:()=>s})
var i=n(8651)
function s(t){if("boolean"==typeof __SENTRY_TRACING__&&!__SENTRY_TRACING__)return!1
const e=(0,i.Gd)().getClient(),n=t||e&&e.getOptions()
return!!n&&(n.enableTracing||"tracesSampleRate"in n||"tracesSampler"in n)}},98219:(t,e,n)=>{n.d(e,{r:()=>d})
var i=n(8651),s=n(15673),a=n(30180),r=n(85582),o=n(8142),c=n(88521)
function _(){const t=(0,r.x1)()
if(t){const e="internal_error";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&c.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}function d(){(0,s.T)(),(0,a.KV)()&&function(){const e=(0,i.cu)()
if(!e.__SENTRY__)return
const n={mongodb:()=>new((0,a.l$)(t,"./node/integrations/mongo").Mongo),mongoose:()=>new((0,a.l$)(t,"./node/integrations/mongo").Mongo)({mongoose:!0}),mysql:()=>new((0,a.l$)(t,"./node/integrations/mysql").Mysql),pg:()=>new((0,a.l$)(t,"./node/integrations/postgres").Postgres)},s=Object.keys(n).filter((t=>!!(0,a.$y)(t))).map((t=>{try{return n[t]()}catch(t){return}})).filter((t=>t))
s.length>0&&(e.__SENTRY__.integrations=[...e.__SENTRY__.integrations||[],...s])}(),(0,o.o)("error",_),(0,o.o)("unhandledrejection",_)}t=n.hmd(t)},98468:(t,e,n)=>{n.r(e),n.d(e,{BROWSER_TRACING_INTEGRATION_ID:()=>ot,BrowserTracing:()=>_t,IdleTransaction:()=>a.io,Integrations:()=>s,Span:()=>r.Dr,SpanStatus:()=>i,TRACEPARENT_REGEXP:()=>o.K,Transaction:()=>c.Y,addExtensionMethods:()=>u.r,defaultRequestInstrumentationOptions:()=>at,extractTraceparentData:()=>o.q,getActiveTransaction:()=>_.x1,hasTracingEnabled:()=>d.z,instrumentOutgoingRequests:()=>rt,spanStatusfromHttpCode:()=>r.Zd,startIdleTransaction:()=>l.l,stripUrlQueryAndFragment:()=>p.rt})
var i,s={}
n.r(s),n.d(s,{Apollo:()=>U,BrowserTracing:()=>_t,Express:()=>E,GraphQL:()=>G,Mongo:()=>k,Mysql:()=>N,Postgres:()=>R,Prisma:()=>B}),function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(i||(i={}))
var a=n(618),r=n(3),o=n(75492),c=n(17827),_=n(85582),d=n(12058),l=n(15673),p=n(72702),u=n(98219)
function h(t){let e,n=t[0],i=1
for(;i<t.length;){const s=t[i],a=t[i+1]
if(i+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return
"access"===s||"optionalAccess"===s?(e=n,n=a(n)):"call"!==s&&"optionalCall"!==s||(n=a((function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s]
return n.call(e,...i)})),e=void 0)}return n}var m=n(88521),g=n(14205),f=n(16140)
function T(t){const e=h([t,"call",t=>t(),"access",t=>t.getClient,"call",t=>t(),"optionalAccess",t=>t.getOptions,"call",t=>t()])
return"sentry"!==(h([e,"optionalAccess",t=>t.instrumenter])||"sentry")}class E{static __initStatic(){this.id="Express"}__init(){this.name=E.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
E.prototype.__init.call(this),this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(t,e){this._router?T(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Express Integration is skipped because of instrumenter configuration."):(function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((e=>function(t,e){const n=t[e]
return t[e]=function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s]
return n.call(this,...function(t,e){return t.map((t=>"function"==typeof t?S(t,e):Array.isArray(t)?t.map((t=>"function"==typeof t?S(t,e):t)):t))}(i,e))},t}(t,e)))}(this._router,this._methods),function(t){const e="settings"in t
e&&void 0===t._router&&t.lazyrouter&&t.lazyrouter()
const n=e?t._router:t
if(!n)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.debug("Routing instrumentation is currently only supported in Express 4."))
const i=Object.getPrototypeOf(n),s=i.process_params
i.process_params=function(t,e,n,i,a){n._reconstructedRoute||(n._reconstructedRoute="")
const{layerRoutePath:r,isRegex:o,isArray:c,numExtraSegments:_}=function(t){const e=h([t,"access",t=>t.route,"optionalAccess",t=>t.path]),n=(0,f.Kj)(e),i=Array.isArray(e)
if(!e)return{isRegex:n,isArray:i,numExtraSegments:0}
const s=i?Math.max(e.reduce(((t,e)=>t+(0,p.$A)(e.toString())),0)-(0,p.$A)(t.path||""),0):0,a=function(t,e){return t?e.map((t=>t.toString())).join(","):e&&e.toString()}(i,e)
return{layerRoutePath:a,isRegex:n,isArray:i,numExtraSegments:s}}(t);(r||o||c)&&(n._hasParameters=!0)
const d=(r||t.path||"").split("/").filter((t=>t.length>0&&(o||c||!t.includes("*")))).join("/")
if(d&&d.length>0&&(n._reconstructedRoute+=`/${d}${o?"/":""}`),(0,p.$A)(n.originalUrl||"")+_===(0,p.$A)(n._reconstructedRoute)){n._hasParameters||n._reconstructedRoute!==n.originalUrl&&(n._reconstructedRoute=n.originalUrl)
const t=i.__sentry_transaction
if(t&&"custom"!==t.metadata.source){const e=n._reconstructedRoute||"/"
t.setName(...(0,g.oA)(n,{path:!0,method:!0,customRoute:e}))}}return s.call(this,t,e,n,i,a)}}(this._router)):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("ExpressIntegration is missing an Express instance")}}function S(t,e){const n=t.length
switch(n){case 2:return function(n,i){const s=i.__sentry_transaction
if(s){const n=s.startChild({description:t.name,op:`middleware.express.${e}`})
i.once("finish",(()=>{n.finish()}))}return t.call(this,n,i)}
case 3:return function(n,i,s){const a=h([i.__sentry_transaction,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,(function(){h([a,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
s.call(this,...e)}))}
case 4:return function(n,i,s,a){const r=h([s.__sentry_transaction,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,s,(function(){h([r,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
a.call(this,...e)}))}
default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)}}E.__initStatic()
var y=n(30180),v=n(15834)
class R{static __initStatic(){this.id="Postgres"}__init(){this.name=R.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
R.prototype.__init.call(this),this._usePgNative=!!t.usePgNative}setupOnce(t,e){if(T(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Postgres Integration is skipped because of instrumenter configuration."))
const n=(0,y.$y)("pg")
if(!n)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("Postgres Integration was unable to require `pg` package."))
if(this._usePgNative&&!h([n,"access",t=>t.native,"optionalAccess",t=>t.Client]))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("Postgres Integration was unable to access 'pg-native' bindings."))
const{Client:i}=this._usePgNative?n.native:n;(0,v.hl)(i.prototype,"query",(function(t){return function(n,i,s){const a=h([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=h([a,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.text,op:"db"})])
if("function"==typeof s)return t.call(this,n,i,(function(t,e){h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e)}))
if("function"==typeof i)return t.call(this,n,(function(t,e){h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e)}))
const o=void 0!==i?t.call(this,n,i):t.call(this,n)
return(0,f.J8)(o)?o.then((t=>(h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),o)}}))}}R.__initStatic()
class N{constructor(){N.prototype.__init.call(this)}static __initStatic(){this.id="Mysql"}__init(){this.name=N.id}setupOnce(t,e){if(T(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Mysql Integration is skipped because of instrumenter configuration."))
const n=(0,y.$y)("mysql/lib/Connection.js")
n?(0,v.hl)(n,"createQuery",(function(t){return function(n,i,s){const a=h([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=h([a,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.sql,op:"db"})])
return"function"==typeof s?t.call(this,n,i,(function(t,e,n){h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e,n)})):t.call(this,n,i,s)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("Mysql Integration was unable to require `mysql` package.")}}N.__initStatic()
const b=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],D={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]}
class k{static __initStatic(){this.id="Mongo"}__init(){this.name=k.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
k.prototype.__init.call(this),this._operations=Array.isArray(t.operations)?t.operations:b,this._describeOperations=!("describeOperations"in t)||t.describeOperations,this._useMongoose=!!t.useMongoose}setupOnce(t,e){if(T(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Mongo Integration is skipped because of instrumenter configuration."))
const n=this._useMongoose?"mongoose":"mongodb",i=(0,y.$y)(n)
i?this._instrumentOperations(i.Collection,this._operations,e):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error(`Mongo Integration was unable to require \`${n}\` package.`)}_instrumentOperations(t,e,n){e.forEach((e=>this._patchOperation(t,e,n)))}_patchOperation(t,e,n){if(!(e in t.prototype))return
const i=this._getSpanContextFromOperationArguments.bind(this);(0,v.hl)(t.prototype,e,(function(t){return function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r]
const o=a[a.length-1],c=h([n().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()])
if("function"!=typeof o||"mapReduce"===e&&2===a.length){const n=h([c,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,a))]),s=t.call(this,...a)
if((0,f.J8)(s))return s.then((t=>(h([n,"optionalAccess",t=>t.finish,"call",t=>t()]),t)))
if((_=s)&&"object"==typeof _&&_.once&&"function"==typeof _.once){const e=s
try{e.once("close",(()=>{h([n,"optionalAccess",t=>t.finish,"call",t=>t()])}))}catch(t){h([n,"optionalAccess",t=>t.finish,"call",t=>t()])}return e}return h([n,"optionalAccess",t=>t.finish,"call",t=>t()]),s}var _
const d=h([c,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,a.slice(0,-1)))])
return t.call(this,...a.slice(0,-1),(function(t,e){h([d,"optionalAccess",t=>t.finish,"call",t=>t()]),o(t,e)}))}}))}_getSpanContextFromOperationArguments(t,e,n){const i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},s={op:"db",description:e,data:i},a=D[e],r=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!a||!r)return s
try{if("mapReduce"===e){const[t,e]=n
i[a[0]]="string"==typeof t?t:t.name||"<anonymous>",i[a[1]]="string"==typeof e?e:e.name||"<anonymous>"}else for(let t=0;t<a.length;t++)i[a[t]]=JSON.stringify(n[t])}catch(t){}return s}}k.__initStatic()
class B{static __initStatic(){this.id="Prisma"}__init(){this.name=B.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var e
B.prototype.__init.call(this),(e=t.client)&&e.$use?this._client=t.client:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)}setupOnce(t,e){this._client?T(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Prisma Integration is skipped because of instrumenter configuration."):this._client.$use(((t,n)=>{const i=h([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),s=t.action,a=t.model,r=h([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:a?`${a} ${s}`:s,op:"db.sql.prisma"})]),o=n(t)
return(0,f.J8)(o)?o.then((t=>(h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(h([r,"optionalAccess",t=>t.finish,"call",t=>t()]),o)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("PrismaIntegration is missing a Prisma Client Instance")}}B.__initStatic()
class G{constructor(){G.prototype.__init.call(this)}static __initStatic(){this.id="GraphQL"}__init(){this.name=G.id}setupOnce(t,e){if(T(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("GraphQL Integration is skipped because of instrumenter configuration."))
const n=(0,y.$y)("graphql/execution/execute.js")
n?(0,v.hl)(n,"execute",(function(t){return function(){const n=e().getScope(),i=h([n,"optionalAccess",t=>t.getSpan,"call",t=>t()]),s=h([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:"execute",op:"graphql.execute"})])
h([n,"optionalAccess",t=>t.setSpan,"call",t=>t(s)])
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
const c=t.call(this,...r)
return(0,f.J8)(c)?c.then((t=>(h([s,"optionalAccess",t=>t.finish,"call",t=>t()]),h([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),t))):(h([s,"optionalAccess",t=>t.finish,"call",t=>t()]),h([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),c)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("GraphQL Integration was unable to require graphql/execution package.")}}G.__initStatic()
var Y=n(7209)
class U{static __initStatic(){this.id="Apollo"}__init(){this.name=U.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{useNestjs:!1}
U.prototype.__init.call(this),this._useNest=!!t.useNestjs}setupOnce(t,e){if(T(e))("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("Apollo Integration is skipped because of instrumenter configuration.")
else if(this._useNest){const t=(0,y.$y)("@nestjs/graphql")
if(!t)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package."));(0,v.hl)(t.GraphQLFactory.prototype,"mergeWithSchema",(function(t){return function(){(0,v.hl)(this.resolversExplorerService,"explore",(function(t){return function(){return x((0,Y.lE)(t.call(this)),e)}}))
for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s]
return t.call(this,...i)}}))}else{const t=(0,y.$y)("apollo-server-core")
if(!t)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.error("Apollo Integration was unable to require apollo-server-core package."));(0,v.hl)(t.ApolloServerBase.prototype,"constructSchema",(function(t){return function(){if(!this.config.resolvers)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&(this.config.schema?(m.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."),m.kg.warn()):this.config.modules&&m.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),m.kg.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),t.call(this)
const n=(0,Y.lE)(this.config.resolvers)
return this.config.resolvers=x(n,e),t.call(this)}}))}}}function x(t,e){return t.map((t=>(Object.keys(t).forEach((n=>{Object.keys(t[n]).forEach((i=>{"function"==typeof t[n][i]&&function(t,e,n,i){(0,v.hl)(t[e],n,(function(t){return function(){const s=h([i().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),a=h([s,"optionalAccess",t=>t.startChild,"call",t=>t({description:`${e}.${n}`,op:"graphql.resolve"})])
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
const _=t.call(this,...o)
return(0,f.J8)(_)?_.then((t=>(h([a,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(h([a,"optionalAccess",t=>t.finish,"call",t=>t()]),_)}}))}(t,n,i,e)}))})),t)))}U.__initStatic()
var I=n(22850),A=n(68256)
const C=n(27083).n2
var O=n(88468)
const w=(t,e,n)=>{let i,s
return a=>{e.value>=0&&(a||n)&&(s=e.value-(i||0),(s||void 0===i)&&(i=e.value,e.delta=s,t(e)))}},$=()=>C.__WEB_VITALS_POLYFILL__?C.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||(()=>{const t=C.performance.timing,e=C.performance.navigation.type,n={entryType:"navigation",startTime:0,type:2==e?"back_forward":1===e?"reload":"navigate"}
for(const i in t)"navigationStart"!==i&&"toJSON"!==i&&(n[i]=Math.max(t[i]-t.navigationStart,0))
return n})()):C.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],M=()=>{const t=$()
return t&&t.activationStart||0},P=(t,e)=>{const n=$()
let i="navigate"
return n&&(i=C.document.prerendering||M()>0?"prerender":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:i}},q=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const i=new PerformanceObserver((t=>{e(t.getEntries())}))
return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},L=(t,e)=>{const n=i=>{"pagehide"!==i.type&&"hidden"!==C.document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}
let H=-1
const j=()=>(H<0&&(H="hidden"!==C.document.visibilityState||C.document.prerendering?1/0:0,L((t=>{let{timeStamp:e}=t
H=e}),!0)),{get firstHiddenTime(){return H}}),F={}
function z(t){return"number"==typeof t&&isFinite(t)}function J(t,e){let{startTimestamp:n,...i}=e
return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild({startTimestamp:n,...i})}function W(t){return t/1e3}function Q(){return C&&C.addEventListener&&C.performance}let Z,X,V=0,K={}
function tt(t,e,n,i,s,a){const r=a?e[a]:e[`${n}End`],o=e[`${n}Start`]
o&&r&&J(t,{op:"browser",description:s||n,startTimestamp:i+W(o),endTimestamp:i+W(r)})}var et=n(8651),nt=n(8142),it=n(98902)
const st=["localhost",/^\//],at={traceFetch:!0,traceXHR:!0,tracingOrigins:st,tracePropagationTargets:st}
function rt(t){const{traceFetch:e,traceXHR:n,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:a}={traceFetch:at.traceFetch,traceXHR:at.traceXHR,...t},r="function"==typeof a?a:t=>!0,o=t=>function(t,e){return(0,it.U0)(t,e||st)}(t,i||s),c={}
e&&(0,nt.o)("fetch",(t=>{!function(t,e,n,i){if(!(0,d.z)()||!t.fetchData||!e(t.fetchData.url))return
if(t.endTimestamp){const e=t.fetchData.__span
if(!e)return
const n=i[e]
return void(n&&(t.response?n.setHttpStatus(t.response.status):t.error&&n.setStatus("internal_error"),n.finish(),delete i[e]))}const s=(0,et.Gd)().getScope(),a=s&&s.getSpan(),r=a&&a.transaction
if(a&&r){const e=a.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"})
t.fetchData.__span=e.spanId,i[e.spanId]=e
const s=t.args[0]
t.args[1]=t.args[1]||{}
const o=t.args[1]
n(t.fetchData.url)&&(o.headers=function(t,e,n,i){const s=(0,I.IQ)(e),a=n.toTraceparent(),r="undefined"!=typeof Request&&(0,f.V9)(t,Request)?t.headers:i.headers
if(r){if("undefined"!=typeof Headers&&(0,f.V9)(r,Headers)){const t=new Headers(r)
return t.append("sentry-trace",a),s&&t.append(I.bU,s),t}if(Array.isArray(r)){const t=[...r,["sentry-trace",a]]
return s&&t.push([I.bU,s]),t}{const t="baggage"in r?r.baggage:void 0,e=[]
return Array.isArray(t)?e.push(...t):t&&e.push(t),s&&e.push(s),{...r,"sentry-trace":a,baggage:e.length>0?e.join(","):void 0}}}return{"sentry-trace":a,baggage:s}}(s,r.getDynamicSamplingContext(),e,o))}}(t,r,o,c)})),n&&(0,nt.o)("xhr",(t=>{!function(t,e,n,i){if(!(0,d.z)()||t.xhr&&t.xhr.__sentry_own_request__||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)))return
const s=t.xhr.__sentry_xhr__
if(t.endTimestamp){const e=t.xhr.__sentry_xhr_span_id__
if(!e)return
const n=i[e]
return void(n&&(n.setHttpStatus(s.status_code),n.finish(),delete i[e]))}const a=(0,et.Gd)().getScope(),r=a&&a.getSpan(),o=r&&r.transaction
if(r&&o){const e=r.startChild({data:{...s.data,type:"xhr",method:s.method,url:s.url},description:`${s.method} ${s.url}`,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=e.spanId,i[t.xhr.__sentry_xhr_span_id__]=e,t.xhr.setRequestHeader&&n(t.xhr.__sentry_xhr__.url))try{t.xhr.setRequestHeader("sentry-trace",e.toTraceparent())
const n=o.getDynamicSamplingContext(),i=(0,I.IQ)(n)
i&&t.xhr.setRequestHeader(I.bU,i)}catch(t){}}}(t,r,o,c)}))}const ot="BrowserTracing",ct={...a.AT,markBackgroundTransactions:!0,routingInstrumentation:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(!C||!C.location)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let i,s=C.location.href
e&&(i=t({name:C.location.pathname,op:"pageload",metadata:{source:"url"}})),n&&(0,nt.o)("history",(e=>{let{to:n,from:a}=e
void 0===a&&s&&-1!==s.indexOf(n)?s=void 0:a!==n&&(s=void 0,i&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`),i.finish()),i=t({name:C.location.pathname,op:"navigation",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...at}
class _t{__init(){this.name=ot}constructor(t){_t.prototype.__init.call(this),this.options={...ct,...t},void 0!==this.options._experiments.enableLongTask&&(this.options.enableLongTask=this.options._experiments.enableLongTask),t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),this._collectWebVitals=function(){const t=Q()
if(t&&O.Z1){t.mark&&C.performance.mark("sentry-tracing-init"),(t=>{const e=j(),n=P("FID")
let i
const s=t=>{t.startTime<e.firstHiddenTime&&(n.value=t.processingStart-t.startTime,n.entries.push(t),i(!0))},a=t=>{t.forEach(s)},r=q("first-input",a)
i=w(t,n),r&&L((()=>{a(r.takeRecords()),r.disconnect()}),!0)})((t=>{const e=t.entries.pop()
if(!e)return
const n=W(O.Z1),i=W(e.startTime);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding FID"),K.fid={value:t.value,unit:"millisecond"},K["mark.fid"]={value:n+i,unit:"second"}}))
const e=(t=>{const e=P("CLS",0)
let n,i=0,s=[]
const a=t=>{t.forEach((t=>{if(!t.hadRecentInput){const a=s[0],r=s[s.length-1]
i&&0!==s.length&&t.startTime-r.startTime<1e3&&t.startTime-a.startTime<5e3?(i+=t.value,s.push(t)):(i=t.value,s=[t]),i>e.value&&(e.value=i,e.entries=s,n&&n())}}))},r=q("layout-shift",a)
if(r){n=w(t,e)
const i=()=>{a(r.takeRecords()),n(!0)}
return L(i),i}})((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding CLS"),K.cls={value:t.value,unit:""},X=e)})),n=(t=>{const e=j(),n=P("LCP")
let i
const s=t=>{const s=t[t.length-1]
if(s){const t=Math.max(s.startTime-M(),0)
t<e.firstHiddenTime&&(n.value=t,n.entries=[s],i())}},a=q("largest-contentful-paint",s)
if(a){i=w(t,n)
const e=()=>{F[n.id]||(s(a.takeRecords()),a.disconnect(),F[n.id]=!0,i(!0))}
return["keydown","click"].forEach((t=>{addEventListener(t,e,{once:!0,capture:!0})})),L(e,!0),e}})((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding LCP"),K.lcp={value:t.value,unit:"millisecond"},Z=e)}))
return()=>{e&&e(),n&&n()}}return()=>{}}(),this.options.enableLongTask&&q("longtask",(t=>{for(const e of t){const t=(0,_.x1)()
if(!t)return
const n=W(O.Z1+e.startTime),i=W(e.duration)
t.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:n,endTimestamp:n+i})}})),this.options._experiments.enableInteractions&&q("event",(t=>{for(const e of t){const t=(0,_.x1)()
if(!t)return
if("click"===e.name){const n=W(O.Z1+e.startTime),i=W(e.duration)
t.startChild({description:(0,A.Rt)(e.target),op:`ui.interaction.${e.name}`,startTimestamp:n,endTimestamp:n+i})}}}),{durationThreshold:0})}setupOnce(t,e){this._getCurrentHub=e
const{routingInstrumentation:n,startTransactionOnLocationChange:i,startTransactionOnPageLoad:s,markBackgroundTransactions:a,traceFetch:r,traceXHR:o,tracePropagationTargets:c,shouldCreateSpanForRequest:d,_experiments:l}=this.options
n((t=>{const n=this._createRouteTransaction(t)
return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(n,t,e),n}),s,i),a&&(C&&C.document?C.document.addEventListener("visibilitychange",(()=>{const t=(0,_.x1)()
if(C.document.hidden&&t){const e="cancelled";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus(e),t.setTag("visibilitychange","document.hidden"),t.finish()}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),l.enableInteractions&&this._registerInteractionListener(),rt({traceFetch:r,traceXHR:o,tracePropagationTargets:c,shouldCreateSpanForRequest:d})}_createRouteTransaction(t){if(!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`))
const{beforeNavigate:e,idleTimeout:n,finalTimeout:i,heartbeatInterval:s}=this.options,a="pageload"===t.op,r=a?dt("sentry-trace"):null,c=a?dt("baggage"):null,_=r?(0,o.q)(r):void 0,d=c?(0,I.EN)(c):void 0,p={...t,..._,metadata:{...t.metadata,dynamicSamplingContext:_&&!d?{}:d},trimEnd:!0},u="function"==typeof e?e(p):p,h=void 0===u?{...p,sampled:!1}:u
h.metadata=h.name!==p.name?{...h.metadata,source:"custom"}:h.metadata,this._latestRouteName=h.name,this._latestRouteSource=h.metadata&&h.metadata.source,!1===h.sampled&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log(`[Tracing] Starting ${h.op} transaction on scope`)
const g=this._getCurrentHub(),{location:f}=C,T=(0,l.l)(g,h,n,i,!0,{location:f},s)
return T.registerBeforeFinishCallback((t=>{this._collectWebVitals(),function(t){const e=Q()
if(!e||!C.performance.getEntries||!O.Z1)return;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Tracing] Adding & adjusting spans using Performance API")
const n=W(O.Z1),i=e.getEntries()
let s,a
if(i.slice(V).forEach((e=>{const i=W(e.startTime),r=W(e.duration)
if(!("navigation"===t.op&&n+i<t.startTimestamp))switch(e.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((i=>{tt(t,e,i,n)})),tt(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),tt(t,e,"fetch",n,"cache","domainLookupStart"),tt(t,e,"domainLookup",n,"DNS"),function(t,e,n){J(t,{op:"browser",description:"request",startTimestamp:n+W(e.requestStart),endTimestamp:n+W(e.responseEnd)}),J(t,{op:"browser",description:"response",startTimestamp:n+W(e.responseStart),endTimestamp:n+W(e.responseEnd)})}(t,e,n)}(t,e,n),s=n+W(e.responseStart),a=n+W(e.requestStart)
break
case"mark":case"paint":case"measure":{!function(t,e,n,i,s){const a=s+n,r=a+i
J(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:a})}(t,e,i,r,n)
const s=j(),a=e.startTime<s.firstHiddenTime
"first-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding FP"),K.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding FCP"),K.fcp={value:e.startTime,unit:"millisecond"})
break}case"resource":{const s=e.name.replace(C.location.origin,"")
!function(t,e,n,i,s,a){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return
const r={}
"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize),"renderBlockingStatus"in e&&(r["resource.render_blocking_status"]=e.renderBlockingStatus)
const o=a+i
J(t,{description:n,endTimestamp:o+s,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:o,data:r})}(t,e,s,i,r,n)
break}}})),V=Math.max(i.length-1,0),function(t){const e=C.navigator
if(!e)return
const n=e.connection
n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),z(n.rtt)&&(K["connection.rtt"]={value:n.rtt,unit:"millisecond"})),z(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),z(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}(t),"pageload"===t.op){"number"==typeof s&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding TTFB"),K.ttfb={value:1e3*(s-t.startTimestamp),unit:"millisecond"},"number"==typeof a&&a<=s&&(K["ttfb.requestTime"]={value:1e3*(s-a),unit:"millisecond"})),["fcp","fp","lcp"].forEach((e=>{if(!K[e]||n>=t.startTimestamp)return
const i=K[e].value,s=n+W(i),a=Math.abs(1e3*(s-t.startTimestamp)),r=a-i;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log(`[Measurements] Normalized ${e} from ${i} to ${a} (${r})`),K[e].value=a}))
const e=K["mark.fid"]
e&&K.fid&&(J(t,{description:"first input delay",endTimestamp:e.value+W(K.fid.value),op:"ui.action",startTimestamp:e.value}),delete K["mark.fid"]),"fcp"in K||delete K.cls,Object.keys(K).forEach((e=>{t.setMeasurement(e,K[e].value,K[e].unit)})),function(t){Z&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding LCP Data"),Z.element&&t.setTag("lcp.element",(0,A.Rt)(Z.element)),Z.id&&t.setTag("lcp.id",Z.id),Z.url&&t.setTag("lcp.url",Z.url.trim().slice(0,200)),t.setTag("lcp.size",Z.size)),X&&X.sources&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.log("[Measurements] Adding CLS Data"),X.sources.forEach(((e,n)=>t.setTag(`cls.source.${n+1}`,(0,A.Rt)(e.node)))))}(t)}Z=void 0,X=void 0,K={}}(t)})),T}_registerInteractionListener(){let t
const e=()=>{const{idleTimeout:e,finalTimeout:n,heartbeatInterval:i}=this.options,s="ui.action.click"
if(t&&(t.finish(),t=void 0),!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`))
if(!this._latestRouteName)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&m.kg.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`))
const a=this._getCurrentHub(),{location:r}=C,o={name:this._latestRouteName,op:s,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}}
t=(0,l.l)(a,o,e,n,!0,{location:r},i)};["click"].forEach((t=>{addEventListener(t,e,{once:!1,capture:!0})}))}}function dt(t){const e=(0,A.qT)(`meta[name=${t}]`)
return e?e.getAttribute("content"):null}("undefined"==typeof __SENTRY_TRACING__||__SENTRY_TRACING__)&&(0,u.r)()}}])

//# sourceMappingURL=chunk.468.faea351805980a8fb002.map