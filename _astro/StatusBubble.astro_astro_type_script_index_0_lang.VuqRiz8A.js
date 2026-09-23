const Z={};/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function Ie(e,n){let t=e.slice(0,n).split(/\r?\n/);return[t.length,t.pop().length+1]}function Ee(e,n,t){let l=e.split(/\r?\n/),r="",s=(Math.log10(n+1)|0)+1;for(let i=n-1;i<=n+1;i++){let a=l[i-1];a&&(r+=i.toString().padEnd(s," "),r+=":  ",r+=a,r+=`
`,i===n&&(r+=" ".repeat(s+t+2),r+=`^
`))}return r}class d extends Error{line;column;codeblock;constructor(n,t){const[l,r]=Ie(t.toml,t.ptr),s=Ee(t.toml,l,r);super(`Invalid TOML document: ${n}

${s}`,t),this.line=l,this.column=r,this.codeblock=s}static x(n,t,l){throw new d(n,{toml:t.s,ptr:l??t.p})}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function ye(e){let n=e.p,t=e.s.charCodeAt(e.p++),l=t,r=t===39,s=t===e.s.charCodeAt(e.p)&&t===e.s.charCodeAt(e.p+1);s&&((t=e.s.charCodeAt(e.p+=2))===10?e.p++:t===13&&e.s.charCodeAt(e.p+1)===10&&(e.p+=2));let i="",a=e.p,u=0;for(;e.p<e.s.length;e.p++)if(t=e.s.charCodeAt(e.p),s&&(t===10||t===13&&e.s.charCodeAt(e.p+1)===10))u=u&&3;else if(t<32&&t!==9||t===127)d.x("control characters are not allowed in strings",e);else if((!u||u===3)&&t===l&&(!s||e.s.charCodeAt(e.p+1)===l&&e.s.charCodeAt(e.p+2)===l)){if(s&&(e.s.charCodeAt(e.p+3)===l&&e.p++,e.s.charCodeAt(e.p+3)===l&&e.p++),!u){let f=e.s.slice(a,e.p);i=i?i+f:f}return e.p+=s?3:1,i}else if(!u)!r&&t===92&&(i+=e.s.slice(a,a=e.p),u=1);else if(u===1)if(t===120||t===117||t===85){let f=e.p++-1,c=0,p=t===120?2:t===117?4:8;for(let m=0;m<p;m++,e.p++){let g=e.s.charCodeAt(e.p),y=g>=48&&g<=57?g-48:g>=65&&g<=70?g-65+10:g>=97&&g<=102?g-97+10:-1;y<0&&d.x("invalid non-hex character in unicode escape",e),c=c<<4|y}(c<0||c>1114111||c>=55296&&c<=57343)&&d.x("invalid unicode escape",e,f),i+=String.fromCodePoint(c),a=e.p--,u=0}else s&&(t===32||t===9)?u=2:(t===98?i+="\b":t===116?i+="	":t===110?i+=`
`:t===102?i+="\f":t===114?i+="\r":t===101?i+="\x1B":t===34?i+='"':t===92?i+="\\":d.x("unrecognised escape sequence",e),a=e.p+1,u=0);else t!==32&&t!==9&&(u===2&&d.x("invalid escape: only line-ending whitespace may be escaped",e,a),u=!r&&t===92?1:0,a=e.p);d.x("unfinished string",e,n)}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let Me=/^(\d{4}-\d{2}-\d{2})?[Tt ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|z|[-+]\d{2}:\d{2})?$/i;class j extends Date{#t=!1;#n=!1;#e=null;constructor(n,t,l){let r=!0,s=!0,i="Z",a;if(typeof n=="string")if(t)e:{if(t<3){if(+n.slice(11,13)>23){n="";break e}t===2?(i=null,n+="Z"):(a=n.charCodeAt(n.length-1))!==90&&a!==122&&(i=n.slice(n.length-6)),l&&(n=n.slice(0,10)+"T"+n.slice(11))}else t===4&&(n=+n.slice(0,2)>23?"":`0000-01-01T${n}Z`);r=t!==4,s=t!==3}else{let u=n.match(Me);u?(u[1]||(r=!1,n=`0000-01-01T${n}`),s=!!u[2],s&&n[10]===" "&&(n=n.replace(" ","T")),u[2]&&+u[2]>23?n="":(i=u[3]||null,!i&&s&&(n+="Z"))):n=""}super(n),isNaN(this.getTime())||(this.#t=r,this.#n=s,this.#e=i)}isDateTime(){return this.#t&&this.#n}isLocal(){return!this.#t||!this.#n||!this.#e}isDate(){return this.#t&&!this.#n}isTime(){return this.#n&&!this.#t}isValid(){return this.#t||this.#n}toISOString(){let n=super.toISOString();if(this.isDate())return n.slice(0,10);if(this.isTime())return n.slice(11,23);if(this.#e===null)return n.slice(0,-1);if(this.#e==="Z"||this.#e==="z")return n;let t=+this.#e.slice(1,3)*60+ +this.#e.slice(4,6);return t=this.#e[0]==="-"?t:-t,new Date(this.getTime()-t*6e4).toISOString().slice(0,-1)+this.#e}static wrapAsOffsetDateTime(n,t="Z"){let l=new j(n);return l.#e=t,l}static wrapAsLocalDateTime(n){let t=new j(n);return t.#e=null,t}static wrapAsLocalDate(n){let t=new j(n);return t.#n=!1,t.#e=null,t}static wrapAsLocalTime(n){let t=new j(n);return t.#t=!1,t.#e=null,t}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function C(e,n=10){return n===16?e>47&&e<58||e>64&&e<71||e>96&&e<103:e>47&&e<48+n}function Y(e,n){return e===32||e===9||e===10||e===13||n&&(e===n||e===44)||e===35}function ee(e,n){let t=e.p,l=e.s.charCodeAt(e.p);if(l===91||l===123){e.d--||d.x("document contains excessively nested structures. aborting.",e);let r=l===91?je(e):Le(e);return e.d++,r}return l===34||l===39?ye(e):l===116?((e.s.charCodeAt(++e.p)!==114||e.s.charCodeAt(++e.p)!==117||e.s.charCodeAt(++e.p)!==101)&&d.x("invalid value",e,t),e.p++,!0):l===102?((e.s.charCodeAt(++e.p)!==97||e.s.charCodeAt(++e.p)!==108||e.s.charCodeAt(++e.p)!==115||e.s.charCodeAt(++e.p)!==101)&&d.x("invalid value",e,t),e.p++,!1):l===43||l===45?V(e,e.p,e.s.charCodeAt(++e.p),44-l,n):e.s.charCodeAt(e.p+4)===45&&e.s.charCodeAt(e.p+7)===45?De(e,l,n):e.s.charCodeAt(e.p+2)===58?Se(e,l,n):V(e,e.p,l,0,n)}function V(e,n,t,l,r){let s=t,i=0,a=!1;if(s===105)return(e.s.charCodeAt(++e.p)!==110||e.s.charCodeAt(++e.p)!==102)&&d.x("invalid value",e,n),e.p++,(l||1)/0;if(s===110)return(e.s.charCodeAt(++e.p)!==97||e.s.charCodeAt(++e.p)!==110)&&d.x("invalid value",e,n),e.p++,NaN;if(s===48){if(++e.p>=e.s.length||Y(s=e.s.charCodeAt(e.p),r))return e.bi===!0?0n:0;if(!l){if(s===120)return U(e,n,16,r);if(s===98)return U(e,n,2,r);if(s===111)return U(e,n,8,r)}s===46?i=2:s===101||s===69?i=4:d.x("illegal leading zero",e,n)}else C(s)||d.x("invalid value",e,n);for(;++e.p<e.s.length&&(s=e.s.charCodeAt(e.p),!Y(s,r));)i||(i=1),s===95?(i&1||d.x("illegal underscore",e),i+=11,a=!0):i===1&&s===46?i=2:(i===1||i===3)&&(s===101||s===69)?i=4:i===4&&(s===43||s===45)||(C(s)?i>9?i-=11:i&1||i++:d.x("illegal character in numeric literal",e));if(!i){let f=(t-48)*(l||1);return e.bi===!0?BigInt(f):f}i&1||d.x("unfinished numeric value",e,n);let u=e.s.slice(n,e.p);return a&&(u=u.replaceAll("_","")),i>1?parseFloat(u):Ce(e,u,10,n)}function U(e,n,t,l){let r,s=1;for(;++e.p<e.s.length&&(r=e.s.charCodeAt(e.p),!Y(r,l));)r===95?(s&1&&d.x("illegal underscore",e),s=3):C(r,t)?s&1&&s--:d.x("illegal character in numeric literal",e);s&1&&d.x("unfinished numeric value",e);let i=e.s.slice(n+2,e.p);return s&&(i=i.replaceAll("_","")),Ce(e,i,t,n)}function Ce(e,n,t,l){if(e.bi!==!0)e:{let r=parseInt(n,t);if(!Number.isSafeInteger(r)){if(e.bi)break e;d.x("integer value cannot be represented losslessly",e,l)}return r}return BigInt(t===10?n:(t===2?"0b":t===8?"0o":"0x")+n)}function De(e,n,t){let l=e.p++,r;if(!C(n)||!C(e.s.charCodeAt(e.p++))||!C(e.s.charCodeAt(e.p++))||!C(e.s.charCodeAt(e.p++)))return V(e,e.p=l,n,0,t);if(e.p+=5,C(e.s.charCodeAt(e.p++))||d.x("invalid date-time: date part is malformed",e,l),e.p>=e.s.length||((n=e.s.charCodeAt(e.p))!==32||(r=!0,!C(e.s.charCodeAt(e.p+1))))&&n!==84&&n!==116){let i=e.s.slice(l,e.p);return q(e,i,3,!1,l)}if(e.s.charCodeAt(e.p+=3)!==58&&d.x("invalid date-time: time part is malformed",e,l),e.s.charCodeAt(e.p+=3)===58&&(e.p+=3),e.s.charCodeAt(e.p)===46)for(;C(e.s.charCodeAt(++e.p)););if(n=e.s.charCodeAt(e.p)){if(n===90||n===122){let i=e.s.slice(l,++e.p);return q(e,i,1,r,l,"[+00:00]")}if(n===43||n===45){let i=e.s.slice(l,e.p+=6);return q(e,i,1,r,l,!e.ld&&"["+e.s.slice(e.p-6,e.p)+"]")}}let s=e.s.slice(l,e.p);return q(e,s,2,r,l)}function Se(e,n,t){let l=e.p;if(!C(n)||!C(e.s.charCodeAt(++e.p)))return V(e,--e.p,n,0,t);if(e.s.charCodeAt(e.p+=4)===58&&(e.p+=3),e.s.charCodeAt(e.p)===46)for(;C(e.s.charCodeAt(++e.p)););let r=e.s.slice(l,e.p);return q(e,r,4,!1,l)}function q(e,n,t,l,r,s){if(e.ld){let i=new j(n,t,l);return i.isValid()||d.x("invalid date",e,r),i}try{switch(s&&(n+=s),t){case 1:return Temporal.ZonedDateTime.from(n);case 2:return Temporal.PlainDateTime.from(n);case 3:return Temporal.PlainDate.from(n);case 4:return Temporal.PlainTime.from(n)}}catch(i){d.x(i instanceof Error?i.message:""+i,e,r)}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function Oe(e){for(;e.p<e.s.length;e.p++){let n=e.s.charCodeAt(e.p);if(n===10)break;if(n===13&&e.s.charCodeAt(e.p+1)===10){e.p++;break}(n<32&&n!==9||n===127)&&d.x("control characters are not allowed in comments",e)}}function E(e,n,t){let l;for(;e.p<e.s.length;){for(;e.p<e.s.length&&((l=e.s.charCodeAt(e.p))===32||l===9||!n&&(l===10||l===13&&e.s.charCodeAt(e.p+1)===10));)e.p++;if(t||l!==35)break;Oe(e)}}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function x(e,n=61){let t,l=0,r=[],s,i=e.s.charCodeAt(t=e.p);do{if(i===n)return l||d.x("unexpected end of key",e),l===1&&r.push(e.s.slice(s,e.p)),e.p++,r;i===46?(l||d.x("illegal empty bare key",e),l===1&&r.push(e.s.slice(s,e.p)),l=0):!l&&(i===34||i===39)?(i===e.s.charCodeAt(e.p+1)&&i===e.s.charCodeAt(e.p+2)&&d.x("illegal quoted key: multiline strings are not allowed",e),r.push(ye(e)),l=2,e.p--):i===32||i===9?l===1&&(r.push(e.s.slice(s,e.p)),l=2):l===2||i<48&&i!==45||i>57&&i<65||i>90&&i<97&&i!==95||i>122?d.x("illegal character in key",e):l||(l=1,s=e.p)}while(i=e.s.charCodeAt(++e.p));d.x("incomplete key-value: cannot find end of key",e,t)}function Le(e){let n=e.p++,t=Object.create(null),l=new Set,r;for(;e.p<e.s.length;){if(E(e),(r=e.s.charCodeAt(e.p))===125)return e.p++,t;let s,i=t,a=!1,u=e.p,f=x(e);for(let p=0;p<f.length;p++){p&&(i=a?i[s]:i[s]=Object.create(null)),s=f[p],(a=Object.hasOwn(i,s))&&(typeof i[s]!="object"||l.has(i[s]))&&d.x("trying to redefine an already defined value",e,u);let m=s==="__proto__";if(e.uk&&(m||s==="constructor")){i=e.uk!==1&&d.x("document contains an unsafe property",e,u);break}!a&&m&&Object.defineProperty(i,s,{enumerable:!0,configurable:!0,writable:!0})}a&&d.x("trying to redefine an already defined value",e,u),E(e,!0,!0);let c=ee(e,125);if(i&&typeof(i[s]=c)=="object"&&l.add(c),E(e),(r=e.s.charCodeAt(e.p++))===125)return t;r!==44&&d.x("expected comma or end of structure",e,e.p-1)}d.x("unfinished table",e,n)}function je(e){let n=e.p++,t=[],l;for(;e.p<e.s.length;){if(E(e),(l=e.s.charCodeAt(e.p))===93)return e.p++,t;if(t.push(ee(e,93)),E(e),(l=e.s.charCodeAt(e.p++))===93)return t;l!==44&&d.x("expected comma or end of structure",e,e.p-1)}d.x("unfinished array",e,n)}/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */function he(e,n,t,l,r){let s=t,i=l,a,u=!1,f;for(let c=0;c<n.length;c++){if(c){if(s=u?s[a]:s[a]=Object.create(null),i=(f=i[a]).c,r===0&&(f.t===1||f.t===2))return null;if(f.t===2){let p=s.length-1;s=s[p],i=i[p].c}}if(a=n[c],(u=Object.hasOwn(s,a))&&i[a]?.t===0&&i[a]?.d)return null;if(!u){let p=a==="__proto__";if(e.uk&&(p||a==="constructor"))return!1;p&&(Object.defineProperty(s,a,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(i,a,{enumerable:!0,configurable:!0,writable:!0})),i[a]={t:c<n.length-1&&r===2?3:r,d:!1,i:0,c:Object.create(null)}}}if(f=i[a],f.t!==r&&!(r===1&&f.t===3)||(r===2&&(f.d||(f.d=!0,s[a]=[]),s[a].push(s=Object.create(null)),f.c[f.i++]=f={t:1,d:!1,i:0,c:Object.create(null)}),f.d))return null;if(f.d=!0,r===1)s=u?s[a]:s[a]=Object.create(null);else if(r===0&&u)return null;return[a,s,f.c]}function pe(e,n,t){(n===null||e.uk===2)&&d.x(n===null?"trying to redefine an already defined table or value":"document contains an unsafe property",e,t)}function Ne(e,n={}){let t={s:e,p:0,d:n.maxDepth??1e3,bi:n.integersAsBigInt??!1,ld:n.useLegacyDate??!0,uk:n.unsafeKeyBehaviour==="throw"?2:n.unsafeKeyBehaviour==="drop"?1:0},l=Object.create(null),r=Object.create(null),s,i=!1,a=l,u=r;for(e.charCodeAt(0)===65279&&t.p++,E(t);t.p<e.length;){if(e.charCodeAt(t.p)===91){let f=e.charCodeAt(++t.p)===91;s=t.p+=+f,i=!1;let c=x(t,93);f&&(e.charCodeAt(t.p)!==93&&d.x("expected end of table array declaration",t),t.p++);let p=he(t,c,l,r,f?2:1);p?(u=p[2],a=p[1]):(pe(t,p,s),i=!0)}else{s=t.p;let f=x(t),c=he(t,f,a,u,0);!c&&!i&&pe(t,c,s),E(t,!0,!0);let p=ee(t,void 0);c&&!i&&(c[1][c[0]]=p)}E(t,!0),t.p<e.length&&(s=e.charCodeAt(t.p))!==10&&(s!==13||e.charCodeAt(t.p+1)!==10)&&d.x("each key-value declaration must be followed by an end-of-line",t),E(t)}return l}const X=[{id:1,english:"behalf",chinese:"方面, 利益, 赞同"},{id:2,english:"allergic",chinese:"过敏的"},{id:3,english:"exaggerate",chinese:"扩大, 增加; 夸大, 夸张"},{id:4,english:"particularly",chinese:"特别; 尤其"},{id:5,english:"mighty",chinese:"有力的；有势力的；强有力的"},{id:6,english:"substitute",chinese:"代替, 替换, 代用"},{id:7,english:"dispute",chinese:"辩论；阻止；抗拒；怀疑"},{id:8,english:"overwhelm",chinese:"覆盖，淹没; 压倒，制服"},{id:9,english:"expertise",chinese:"专门知识或技能"},{id:10,english:"out of the way",chinese:"偏远; 异常的, 罕见的"},{id:11,english:"bacterium",chinese:"细菌"},{id:12,english:"common era",chinese:"公元；公历纪元"},{id:13,english:"petrol",chinese:"汽油"},{id:14,english:"point of view",chinese:"观点"},{id:15,english:"CE",chinese:"公元"},{id:16,english:"dialect",chinese:"方言，土话"},{id:17,english:"drought",chinese:"干旱；缺乏"},{id:18,english:"erupt",chinese:"爆发, 喷发; 突然发生"},{id:19,english:"evacuate",chinese:"排泄；疏散，撤退"},{id:20,english:"hurricane",chinese:"飓风, 旋风"},{id:21,english:"jog",chinese:"慢走；慢跑; 轻敲，轻推"},{id:22,english:"kit",chinese:"衣物和装备; 成套用品"},{id:23,english:"landfall",chinese:"着陆"},{id:24,english:"landslide",chinese:"山崩;崩塌;滑坡"},{id:25,english:"magnitude",chinese:"巨大; 重要性; 星等"},{id:26,english:"now and then",chinese:"有时, 时而, 不时"},{id:27,english:"percent",chinese:"百分比，百分率"},{id:28,english:"push-up",chinese:"俯卧撑"},{id:29,english:"rather than",chinese:"宁可...也不愿,而不是"},{id:30,english:"revive",chinese:"苏醒；复兴；复活"},{id:31,english:"stricken",chinese:"受灾的, 遭损害的"},{id:32,english:"summary",chinese:"扼要的；概要，摘要"},{id:33,english:"sweep away",chinese:"清除；一扫而空"},{id:34,english:"tornado",chinese:"旋风；龙卷风"},{id:35,english:"tsunami",chinese:"海啸"},{id:36,english:"unify",chinese:"统一；使相同，使一致"},{id:37,english:"volcanic eruption",chinese:"火山爆发"},{id:38,english:"whistle",chinese:"口哨；啸啸声；汽笛"},{id:39,english:"addict",chinese:"有瘾的人，入迷的人"},{id:40,english:"BCE",chinese:"公元前"},{id:41,english:"brochure",chinese:"手册，小册子"},{id:42,english:"cheat",chinese:"欺骗；骗取；作弊"},{id:43,english:"check in",chinese:"登记签到"},{id:44,english:"check out",chinese:"检验；结账离开"},{id:45,english:"come along",chinese:"出现；一起来；进步"},{id:46,english:"Cusco",chinese:"库斯科"},{id:47,english:"empire",chinese:"帝国；帝王统治"},{id:48,english:"even though",chinese:"即使"},{id:49,english:"extra-curricular",chinese:"课外的"},{id:50,english:"fall apart",chinese:"散开, 崩溃, 破碎"}];function ce(){if(typeof localStorage<"u"){const e=localStorage.getItem("bunny_learned_words");if(e)return JSON.parse(e)}return[]}function ge(e){typeof localStorage<"u"&&localStorage.setItem("bunny_learned_words",JSON.stringify(e))}document.addEventListener("astro:page-load",()=>{We()});const me=Z.resolve("src/data/memos"),$e=new Set(["mood","thoughts","uncategorized"]),be=[];for(const e of Z.readdirSync(me).sort()){if(!e.endsWith(".toml"))continue;const n=Z.basename(e,".toml");if(!$e.has(n))continue;const t=Z.readFileSync(Z.join(me,e),"utf8"),l=Ne(t);if(Array.isArray(l.memos))for(const r of l.memos)be.push({text:r.text,date:r.date,images:r.images,location:r.location,mode:r.mode})}function We(){const e=document.getElementById("refreshStatusBtn"),n=document.getElementById("wordModeBtn"),t=document.getElementById("statuscafe-content"),l=document.getElementById("wordContent"),r=document.getElementById("wordQuestion"),s=document.getElementById("wordFeedback"),i=document.getElementById("wordMeta"),a=document.getElementById("wordOptions"),u=document.getElementById("nextContainer"),f=document.getElementById("statuscafe-username"),c=document.getElementById("statusBubble"),p=document.getElementById("bunnyImage"),m=document.getElementById("wordInput"),g=document.getElementById("submitAnswerBtn");let y=[],S=-1,z=!1,N=!1,$=!1,M=null,W=!1,O=[],k=ce(),G=X.length,F=0;const te=500,we="https://i.postimg.cc/9MLD69pb/Gif260720.gif",Ae="https://pic1.imgdb.cn/i/0340BRmjHT2kikvEmL4Kmc.png";let b=null,Q=!1;function _(){p&&(Q||(Q=!0,p.style.transition="opacity 0.1s",p.style.opacity="1",setTimeout(()=>{p.src=Ae,p.style.opacity="1"},300)))}function H(){b&&(clearTimeout(b),b=null),p&&Q&&(Q=!1,p.style.transition="opacity 0.3s",p.style.opacity="0",setTimeout(()=>{p.src=we,p.style.opacity="1"},300))}async function ne(){try{const h=await(await fetch("https://status.cafe/users/isntbunny.atom")).text(),w=new DOMParser().parseFromString(h,"text/xml").querySelectorAll("entry"),I=[];return w.forEach(D=>{const A=D.querySelector("content")?.textContent,P=D.querySelector("title")?.textContent,L=A||P,K=D.querySelector("published")?.textContent;if(L&&L.trim()){const de=L.trim();de.length>0&&I.push({text:de,date:K||null})}}),I}catch(o){return console.error("大脑过载:",o),[]}}function ie(o){const h=[];return o.forEach(v=>{h.push({type:"status",text:v.text,date:v.date})}),[...be].sort(()=>Math.random()-.5).forEach(v=>{h.push({type:"custom",text:v.text,date:v.date||null})}),h.sort(()=>Math.random()-.5)}function se(o){if(!o)return"";let h;const T=/^(\d{4})-(\d{2})-(\d{2})$/.exec(o);if(T?h=new Date(Number(T[1]),Number(T[2])-1,Number(T[3])):h=new Date(o),isNaN(h))return o;const w=new Date-h;if(w<0)return o;const I=Math.floor(w/(1e3*60)),D=Math.floor(w/(1e3*60*60)),A=Math.floor(w/(1e3*60*60*24));if(I<1)return"刚刚";if(I<60)return`${I} 分钟前`;if(D<24)return`${D} 小时前`;if(A===1)return"昨天";if(A<7)return`${A} 天前`;if(A<14)return"一周前";if(A<21)return"两周前";if(A<30)return"三周前";if(A<180){const L=Math.floor(A/15),K=Math.floor(L/2);return L%2===1?`${K} 个半月前`:`${K} 个月前`}if(A<365)return"半年前";const P=Math.floor(A/365);return P===1?"一年前":P===2?"两年前":`${P} 年前`}function B(o){o&&(o.scrollTop=o.scrollHeight)}function ve(o,h,T=89){return new Promise(v=>{if(N){v();return}N=!0;let w=0;o.textContent="",H();function I(){if(w<h.length){o.textContent+=h.charAt(w),w++,B(o);const D=T+Math.random()*15;setTimeout(I,D)}else N=!1,B(o),_(),v()}I()})}async function J(o){if(!y.length||o<0||o>=y.length||N)return;const h=y[o];t.textContent="",await ve(t,h.text,89),B(t),f&&(h.type==="status"?f.textContent=h.date?se(h.date):"thinking":h.type==="custom"?f.textContent=h.date?se(h.date):"刚刚说道":f.textContent="thinking")}async function le(){if(z||N)return;const o=Date.now();if(!(o-F<te)){if(F=o,$&&ue(),y.length===0){z=!0,t.textContent="讓Bunny想一想...",B(t);const h=await ne();if(y=ie(h),S=-1,z=!1,y.length===0){t.textContent="不知道humm",B(t),f&&(f.textContent="放棄思考");return}}S=(S+1)%y.length,await J(S)}}function ke(){const o=X.filter(h=>!k.includes(h.id));return o.length===0?(k=[],ge(k),[...X].sort(()=>Math.random()-.5)):o.sort(()=>Math.random()-.5)}function re(){if(O=ke(),O.length===0){r.textContent="太棒了！所有单词都学完了！",s.textContent="",s.style.opacity="1",i.textContent=` ${k.length}/${G}`,m&&(m.style.display="none"),g&&(g.style.display="none"),u.style.display="none",f.textContent="完成！",_();return}oe()}function oe(){if(O.length===0){re();return}M=O[0],W=!1,r.textContent=` ${M.chinese}`,i.textContent=`已答对 ${k.length}/${G}`,s.textContent="",s.style.opacity="0",s.style.color="",m&&(m.style.display="block",m.value="",m.disabled=!1,m.focus()),g&&(g.style.display="block",g.disabled=!1),u.style.display="none",f.textContent=`已答对 ${k.length}/${G}`,H(),b&&clearTimeout(b),b=setTimeout(()=>{W||_()},3e3)}function ae(){if(W||!M||!m)return;const o=m.value;if(o.trim().length===0){s.textContent="请输入你的答案哦~",s.style.color="#f59e0b",s.style.opacity="1";return}W=!0,b&&(clearTimeout(b),b=null),H(),m&&(m.disabled=!0),g&&(g.disabled=!0);const h=M.english.trim().toLowerCase();o.trim().toLowerCase()===h?(k.includes(M.id)||(k.push(M.id),ge(k)),s.textContent="答对了捏！厉害——",s.style.color="#4ade80"):(s.textContent=`啊哦。有点小失误。正确答案是：「${M.english}」`,s.style.color="#f87171"),s.style.opacity="1",O=O.filter(w=>w.id!==M.id),u.style.display="block",_()}function fe(){oe()}function ue(){$=!1,t.style.display="flex",l.style.display="none",a.style.display="none",n.textContent="背单词",n.classList.remove("active"),e.style.display="inline-block",b&&(clearTimeout(b),b=null)}function Be(){if($){if(ue(),y.length>0){const o=S>=0?S:0;J(o)}}else $=!0,t.style.display="none",l.style.display="flex",a.style.display="block",n.textContent="退出",n.classList.add("active"),e.style.display="none",m&&(m.style.display="block"),g&&(g.style.display="block"),k=ce(),re()}if(e&&e.addEventListener("click",le),n&&n.addEventListener("click",Be),g){g.replaceWith(g.cloneNode(!0));const o=document.getElementById("submitAnswerBtn");o&&o.addEventListener("click",function(h){h.preventDefault(),h.stopPropagation(),ae()})}const R=document.getElementById("nextWordBtn");if(R){R.replaceWith(R.cloneNode(!0));const o=document.getElementById("nextWordBtn");o&&o.addEventListener("click",function(h){h.preventDefault(),h.stopPropagation(),fe()})}m&&m.addEventListener("keydown",function(o){o.key==="Enter"&&(o.preventDefault(),o.stopPropagation(),W?fe():ae())}),c&&c.addEventListener("click",()=>{if($)return;const o=Date.now();o-F<te||(F=o,le())});async function Te(){try{t.textContent="最近好像没有什么可说的呢......（思考）",B(t);const o=await ne();y=ie(o),y.length>0?(S=0,await J(0),B(t)):(t.textContent="Bunny暂时失忆了...",B(t),f&&(f.textContent="放棄思考"))}catch(o){console.error("初始化失败:",o),t.textContent="大脑过载，请稍后再试",B(t),f&&(f.textContent="故障中")}_()}Te()}
