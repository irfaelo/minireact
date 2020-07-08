let _foreach = (v,f) => {
  /*(Array.isArray(v)) ? v.forEach(f(i)) :*/ Object.keys(v).forEach( (i) => f(i) ) ; 
}

let domel = (tag,ats,inn) => {
  let str ='';
  
  _foreach(ats,(s) => str+= ' ' + s + '="'+ats[s]+'"')
  return `<${tag}${str}>${inn}</${tag}>`;
}
