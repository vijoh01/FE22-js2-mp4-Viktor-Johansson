var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequire5146;null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var t=$parcel$inits[e];delete $parcel$inits[e];var n={id:e,exports:{}};return $parcel$modules[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r},parcelRequire.register=function(e,t){$parcel$inits[e]=t},$parcel$global.parcelRequire5146=parcelRequire),parcelRequire.register("6reUv",(function(module,exports){const buttonContainer=document.querySelector(".buttons"),screenInput=document.querySelector(".screenText"),buttonArr=["Clear","/","7","8","9","*","4","5","6","-","1","2","3","+","0","="],createButton=e=>{const t=document.createElement("button");t.className="button"+e,t.innerText=e,buttonContainer.append(t)};buttonArr.forEach((e=>{createButton(e)}));let done=!1,text="";buttonContainer.addEventListener("click",(event=>{if(event.stopPropagation(),event.preventDefault(),event.target.classList.contains("button"+event.target.innerText))switch(done&&(text="",screenInput.innerText=text,done=!1),event.target.innerText){case"Clear":text="",screenInput.innerText=text;break;case"=":try{const result=eval(text);text+=`=${result}`,screenInput.innerText=text,done=!0}catch(e){screenInput.innerText="Error",done=!0}break;default:text+=event.target.innerText,screenInput.innerText=text}}))})),parcelRequire("6reUv");
//# sourceMappingURL=index.23c72a3e.js.map
