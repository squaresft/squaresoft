// @sentry/feedback@10.70.0 downloaded from https://ga.jspm.io/npm:@sentry/feedback@10.70.0/build/npm/esm/index.js

import{GLOBAL_OBJ as e,getClient as t,getCurrentScope as n,captureFeedback as r,getLocationHref as i,addIntegration as a,debug as o,isBrowser as s,getIsolationScope as c,getGlobalScope as l}from"@sentry/core";const u=e,d=u.document,f=u.navigator,p=`Report a Bug`,m=`Cancel`,h=`Send Bug Report`,g=`Confirm`,_=`Report a Bug`,v=`your.email@example.org`,y=`Email`,b=`What's the bug? What did you expect?`,x=`Description`,S=`Your Name`,C=`Name`,w=`Thank you for your report!`,T=`(required)`,ee=`Add a screenshot`,te=`Remove screenshot`,E=`Highlight`,D=`Hide`,ne=`Remove`,O=`Unable to submit feedback with empty message`,re=`No client setup, cannot send feedback.`,ie=`Unable to determine if Feedback was correctly sent.`,ae=`Unable to send feedback. This could be because this domain is not in your list of allowed domains.`,oe=`Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.`,se=`widget`,ce=`api`,le=5e3,ue={ERROR_EMPTY_MESSAGE:O,ERROR_NO_CLIENT:re,ERROR_TIMEOUT:ie,ERROR_FORBIDDEN:ae,ERROR_GENERIC:oe};function k(e,t){return t?.[e]??ue[e]}function de(e,t){return Error(k(e,t))}const fe=(e,a={includeReplay:!0})=>{let o=a.errorMessages;if(!e.message)throw de(`ERROR_EMPTY_MESSAGE`,o);let s=t();if(!s)throw de(`ERROR_NO_CLIENT`,o);e.tags&&Object.keys(e.tags).length&&n().setTags(e.tags);let c=r({source:`api`,url:i(),...e},a);return new Promise((e,t)=>{let n=setTimeout(()=>{r(),t(k(`ERROR_TIMEOUT`,o))},3e4),r=s.on(`afterSendEvent`,(i,a)=>{if(i.event_id===c)return clearTimeout(n),r(),a?.statusCode&&a.statusCode>=200&&a.statusCode<300?e(c):a?.statusCode===403?t(k(`ERROR_FORBIDDEN`,o)):t(k(`ERROR_GENERIC`,o))})})},A=typeof __SENTRY_DEBUG__>`u`||__SENTRY_DEBUG__;function pe(){return!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(f.userAgent)||/Macintosh/i.test(f.userAgent)&&f.maxTouchPoints&&f.maxTouchPoints>1||!isSecureContext)}function me(e,t){return{...e,...t,tags:{...e.tags,...t.tags},onFormOpen:()=>{t.onFormOpen?.(),e.onFormOpen?.()},onFormClose:()=>{t.onFormClose?.(),e.onFormClose?.()},onSubmitSuccess:(n,r)=>{t.onSubmitSuccess?.(n,r),e.onSubmitSuccess?.(n,r)},onSubmitError:n=>{t.onSubmitError?.(n),e.onSubmitError?.(n)},onFormSubmitted:()=>{t.onFormSubmitted?.(),e.onFormSubmitted?.()},themeDark:{...e.themeDark,...t.themeDark},themeLight:{...e.themeLight,...t.themeLight}}}function he(e){let t=d.createElement(`style`);return t.textContent=`
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`,e&&t.setAttribute(`nonce`,e),t}function j(e,t){return Object.entries(t).forEach(([t,n])=>{e.setAttributeNS(null,t,n)}),e}const ge=20,_e=`http://www.w3.org/2000/svg`;function ve(){let e=e=>u.document.createElementNS(`http://www.w3.org/2000/svg`,e),t=j(e(`svg`),{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`var(--actor-color, var(--foreground))`}),n=j(e(`g`),{clipPath:`url(#clip0_57_80)`}),r=j(e(`path`),{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z`});t.appendChild(n).appendChild(r);let i=e(`defs`),a=j(e(`clipPath`),{id:`clip0_57_80`}),o=j(e(`rect`),{width:`20`,height:`20`,fill:`white`});return a.appendChild(o),i.appendChild(a),t.appendChild(i).appendChild(a).appendChild(o),t}function ye({triggerLabel:e,triggerAriaLabel:t,shadow:n,styleNonce:r}){let i=d.createElement(`button`);if(i.type=`button`,i.className=`widget__actor`,i.ariaHidden=`false`,i.ariaLabel=t||e||p,i.appendChild(ve()),e){let t=d.createElement(`span`);t.appendChild(d.createTextNode(e)),i.appendChild(t)}let a=he(r);return{el:i,appendToDom(){n.appendChild(a),n.appendChild(i)},removeFromDom(){i.remove(),a.remove()},show(){i.ariaHidden=`false`},hide(){i.ariaHidden=`true`}}}const be=`rgba(88, 74, 192, 1)`,xe={foreground:`#2b2233`,background:`#ffffff`,accentForeground:`white`,accentBackground:be,successColor:`#268d75`,errorColor:`#df3338`,border:`1.5px solid rgba(41, 35, 47, 0.13)`,boxShadow:`0px 4px 24px 0px rgba(43, 34, 51, 0.12)`,outline:`1px auto var(--accent-background)`,interactiveFilter:`brightness(95%)`},Se={foreground:`#ebe6ef`,background:`#29232f`,accentForeground:`white`,accentBackground:be,successColor:`#2da98c`,errorColor:`#f55459`,border:`1.5px solid rgba(235, 230, 239, 0.15)`,boxShadow:`0px 4px 24px 0px rgba(43, 34, 51, 0.12)`,outline:`1px auto var(--accent-background)`,interactiveFilter:`brightness(150%)`};function Ce(e){return`
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `}function we({colorScheme:e,themeDark:t,themeLight:n,styleNonce:r}){let i=d.createElement(`style`);return i.textContent=`
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${e===`system`?``:`color-scheme: only ${e};`}

  ${Ce(e===`dark`?{...Se,...t}:{...xe,...n})}
}

${e===`system`?`
@media (prefers-color-scheme: dark) {
  :host {
    color-scheme: only dark;

    ${Ce({...Se,...t})}
  }
}`:``}
`,r&&i.setAttribute(`nonce`,r),i}const Te=({lazyLoadIntegration:e,getModalIntegration:t,getScreenshotIntegration:n})=>{let r=(({id:r=`sentry-feedback`,autoInject:i=!0,showBranding:c=!0,isEmailRequired:l=!1,isNameRequired:u=!1,showEmail:f=!0,showName:m=!0,enableScreenshot:h=!0,useSentryUser:g={email:`email`,name:`username`},tags:_,styleNonce:v,scriptNonce:y,colorScheme:b=`system`,themeLight:x={},themeDark:S={},addScreenshotButtonLabel:C=`Add a screenshot`,cancelButtonLabel:w=`Cancel`,confirmButtonLabel:T=`Confirm`,emailLabel:ee=`Email`,emailPlaceholder:te=`your.email@example.org`,formTitle:E=`Report a Bug`,isRequiredLabel:D=`(required)`,messageLabel:ne=`Description`,messagePlaceholder:se=`What's the bug? What did you expect?`,nameLabel:ce=`Name`,namePlaceholder:le=`Your Name`,removeScreenshotButtonLabel:ue=`Remove screenshot`,submitButtonLabel:k=`Send Bug Report`,successMessageText:de=`Thank you for your report!`,triggerLabel:he=p,triggerAriaLabel:j=``,highlightToolText:ge=`Highlight`,hideToolText:_e=`Hide`,removeHighlightText:ve=`Remove`,errorEmptyMessageText:be=O,errorNoClientText:xe=re,errorTimeoutText:Se=ie,errorForbiddenText:Ce=ae,errorGenericText:Te=oe,onFormOpen:Ee,onFormClose:M,onSubmitSuccess:N,onSubmitError:De,onFormSubmitted:P}={})=>{let F={id:r,autoInject:i,showBranding:c,isEmailRequired:l,isNameRequired:u,showEmail:f,showName:m,enableScreenshot:h,useSentryUser:g,tags:_,styleNonce:v,scriptNonce:y,colorScheme:b,themeDark:S,themeLight:x,triggerLabel:he,triggerAriaLabel:j,cancelButtonLabel:w,submitButtonLabel:k,confirmButtonLabel:T,formTitle:E,emailLabel:ee,emailPlaceholder:te,messageLabel:ne,messagePlaceholder:se,nameLabel:ce,namePlaceholder:le,successMessageText:de,isRequiredLabel:D,addScreenshotButtonLabel:C,removeScreenshotButtonLabel:ue,highlightToolText:ge,hideToolText:_e,removeHighlightText:ve,errorEmptyMessageText:be,errorNoClientText:xe,errorTimeoutText:Se,errorForbiddenText:Ce,errorGenericText:Te,onFormClose:M,onFormOpen:Ee,onSubmitError:De,onSubmitSuccess:N,onFormSubmitted:P},I=null,L=null,R=[],z=e=>{if(!I){let t=d.createElement(`div`);t.id=String(e.id),d.body.appendChild(t),I=t.attachShadow({mode:`open`}),L=we(e),I.appendChild(L)}return I},Oe=async r=>{let i=r.enableScreenshot&&pe(),s,c;try{s=(t?t():await e(`feedbackModalIntegration`,y))(),a(s)}catch{throw A&&o.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."),Error(`[Feedback] Missing feedback modal integration!`)}try{let t=i?n?n():await e(`feedbackScreenshotIntegration`,y):void 0;t&&(c=t(),a(c))}catch{A&&o.error(`[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.`)}let l={ERROR_EMPTY_MESSAGE:r.errorEmptyMessageText,ERROR_NO_CLIENT:r.errorNoClientText,ERROR_TIMEOUT:r.errorTimeoutText,ERROR_FORBIDDEN:r.errorForbiddenText,ERROR_GENERIC:r.errorGenericText},u=(e,t)=>fe(e,{includeReplay:!0,...t,errorMessages:l}),d=s.createDialog({options:{...r,onFormClose:()=>{d?.close(),r.onFormClose?.()},onFormSubmitted:()=>{d?.close(),r.onFormSubmitted?.()}},screenshotIntegration:c,sendFeedback:u,shadow:z(r)});return d},B=(e,t={})=>{let n=me(F,t),r=typeof e==`string`?d.querySelector(e):typeof e.addEventListener==`function`?e:null;if(!r)throw A&&o.error(`[Feedback] Unable to attach to target element`),Error(`Unable to attach to target element`);let i=null,a=async()=>{i||(i=await Oe({...n,onFormSubmitted:()=>{i?.removeFromDom(),n.onFormSubmitted?.()}})),i.appendToDom(),i.open()};r.addEventListener(`click`,a);let s=()=>{R=R.filter(e=>e!==s),i?.removeFromDom(),i=null,r.removeEventListener(`click`,a)};return R.push(s),s},V=(e={})=>{let t=me(F,e),n=z(t),r=ye({triggerLabel:t.triggerLabel,triggerAriaLabel:t.triggerAriaLabel,shadow:n,styleNonce:v});return B(r.el,{...t,onFormOpen(){r.hide()},onFormClose(){r.show()},onFormSubmitted(){r.show()}}),r};return{name:`Feedback`,setupOnce(){!s()||!F.autoInject||(d.readyState===`loading`?d.addEventListener(`DOMContentLoaded`,()=>V().appendToDom()):V().appendToDom())},attachTo:B,createWidget(e={}){let t=V(me(F,e));return t.appendToDom(),t},async createForm(e={}){return Oe(me(F,e))},setTheme(e){if(F.colorScheme=e,I){let e=we(F);L?I.replaceChild(e,L):I.prepend(e),L=e}},remove(){I&&(I.parentElement?.remove(),I=null,L=null),R.forEach(e=>e()),R=[]}}});return r};function Ee(){return t()?.getIntegrationByName(`Feedback`)}var M,N,De,P,F,I,L,R={},z=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function V(e,t){for(var n in t)e[n]=t[n];return e}function ke(e){var t=e.parentNode;t&&t.removeChild(e)}function H(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?M.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Ae(e,o,r,i,null)}function Ae(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i==null?++De:i,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(a),a}function U(e){return e.children}function je(e,t){this.props=e,this.context=t}function W(e,t){if(t==null)return e.__?W(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?W(e):null}function Me(e,t,n){var r,i=e.__v,a=i.__e,o=e.__P;if(o)return(r=V({},i)).__v=i.__v+1,N.vnode&&N.vnode(r),We(o,r,i,e.__n,o.ownerSVGElement!==void 0,32&i.__u?[a]:null,t,a==null?W(i):a,!!(32&i.__u),n),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=a&&Ne(r),r}function Ne(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ne(e)}}function Pe(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!Fe.__r++||F!==N.debounceRendering)&&((F=N.debounceRendering)||I)(Fe)}function Fe(){var e,t,n,r=[],i=[];for(P.sort(L);e=P.shift();)e.__d&&(n=P.length,t=Me(e,r,i)||t,n===0||P.length>n?(Ge(r,t,i),i.length=r.length=0,t=void 0,P.sort(L)):t&&N.__c&&N.__c(t,z));t&&Ge(r,t,i),Fe.__r=0}function Ie(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g=r&&r.__k||z,_=t.length;for(n.__d=c,Le(n,t,g),c=n.__d,d=0;d<_;d++)(p=n.__k[d])!=null&&typeof p!=`boolean`&&typeof p!=`function`&&(f=p.__i===-1?R:g[p.__i]||R,p.__i=d,We(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&qe(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),65536&p.__u||f.__k===p.__k?c=Re(p,c,e):typeof p.type==`function`&&p.__d!==void 0?c=p.__d:m&&(c=m.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=c,n.__e=h}function Le(e,t,n){var r,i,a,o,s,c=t.length,l=n.length,u=l,d=0;for(e.__k=[],r=0;r<c;r++)(i=e.__k[r]=(i=t[r])==null||typeof i==`boolean`||typeof i==`function`?null:typeof i==`string`||typeof i==`number`||typeof i==`bigint`||i.constructor==String?Ae(null,i,null,null,i):B(i)?Ae(U,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?Ae(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)==null?(a=n[r])&&a.key==null&&a.__e&&(a.__e==e.__d&&(e.__d=W(a)),Je(a,a,!1),n[r]=null,u--):(i.__=e,i.__b=e.__b+1,s=ze(i,n,o=r+d,u),i.__i=s,a=null,s!==-1&&(u--,(a=n[s])&&(a.__u|=131072)),a==null||a.__v===null?(s==-1&&d--,typeof i.type!=`function`&&(i.__u|=65536)):s!==o&&(s===o+1?d++:s>o?u>c-o?d+=s-o:d--:d=s<o&&s==o-1?s-o:0,s!==r+d&&(i.__u|=65536)));if(u)for(r=0;r<l;r++)(a=n[r])!=null&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=W(a)),Je(a,a))}function Re(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Re(r[i],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ze(e,t,n,r){var i=e.key,a=e.type,o=n-1,s=n+1,c=t[n];if(c===null||c&&i==c.key&&a===c.type)return n;if(r>+(c!=null&&!(131072&c.__u)))for(;o>=0||s<t.length;){if(o>=0){if((c=t[o])&&!(131072&c.__u)&&i==c.key&&a===c.type)return o;o--}if(s<t.length){if((c=t[s])&&!(131072&c.__u)&&i==c.key&&a===c.type)return s;s++}}return-1}function Be(e,t,n){t[0]===`-`?e.setProperty(t,n==null?``:n):e[t]=n==null?``:typeof n!=`number`||Oe.test(t)?n:n+`px`}function Ve(e,t,n,r,i){var a;n:if(t===`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||Be(e.style,t,``);if(n)for(t in n)r&&n[t]===r[t]||Be(e.style,t,n[t])}else if(t[0]===`o`&&t[1]===`n`)a=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,`$1`)),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,a?Ue:He,a)):e.removeEventListener(t,a?Ue:He,a);else{if(i)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!==`width`&&t!==`height`&&t!==`href`&&t!==`list`&&t!==`form`&&t!==`tabIndex`&&t!==`download`&&t!==`rowSpan`&&t!==`colSpan`&&t!==`role`&&t in e)try{e[t]=n==null?``:n;break n}catch(e){}typeof n==`function`||(n==null||!1===n&&t[4]!==`-`?e.removeAttribute(t):e.setAttribute(t,n))}}function He(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(N.event?N.event(e):e)}}function Ue(e){if(this.l)return this.l[e.type+!0](N.event?N.event(e):e)}function We(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=N.__b)&&u(t);n:if(typeof T==`function`)try{if(_=t.props,v=(u=T.contextType)&&r[u.__c],y=u?v?v.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:(`prototype`in T&&T.prototype.render?t.__c=d=new T(_,y):(t.__c=d=new je(_,y),d.constructor=T,d.render=Ye),v&&v.sub(d),d.props=_,d.state||(d.state={}),d.context=y,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),T.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=V({},d.__s)),V(d.__s,T.getDerivedStateFromProps(_,d.__s))),p=d.props,m=d.state,d.__v=t,f)T.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(T.getDerivedStateFromProps==null&&_!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,y),!d.__e&&(d.shouldComponentUpdate!=null&&!1===d.shouldComponentUpdate(_,d.__s,y)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(e){e&&(e.__=t)}),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b]);d._sb=[],d.__h.length&&o.push(d);break n}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,y),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,m,h)})}if(d.context=y,d.props=_,d.__P=e,d.__e=!1,x=N.__r,S=0,`prototype`in T&&T.prototype.render){for(d.state=d.__s,d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[]}else do d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++S<25);d.state=d.__s,d.getChildContext!=null&&(r=V(V({},r),d.getChildContext())),f||d.getSnapshotBeforeUpdate==null||(h=d.getSnapshotBeforeUpdate(p,m)),Ie(e,B(w=u!=null&&u.type===U&&u.key==null?u.props.children:u)?w:[w],t,n,r,i,a,o,s,c,l),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),g&&(d.__E=d.__=null)}catch(e){t.__v=null,c||a!=null?(t.__e=s,t.__u|=c?160:32,a[a.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),N.__e(e,t,n)}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ke(n.__e,t,n,r,i,a,o,c,l);(u=N.diffed)&&u(t)}function Ge(e,t,n){for(var r=0;r<n.length;r++)qe(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){N.__e(e,t.__v)}})}function Ke(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props,_=t.props,v=t.type;if(v===`svg`&&(i=!0),a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName===v:p.nodeType===3)){e=p,a[l]=null;break}}if(e==null){if(v===null)return document.createTextNode(_);e=i?document.createElementNS(`http://www.w3.org/2000/svg`,v):document.createElement(v,_.is&&_),a=null,s=!1}if(v===null)g===_||s&&e.data===_||(e.data=_);else{if(a=a&&M.call(e.childNodes),g=n.props||R,!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`children`||(l==`dangerouslySetInnerHTML`?d=p:l===`key`||l in _||Ve(e,l,null,p,i));for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:l===`key`||s&&typeof p!=`function`||g[l]===p||Ve(e,l,p,g[l],i);if(u)s||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),Ie(e,B(f)?f:[f],t,n,r,i&&v!==`foreignObject`,a,o,a?a[0]:n.__k&&W(n,0),s,c),a!=null)for(l=a.length;l--;)a[l]!=null&&ke(a[l]);s||(l=`value`,m!==void 0&&(m!==e[l]||v===`progress`&&!m||v===`option`&&m!==g[l])&&Ve(e,l,m,g[l],!1),l=`checked`,h!==void 0&&h!==e[l]&&Ve(e,l,h,g[l],!1))}return e}function qe(e,t,n){try{typeof e==`function`?e(t):e.current=t}catch(e){N.__e(e,n)}}function Je(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||qe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){N.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Je(r[i],t,n||typeof e.type!=`function`);n||e.__e==null||ke(e.__e),e.__=e.__e=e.__d=void 0}function Ye(e,t,n){return this.constructor(e,n)}function Xe(e,t,n){var r,i,a,o;N.__&&N.__(e,t),i=(r=!1)?null:t.__k,a=[],o=[],We(t,e=t.__k=H(U,null,[e]),i||R,R,t.ownerSVGElement!==void 0,i?null:t.firstChild?M.call(t.childNodes):null,a,i?i.__e:t.firstChild,r,o),e.__d=void 0,Ge(a,e,o)}M=z.slice,N={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},De=0,je.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=V({},this.state);typeof e==`function`&&(e=e(V({},n),this.props)),e&&V(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pe(this))},je.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pe(this))},je.prototype.render=U,P=[],I=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L=function(e,t){return e.__v.__b-t.__v.__b},Fe.__r=0;var G,K,Ze,Qe,q=0,$e=[],et=[],J=N,tt=J.__b,nt=J.__r,rt=J.diffed,it=J.__c,at=J.unmount,ot=J.__;function Y(e,t){J.__h&&J.__h(K,e,q||t),q=0;var n=K.__H||(K.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:et}),n.__[e]}function X(e){return q=1,st(St,e)}function st(e,t,n){var r=Y(G++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):St(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=K,!K.u)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=!1;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),!(!o&&r.__c.props===e)&&(!a||a.call(this,e,t,n))};K.u=!0;var a=K.shouldComponentUpdate,o=K.componentWillUpdate;K.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},K.shouldComponentUpdate=i}return r.__N||r.__}function ct(e,t){var n=Y(G++,3);!J.__s&&xt(n.__H,t)&&(n.__=e,n.i=t,K.__H.__h.push(n))}function lt(e,t){var n=Y(G++,4);!J.__s&&xt(n.__H,t)&&(n.__=e,n.i=t,K.__h.push(n))}function ut(e){return q=5,Z(function(){return{current:e}},[])}function dt(e,t,n){q=6,lt(function(){return typeof e==`function`?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Z(e,t){var n=Y(G++,7);return xt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Q(e,t){return q=8,Z(function(){return e},t)}function ft(e){var t=K.context[e.__c],n=Y(G++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(K)),t.props.value):e.__}function pt(e,t){J.useDebugValue&&J.useDebugValue(t?t(e):e)}function mt(e){var t=Y(G++,10),n=X();return t.__=e,K.componentDidCatch||(K.componentDidCatch=function(e,r){t.__&&t.__(e,r),n[1](e)}),[n[0],function(){n[1](void 0)}]}function ht(){var e=Y(G++,11);if(!e.__){for(var t=K.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__=`P`+n[0]+`-`+ n[1]++}return e.__}function gt(){for(var e;e=$e.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(yt),e.__H.__h.forEach(bt),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){K=null,tt&&tt(e)},J.__=function(e,t){t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ot&&ot(e,t)},J.__r=function(e){nt&&nt(e),G=0;var t=(K=e.__c).__H;t&&(Ze===K?(t.__h=[],K.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=et,e.__N=e.i=void 0})):(t.__h.forEach(yt),t.__h.forEach(bt),t.__h=[],G=0)),Ze=K},J.diffed=function(e){rt&&rt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($e.push(t)!==1&&Qe===J.requestAnimationFrame||((Qe=J.requestAnimationFrame)||vt)(gt)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==et&&(e.__=e.__V),e.i=void 0,e.__V=et})),Ze=K=null},J.__c=function(e,t){t.some(function(e){try{e.__h.forEach(yt),e.__h=e.__h.filter(function(e){return!e.__||bt(e)})}catch(n){t.some(function(e){e.__h&&(e.__h=[])}),t=[],J.__e(n,e.__v)}}),it&&it(e,t)},J.unmount=function(e){at&&at(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{yt(e)}catch(e){t=e}}),n.__H=void 0,t&&J.__e(t,n.__v))};var _t=typeof requestAnimationFrame==`function`;function vt(e){var t,n=function(){clearTimeout(r),_t&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);_t&&(t=requestAnimationFrame(n))}function yt(e){var t=K,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),K=t}function bt(e){var t=K;e.__c=e.__(),K=t}function xt(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function St(e,t){return typeof t==`function`?t(e):t}const Ct=/* @__PURE__ */ Object.defineProperty({__proto__:null,useCallback:Q,useContext:ft,useDebugValue:pt,useEffect:ct,useErrorBoundary:mt,useId:ht,useImperativeHandle:dt,useLayoutEffect:lt,useMemo:Z,useReducer:st,useRef:ut,useState:X},Symbol.toStringTag,{value:`Module`}),wt=`http://www.w3.org/2000/svg`;function Tt(){let e=e=>d.createElementNS(`http://www.w3.org/2000/svg`,e),t=j(e(`svg`),{width:`32`,height:`30`,viewBox:`0 0 72 66`,fill:`inherit`}),n=j(e(`path`),{transform:`translate(11, 11)`,d:`M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z`});return t.appendChild(n),t}function Et({options:e}){let t=Z(()=>({__html:Tt().outerHTML}),[]);return/* @__PURE__ */ H(`h2`,{class:`dialog__header`},/* @__PURE__ */ H(`span`,{class:`dialog__title`},e.formTitle),e.showBranding?/* @__PURE__ */ H(`a`,{class:`brand-link`,target:`_blank`,href:`https://sentry.io/welcome/`,title:`Powered by Sentry`,rel:`noopener noreferrer`,dangerouslySetInnerHTML:t}):null)}function Dt(e,t){let n=[];return t.isNameRequired&&!e.name&&n.push(t.nameLabel),t.isEmailRequired&&!e.email&&n.push(t.emailLabel),e.message||n.push(t.messageLabel),n}function Ot(e,t){let n=e.get(t);return typeof n==`string`?n.trim():``}function kt({options:e,defaultEmail:t,defaultName:n,onFormClose:r,onSubmit:i,onSubmitSuccess:a,onSubmitError:s,showEmail:c,showName:l,screenshotInput:u}){let{tags:d,addScreenshotButtonLabel:f,removeScreenshotButtonLabel:p,cancelButtonLabel:m,emailLabel:h,emailPlaceholder:g,isEmailRequired:_,isNameRequired:v,messageLabel:y,messagePlaceholder:b,nameLabel:x,namePlaceholder:S,submitButtonLabel:C,isRequiredLabel:w}=e,[T,ee]=X(!1),[te,E]=X(null),[D,ne]=X(!1),O=u?.input,[re,ie]=X(null),ae=Q(e=>{ie(e),ne(!1)},[]),oe=Q(e=>{let t=Dt(e,{emailLabel:h,isEmailRequired:_,isNameRequired:v,messageLabel:y,nameLabel:x});return t.length>0?E(`Please enter in the following required fields: ${t.join(`, `)}`):E(null),t.length===0},[h,_,v,y,x]);return/* @__PURE__ */ H(`form`,{class:`form`,onSubmit:Q(async e=>{ee(!0);try{if(e.preventDefault(),!(e.target instanceof HTMLFormElement))return;let t=new FormData(e.target),n=await(u&&D?u.value():void 0),r={name:Ot(t,`name`),email:Ot(t,`email`),message:Ot(t,`message`),attachments:n?[n]:void 0};if(!oe(r))return;try{a(r,await i({name:r.name,email:r.email,message:r.message,source:`widget`,tags:d},{attachments:r.attachments}))}catch(e){A&&o.error(e);let t=e instanceof Error?e:Error(String(e));E(t.message),s(t)}}finally{ee(!1)}},[u&&D,a,s])},O&&D?/* @__PURE__ */ H(O,{onError:ae}):null,/* @__PURE__ */ H(`fieldset`,{class:`form__right`,"data-sentry-feedback":!0,disabled:T},/* @__PURE__ */ H(`div`,{class:`form__top`},te?/* @__PURE__ */ H(`div`,{class:`form__error-container`},te):null,l?/* @__PURE__ */ H(`label`,{for:`name`,class:`form__label`},/* @__PURE__ */ H(At,{label:x,isRequiredLabel:w,isRequired:v}),/* @__PURE__ */ H(`input`,{class:`form__input`,defaultValue:n,id:`name`,name:`name`,placeholder:S,required:v,type:`text`})):/* @__PURE__ */ H(`input`,{"aria-hidden":!0,value:n,name:`name`,type:`hidden`}),c?/* @__PURE__ */ H(`label`,{for:`email`,class:`form__label`},/* @__PURE__ */ H(At,{label:h,isRequiredLabel:w,isRequired:_}),/* @__PURE__ */ H(`input`,{class:`form__input`,defaultValue:t,id:`email`,name:`email`,placeholder:g,required:_,type:`email`})):/* @__PURE__ */ H(`input`,{"aria-hidden":!0,value:t,name:`email`,type:`hidden`}),/* @__PURE__ */ H(`label`,{for:`message`,class:`form__label`},/* @__PURE__ */ H(At,{label:y,isRequiredLabel:w,isRequired:!0}),/* @__PURE__ */ H(`textarea`,{autoFocus:!0,class:`form__input form__input--textarea`,id:`message`,name:`message`,placeholder:b,required:!0,rows:5})),O?/* @__PURE__ */ H(`label`,{for:`screenshot`,class:`form__label`},/* @__PURE__ */ H(`button`,{class:`btn btn--default`,disabled:T,type:`button`,onClick:()=>{ie(null),ne(e=>!e)}},D?p:f),re?/* @__PURE__ */ H(`div`,{class:`form__error-container`},re.message):null):null),/* @__PURE__ */ H(`div`,{class:`btn-group`},/* @__PURE__ */ H(`button`,{class:`btn btn--primary`,disabled:T,type:`submit`},C),/* @__PURE__ */ H(`button`,{class:`btn btn--default`,disabled:T,type:`button`,onClick:r},m))))}function At({label:e,isRequired:t,isRequiredLabel:n}){return/* @__PURE__ */ H(`span`,{class:`form__label__text`},e,t&&/* @__PURE__ */ H(`span`,{class:`form__label__text--required`},n))}const jt=16,Mt=17,Nt=`http://www.w3.org/2000/svg`;function Pt(){let e=e=>u.document.createElementNS(`http://www.w3.org/2000/svg`,e),t=j(e(`svg`),{width:`16`,height:`17`,viewBox:`0 0 16 17`,fill:`inherit`}),n=j(e(`g`),{clipPath:`url(#clip0_57_156)`}),r=j(e(`path`),{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z`}),i=j(e(`path`),{d:`M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z`});t.appendChild(n).append(i,r);let a=e(`defs`),o=j(e(`clipPath`),{id:`clip0_57_156`}),s=j(e(`rect`),{width:`16`,height:`16`,fill:`white`,transform:`translate(0 0.5)`});return o.appendChild(s),a.appendChild(o),t.appendChild(a).appendChild(o).appendChild(s),t}function Ft({open:e,onFormSubmitted:t,...n}){let r=n.options,i=Z(()=>({__html:Pt().outerHTML}),[]),[a,o]=X(null),s=Q(()=>{a&&(clearTimeout(a),o(null)),t()},[a]),c=Q((e,r)=>{n.onSubmitSuccess(e,r),o(setTimeout(()=>{t(),o(null)},5e3))},[t]);return/* @__PURE__ */ H(U,null,a?/* @__PURE__ */ H(`div`,{class:`success__position`,onClick:s},/* @__PURE__ */ H(`div`,{class:`success__content`},r.successMessageText,/* @__PURE__ */ H(`span`,{class:`success__icon`,dangerouslySetInnerHTML:i}))):/* @__PURE__ */ H(`dialog`,{class:`dialog`,onClick:r.onFormClose,open:e},/* @__PURE__ */ H(`div`,{class:`dialog__position`},/* @__PURE__ */ H(`div`,{class:`dialog__content`,onClick:e=>{e.stopPropagation()}},/* @__PURE__ */ H(Et,{options:r}),/* @__PURE__ */ H(kt,{...n,onSubmitSuccess:c})))))}const It=`
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,Lt=`
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,Rt=`
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,zt=`
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,Bt=`
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`;function Vt(e){let t=d.createElement(`style`);return t.textContent=`
:host {
  --dialog-inset: var(--inset);
}


.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}



.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}


.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}


.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}


.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}

`,e&&t.setAttribute(`nonce`,e),t}function Ht(){let e=n().getUser(),t=c().getUser(),r=l().getUser();return e&&Object.keys(e).length?e:t&&Object.keys(t).length?t:r}const Ut=(()=>({name:`FeedbackModal`,setupOnce(){},createDialog:({options:e,screenshotIntegration:n,sendFeedback:r,shadow:i})=>{let a=i,o=e.useSentryUser,s=Ht(),c=d.createElement(`div`),l=Vt(e.styleNonce),u=``,f={get el(){return c},appendToDom(){!a.contains(l)&&!a.contains(c)&&(a.appendChild(l),a.appendChild(c))},removeFromDom(){c.remove(),l.remove(),d.body.style.overflow=u},open(){m(!0),e.onFormOpen?.(),t()?.emit(`openFeedbackWidget`),u=d.body.style.overflow,d.body.style.overflow=`hidden`},close(){m(!1),d.body.style.overflow=u}},p=n?.createInput({h:H,hooks:Ct,dialog:f,options:e}),m=t=>{Xe(/* @__PURE__ */ H(Ft,{options:e,screenshotInput:p,showName:e.showName||e.isNameRequired,showEmail:e.showEmail||e.isEmailRequired,defaultName:String(o&&s?.[o.name]||``),defaultEmail:String(o&&s?.[o.email]||``),onFormClose:()=>{m(!1),e.onFormClose?.()},onSubmit:r,onSubmitSuccess:(t,n)=>{m(!1),e.onSubmitSuccess?.(t,n)},onSubmitError:t=>{e.onSubmitError?.(t)},onFormSubmitted:()=>{e.onFormSubmitted?.()},open:t}),c)};return f}}));function Wt({h:e}){return function t(){return/* @__PURE__ */ e(`svg`,{"data-test-id":`icon-close`,viewBox:`0 0 16 16`,fill:`#2B2233`,height:`25px`,width:`25px`},/* @__PURE__ */ e(`circle`,{r:`7`,cx:`8`,cy:`8`,fill:`white`}),/* @__PURE__ */ e(`path`,{strokeWidth:`1.5`,d:`M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z`}),/* @__PURE__ */ e(`path`,{strokeWidth:`1.5`,d:`M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z`}),/* @__PURE__ */ e(`path`,{strokeWidth:`1.5`,d:`M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z`}))}}function Gt(e){let t=d.createElement(`style`),n=`#1A141F`,r=`#302735`;return t.textContent=`
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`,e&&t.setAttribute(`nonce`,e),t}function Kt({h:e}){return function t({action:n,setAction:r,options:i}){return/* @__PURE__ */ e(`div`,{class:`editor__tool-container`},/* @__PURE__ */ e(`div`,{class:`editor__tool-bar`},/* @__PURE__ */ e(`button`,{type:`button`,class:`editor__tool ${n===`highlight`?`editor__tool--active`:``}`,onClick:()=>{r(n===`highlight`?``:`highlight`)}},i.highlightToolText),/* @__PURE__ */ e(`button`,{type:`button`,class:`editor__tool ${n===`hide`?`editor__tool--active`:``}`,onClick:()=>{r(n===`hide`?``:`hide`)}},i.hideToolText)))}}function qt({hooks:e}){function t(){let[t,n]=e.useState(u.devicePixelRatio??1);return e.useEffect(()=>{let e=()=>{n(u.devicePixelRatio)},t=matchMedia(`(resolution: ${u.devicePixelRatio}dppx)`);return t.addEventListener(`change`,e),()=>{t.removeEventListener(`change`,e)}},[]),t}return function n({onBeforeScreenshot:r,onScreenshot:i,onAfterScreenshot:a,onError:o}){let s=t();e.useEffect(()=>{let e=async()=>{r();let e=await f.mediaDevices.getDisplayMedia({video:{width:u.innerWidth*s,height:u.innerHeight*s},audio:!1,monitorTypeSurfaces:`exclude`,preferCurrentTab:!0,selfBrowserSurface:`include`,surfaceSwitching:`exclude`}),t=d.createElement(`video`);await new Promise((n,r)=>{t.srcObject=e,t.onloadedmetadata=()=>{i(t,s),e.getTracks().forEach(e=>e.stop()),n()},t.play().catch(r)}),a()};e().catch(o)},[])}}function Jt(e,t,n){switch(e.type){case`highlight`:t.shadowColor=`rgba(0, 0, 0, 0.7)`,t.shadowBlur=50,t.fillStyle=n,t.fillRect(e.x-1,e.y-1,e.w+2,e.h+2),t.clearRect(e.x,e.y,e.w,e.h);break;case`hide`:t.fillStyle=`rgb(0, 0, 0)`,t.fillRect(e.x,e.y,e.w,e.h);break}}function $(e,t,n){if(!e)return;let r=e.getContext(`2d`,t);r&&n(e,r)}function Yt(e,t){$(e,{alpha:!0},(e,n)=>{n.drawImage(t,0,0,t.width,t.height,0,0,e.width,e.height)})}function Xt(e,t,n){$(e,{alpha:!0},(e,r)=>{n.length&&(r.fillStyle=`rgba(0, 0, 0, 0.25)`,r.fillRect(0,0,e.width,e.height)),n.forEach(e=>{Jt(e,r,t)})})}function Zt({h:e,hooks:t,outputBuffer:n,dialog:r,options:i}){let a=qt({hooks:t}),o=Kt({h:e}),s=Wt({h:e}),c={__html:Gt(i.styleNonce).innerText},l=r.el.style,f=({screenshot:r})=>{let[a,l]=t.useState(`highlight`),[f,p]=t.useState([]),m=t.useRef(null),h=t.useRef(null),g=t.useRef(null),_=t.useRef(null),[v,y]=t.useState(1),b=t.useMemo(()=>{let e=d.getElementById(i.id);if(!e)return`white`;let t=getComputedStyle(e);return t.getPropertyValue(`--button-primary-background`)||t.getPropertyValue(`--accent-background`)},[i.id]);t.useLayoutEffect(()=>{let e=()=>{let t=m.current;t&&($(r.canvas,{alpha:!1},e=>{y(Math.min(t.clientWidth/e.width,t.clientHeight/e.height))}),(t.clientHeight===0||t.clientWidth===0)&&setTimeout(e,0))};return e(),u.addEventListener(`resize`,e),()=>{u.removeEventListener(`resize`,e)}},[r]);let x=t.useCallback((e,t)=>{$(e,{alpha:!0},(e,n)=>{n.scale(t,t),e.width=r.canvas.width,e.height=r.canvas.height})},[r]);t.useEffect(()=>{x(h.current,r.dpi),Yt(h.current,r.canvas)},[r]),t.useEffect(()=>{x(g.current,r.dpi),$(g.current,{alpha:!0},(e,t)=>{t.clearRect(0,0,e.width,e.height)}),Xt(g.current,b,f)},[f,b]),t.useEffect(()=>{x(n,r.dpi),Yt(n,r.canvas),$(d.createElement(`canvas`),{alpha:!0},(e,t)=>{t.scale(r.dpi,r.dpi),e.width=r.canvas.width,e.height=r.canvas.height,Xt(e,b,f),Yt(n,e)})},[f,r,b]);let S=e=>{if(!a||!_.current)return;let t=_.current.getBoundingClientRect(),n={type:a,x:e.offsetX/v,y:e.offsetY/v},r=(e,n)=>{let r=(n.clientX-t.x)/v,i=(n.clientY-t.y)/v;return{type:e.type,x:Math.min(e.x,r),y:Math.min(e.y,i),w:Math.abs(r-e.x),h:Math.abs(i-e.y)}},i=e=>{$(g.current,{alpha:!0},(e,t)=>{t.clearRect(0,0,e.width,e.height)}),Xt(g.current,b,[...f,r(n,e)])},o=e=>{let t=r(n,e);t.w*v>=1&&t.h*v>=1&&p(e=>[...e,t]),d.removeEventListener(`mousemove`,i),d.removeEventListener(`mouseup`,o)};d.addEventListener(`mousemove`,i),d.addEventListener(`mouseup`,o)},C=t.useCallback(e=>t=>{t.preventDefault(),t.stopPropagation(),p(t=>{let n=[...t];return n.splice(e,1),n})},[]),w={width:`${r.canvas.width*v}px`,height:`${r.canvas.height*v}px`},T=e=>{e.stopPropagation()};return/* @__PURE__ */ e(`div`,{class:`editor`},/* @__PURE__ */ e(`style`,{nonce:i.styleNonce,dangerouslySetInnerHTML:c}),/* @__PURE__ */ e(`div`,{class:`editor__image-container`},/* @__PURE__ */ e(`div`,{class:`editor__canvas-container`,ref:m},/* @__PURE__ */ e(`canvas`,{ref:h,id:`background`,style:w}),/* @__PURE__ */ e(`canvas`,{ref:g,id:`foreground`,style:w}),/* @__PURE__ */ e(`div`,{ref:_,onMouseDown:S,style:w},f.map((t,n)=>/* @__PURE__ */ e(`div`,{key:n,class:`editor__rect`,style:{top:`${t.y*v}px`,left:`${t.x*v}px`,width:`${t.w*v}px`,height:`${t.h*v}px`}},/* @__PURE__ */ e(`button`,{"aria-label":i.removeHighlightText,onClick:C(n),onMouseDown:T,onMouseUp:T,type:`button`},/* @__PURE__ */ e(s,null))))))),/* @__PURE__ */ e(o,{options:i,action:a,setAction:l}))};return function r({onError:i}){let[o,s]=t.useState();return a({onBeforeScreenshot:t.useCallback(()=>{l.display=`none`},[]),onScreenshot:t.useCallback((e,t)=>{$(d.createElement(`canvas`),{alpha:!1},(n,r)=>{r.scale(t,t),n.width=e.videoWidth,n.height=e.videoHeight,r.drawImage(e,0,0,n.width,n.height),s({canvas:n,dpi:t})}),n.width=e.videoWidth,n.height=e.videoHeight},[]),onAfterScreenshot:t.useCallback(()=>{l.display=`block`},[]),onError:t.useCallback(e=>{l.display=`block`,i(e)},[])}),o?/* @__PURE__ */ e(f,{screenshot:o}):/* @__PURE__ */ e(`div`,null)}}const Qt=(()=>({name:`FeedbackScreenshot`,setupOnce(){},createInput:({h:e,hooks:t,dialog:n,options:r})=>{let i=d.createElement(`canvas`);return{input:Zt({h:e,hooks:t,outputBuffer:i,dialog:n,options:r}),value:async()=>{let e=await new Promise(e=>{i.toBlob(e,`image/png`)});if(e)return{data:new Uint8Array(await e.arrayBuffer()),filename:`screenshot.png`,contentType:`application/png`}}}}}));export{Te as buildFeedbackIntegration,Ut as feedbackModalIntegration,Qt as feedbackScreenshotIntegration,Ee as getFeedback,fe as sendFeedback};

