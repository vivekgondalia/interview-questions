package data.structures;

import java.util.NoSuchElementException;

public class LinkedList {
    
	private class Node {
        private int value;
        private Node next;
    
        public Node(int value){
            this.value = value;
        }
    }
    

    private Node first;
    private Node last;
    private int size;
    
    //addLast
    public void addLast(int item){
        var node = new Node(item);
        
        if(isEmpty())
            first = last = node;
        else {
            last.next = node;
            last = node;
        }
        size++;
    }
    
    public void addFirst(int item){
        var node = new Node(item);
        
        if(isEmpty())
            first = last = node;
        else{
            node.next = first;
            first = node;
        }
        size++;
    }
    
    public int indexOf(int item){
        int index = 0;
        var current = first;
        while(current != null){
            if(current.value == item){
                return index;
            }
            else {
                index++;
                current = current.next; 
            }
        }
        return -1;
    }   
    
    public boolean contains(int item){
        return indexOf(item) != -1;
    }
    
    private Node getPrevious(Node node){
         var current = first;
        while(current != null){
            if(current.next == node) return current;
            current = current.next;
        }
        
        return null;
    }
    
    private boolean isEmpty(){
        return first == null;
    }
    
    public void removeFirst(){
	    if(isEmpty())
	        throw new NoSuchElementException();
	    
	    if(first == last){
	        first = last = null;
	    } else {	    	
	    	var second = first.next;
	    	first.next = null;
	    	first = second;
	    }
	    size--;
    }
    
    public void removeLast(){
        if(isEmpty())
            throw new NoSuchElementException();
        
        if(first == last){
            first = last = null;
        } else {
        	var previous = getPrevious(last);
        	last = previous;
        	last.next = null;        	
        }
        
        size--;
    }
    
    public int size() {
    	return size;
    }
    
    public int[] toArray() {
    	int[] array = new int[size];
    	var current = first;
    	var index = 0;
    	while(current != null) {
    		array[index++] = current.value;
    		current = current.next;
    	}
    	
    	return array;
    }

    public void reverse() {
    	if(isEmpty()) return;
    	
    	var prevNode= first;
    	var currNode = first.next;
    	//reverse the middle
    	while(currNode != null) {
        	var nextNode = currNode.next;
			currNode.next = prevNode;
			prevNode = currNode;
			currNode = nextNode;
    	}
    	
    	//set last
    	last = first;
    	last.next = null;
    	//set first
    	first = prevNode;
    }
    
    //find Kth node in one passing
    public int getKthFromTheEnd(int k) {
    	if(isEmpty()) 
    		throw new IllegalStateException();
    	
    	var a= first;
    	var b = first;
    	
    	//move "b" node ahead in the list
    	for(int i =0; i < k-1; i++) {
    		b = b.next;
    		if(b == null)
    			throw new IllegalArgumentException();
    	}
    	
    	while(b != last) {
    		a = a.next;
    		b = b.next;
    	}
    	return a.value;
    }
    
    public void printMiddle() {
    	if(isEmpty()) 
    		throw new IllegalStateException();
    	
    	var a = first;
    	var b = first;
    	while(b !=last && b.next != last) {
    		b = b.next.next;
    		a = a.next;
    	}
    	
    	if(b == last)
    		System.out.println(a.value);
    	else
    		System.out.println(a.value + ", " + a.next.value);
    }
}