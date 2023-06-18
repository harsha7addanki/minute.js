import { Attribute } from "./Attribute";

class Renderable{
    element : HTMLElement
    constructor(element,innerHTML,attr){
        this.element = document.createElement(element);
        this.element.innerHTML = innerHTML;
        for(let key of attr){
            this.element.setAttribute(key,attr[key])
        }
    }

    render(){
        return this.element
    }
}

function createElement(type:string, innerHTML:string, attr : Attribute){
    return new Renderable(type,innerHTML,attr);
}
export {Renderable, createElement, Attribute}