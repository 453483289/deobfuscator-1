!function(e,n,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof i.parcelRequire&&i.parcelRequire,s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(t,o){if(!n[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!o&&i)return i(t,!0);if(r)return r(t,!0);if(s&&"string"==typeof t)return s(t);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}c.resolve=function(n){return e[t][1][n]||n},c.cache={};var f=n[t]=new l.Module(t);e[t][0].call(f.exports,c,f,f.exports,this)}return n[t].exports;function c(e){return l(c.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=n,l.parent=r,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},i.parcelRequire=l;for(var a=0;a<t.length;a++)l(t[a]);if(t.length){var f=l(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define((function(){return f}))}}({e3863a82fefcc04cf309342d26b94386:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.language=t.conf=void 0;var o={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*//\\s*#region\\b|^\\s*\\(\\*\\s*#region(.*)\\*\\)"),end:new RegExp("^\\s*//\\s*#endregion\\b|^\\s*\\(\\*\\s*#endregion\\s*\\*\\)")}}};t.conf=o;t.language={defaultToken:"",tokenPostfix:".fs",keywords:["abstract","and","atomic","as","assert","asr","base","begin","break","checked","component","const","constraint","constructor","continue","class","default","delegate","do","done","downcast","downto","elif","else","end","exception","eager","event","external","extern","false","finally","for","fun","function","fixed","functor","global","if","in","include","inherit","inline","interface","internal","land","lor","lsl","lsr","lxor","lazy","let","match","member","mod","module","mutable","namespace","method","mixin","new","not","null","of","open","or","object","override","private","parallel","process","protected","pure","public","rec","return","static","sealed","struct","sig","then","to","true","tailcall","trait","try","type","upcast","use","val","void","virtual","volatile","when","while","with","yield"],symbols:/[=><!~?:&|+\-*\^%;\.,\/]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,integersuffix:/[uU]?[yslnLI]?/,floatsuffix:/[fFmM]?/,tokenizer:{root:[[/[a-zA-Z_]\w*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/\[<.*>\]/,"annotation"],[/^#(if|else|endif)/,"keyword"],[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0x[0-9a-fA-F]+LF/,"number.float"],[/0x[0-9a-fA-F]+(@integersuffix)/,"number.hex"],[/0b[0-1]+(@integersuffix)/,"number.bin"],[/\d+(@integersuffix)/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"""/,"string",'@string."""'],[/"/,"string",'@string."'],[/\@"/,{token:"string.quote",next:"@litstring"}],[/'[^\\']'B?/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],whitespace:[[/[ \t\r\n]+/,""],[/\(\*(?!\))/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^*(]+/,"comment"],[/\*\)/,"comment","@pop"],[/\*/,"comment"],[/\(\*\)/,"comment"],[/\(/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/("""|"B?)/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]],litstring:[[/[^"]+/,"string"],[/""/,"string.escape"],[/"/,{token:"string.quote",next:"@pop"}]]}}},{}]},{},[]);