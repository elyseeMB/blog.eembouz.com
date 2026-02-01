class m{constructor(t){if(this.item=t,!t||(this.children=Array.from(t.children),this.children.length===0))return;const n=this.item?.parentElement;this.wrapper=document.createElement("div"),this.wrapper.setAttribute("class","bg-secondary absolute rounded-md"),this.wrapper.style.opacity="0",this.wrapper.style.pointerEvents="none",n?.prepend(this.wrapper),n?.addEventListener("mouseleave",()=>{this.wrapper.style.opacity="0"},{signal:this.controller.signal}),this.itemSizes=new Map(this.children.map((s,r)=>[r,s])),this.children.forEach((s,r)=>{s.addEventListener("mouseenter",e=>this.handleMouseenter(e,r),{signal:this.controller.signal})})}itemSizes;children;wrapper;controller=new AbortController;destroy(){this.wrapper.remove(),this.controller.abort()}handleMouseenter=(t,n)=>{const s=t.currentTarget.firstElementChild,r=t.currentTarget,e=r.getBoundingClientRect(),i=(t.clientX-e.left-e.width/2)/(e.width/2),o=(t.clientY-e.top-e.height/2)/(e.height/2),a=i,l=o,h=0,c=1+Math.abs(i)*.1,p=1+Math.abs(o)*.05;this.wrapper.setAttribute("style",`left: ${r.offsetLeft}px;
        top: ${this.itemSizes.get(n)?.offsetTop||0}px;
        width: ${s.offsetWidth}px;
        height: ${r.offsetHeight}px;
        transform: translate3d(${a}px, ${l}px, ${h}px) scale(${c}, ${p});
        transform-origin: 50% 50% 0px;
        z-index: -1;
        opacity: 1;
        transition: all 0.25s ease;`)}}export{m as ChapiterAnimation};
