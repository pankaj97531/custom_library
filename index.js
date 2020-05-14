function $(selector){
    const self={
        myElement : document.querySelector(selector),
        myHtml : ()=>{ return self.myElement },
        onEvent : (event,callback)=>{
            document.addEventListener(event,callback);
        },
        onHide : ()=>{
            self.myElement.style.display = "none";
        },
        myAttr : (name,value)=>{
            if(value){
                self.myElement.setAttribute(name,value)
            }else{
                return self.myElement.getAttribute(name);
            }
        } 
    }
    return self;
}
