!function(e,o,t,n){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof r.parcelRequire&&r.parcelRequire,s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function a(t,n){if(!o[t]){if(!e[t]){var r="function"==typeof parcelRequire&&parcelRequire;if(!n&&r)return r(t,!0);if(i)return i(t,!0);if(s&&"string"==typeof t)return s(t);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}c.resolve=function(o){return e[t][1][o]||o},c.cache={};var d=o[t]=new a.Module(t);e[t][0].call(d.exports,c,d,d.exports,this)}return o[t].exports;function c(e){return a(c.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=o,a.parent=i,a.register=function(o,t){e[o]=[function(e,o){o.exports=t},{}]},r.parcelRequire=a;for(var l=0;l<t.length;l++)a(t[l]);if(t.length){var d=a(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}}({"8bb507ef039b2b3edd823590c0f19afe":[function(e,o,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.language=t.conf=void 0;var n={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["{","}"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),end:new RegExp("^\\s*\\{\\$ENDREGION\\}")}}};t.conf=n;t.language={defaultToken:"",tokenPostfix:".pascal",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["absolute","abstract","all","and_then","array","as","asm","attribute","begin","bindable","case","class","const","contains","default","div","else","end","except","exports","external","far","file","finalization","finally","forward","generic","goto","if","implements","import","in","index","inherited","initialization","interrupt","is","label","library","mod","module","name","near","not","object","of","on","only","operator","or_else","otherwise","override","package","packed","pow","private","program","protected","public","published","interface","implementation","qualified","read","record","resident","requires","resourcestring","restricted","segment","set","shl","shr","specialize","stored","then","threadvar","to","try","type","unit","uses","var","view","virtual","dynamic","overload","reintroduce","with","write","xor","true","false","procedure","function","constructor","destructor","property","break","continue","exit","abort","while","do","for","raise","repeat","until"],typeKeywords:["boolean","double","byte","integer","shortint","char","longint","float","string"],operators:["=",">","<","<=",">=","<>",":",":=","and","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\*\}]+/,"comment"],[/\}/,"comment","@pop"],[/[\{]/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\{/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}},{}]},{},[]);