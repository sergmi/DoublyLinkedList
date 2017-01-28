const Node = require('./node');

class LinkedList {
    constructor() {
		this.length=0;	
	}

    append(data) {
		var node=new Node;
		node.data=data;	
		node.numb=this.length;
		if(this._head==null){
			this._head=node;
			this._tail=node;
			this.length=1;
		}
		else if(this.length==1){
		
			this._head.next=node;
			node.prev=this._head;
			this._tail=node;
			this.length=this.length+1;
		}
		else if(this.length>1){
			this._tail.next=node;
			node.prev=this._tail;
			this._tail=node;
			this.length=this.length+1;
		}
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var el=this._head;
		while(index!=el.numb){
			el=el.next;
		}
		if(index==el.numb){
			return el.data;
		}
		else {
			return;
		}
	}

    insertAt(index, data) {
		var newList=this, elem;
		var el=this._head;
		while(index!=el.numb){
			if(el.numb==0){
				elem=el;
				newList._head=elem;
			}
			else if(el.numb>0){
			
				elem.next=el;
			}
			el=el.next;
		}
		var node=new Node;
		node.data=data;
		elem=elem.next;
		node.prev=elem;
		node.numb=el.numb;
		elem.next=node;
		el.numb=el.numb+1;
		node.next=el;
		
		while(this.length!=el.numb){
			el=el.next;
			el.numb=el.numb+1;			
		}
		newList._tail=el;
		newList.length=this.length+1;
		return newList;	
	}

    isEmpty() {
		if(this.length==0){
			return true;
		}
		else{
			return false;
		}
	}

    clear() {
		this._head.data=null;
		this._tail.data=null;
		this.length=0;
	}

    deleteAt(index) {
		var newList=new LinkedList, elem=new Node;
		var el=this._head;
		while(index!=el.numb){
			if(el.numb==0){
				elem=el;
				newList._head=elem;
			}
			else if(el.numb>0){
			
				elem.next=el;
			}
			el=el.next;
		}	
		
		while((this.length-2)!=el.numb){
			elem=elem.next;
			el=el.next;
			el.numb=el.numb-1;
			elem.next=el;			
		}
		newList._tail=el;
		newList.length=this.length-1;
		return newList;	
	}

    reverse() {	
	
	}

    indexOf(data) {
		var el=this._head;
		while(data!=el.data){			
				el=el.next;
				if(el==null){
					return -1;				
				}
		}		
		return el.numb;
	}
}

module.exports = LinkedList;
