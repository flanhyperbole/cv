
class PageSwitch extends HTMLElement {
    constructor() {
        super();
        console.log('graid')
        const shadow = this.attachShadow({mode: 'open'});
        const body = document.createElement("div");
        body.setAttribute("class", "pageswitch");
        const startColor = this.hasAttribute("startColor")
            ? this.getAttribute("startColor")
            : "#cccccc";


        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "./static/transition.css")
        
        const dynamicStyle = document.createElement("style") 
        const rootVars = getComputedStyle(document.documentElement).getPropertyValue('--lt-green')
        dynamicStyle.textContent = `
            .pageswitch {
                background-color: ${rootVars}
            }
        `;
        

        shadow.appendChild(style);
        shadow.appendChild(dynamicStyle);
        console.log(style.isConnected);
        shadow.appendChild(body);
    }
}

export function setupPageSwich() {
    console.log('aaasad')
    customElements.define("page-switch", PageSwitch);
}