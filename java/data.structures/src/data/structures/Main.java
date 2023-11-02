package data.structures;

import java.util.Arrays;
import java.util.Stack;

public class Main {

	public static void main(String[] args) {
		//var list = new LinkedList(); 
		//System.out.println("SIZE of the list is : " + list.size());
//        list.addLast(10);
//        list.addLast(20);
//        list.addLast(30);
//        list.addLast(40);
        //System.out.println("SIZE of the list is : " + list.size());
        //list.reverse();
//        System.out.println("Index of 20 is : " + list.indexOf(20));
//        System.out.println("Index of 40 is : " + list.indexOf(40));
//        System.out.println("List contains 30 : " + list.contains(30));
//        System.out.println("List contains 40 : " + list.contains(40));
//		System.out.println("SIZE of the list is : " + list.size());
//		
//        list.removeFirst();
//        System.out.println("List contains 10 : " + list.contains(10));
//		System.out.println("SIZE of the list is : " + list.size());
//		
//        list.removeLast();
//        System.out.println("List contains 30 : " + list.contains(30));
//		System.out.println("SIZE of the list is : " + list.size());
        
//        var array = list.toArray();
//        System.out.println(Arrays.toString(array));
//        list.printMiddle();
		
//		Stack<Integer> stack = new Stack<>();
//		stack.push(10);
//		stack.push(20);
//		stack.push(30);
//		System.out.println("Current Stack: " + stack);
//		
//		var poppedValue = stack.pop();
//		System.out.println("Performed Pop(). Popped Value from Stack: " + poppedValue);
//		System.out.println("Current Stack: " + stack);
//
//		var topValue = stack.peek();
//		System.out.println("Top Value from Stack: " + topValue);
//
//		var isEmpty = stack.isEmpty();
//		System.out.println("Is Current Stack Empty? " + isEmpty);
		
		var stringReverser = new StringReverser();
		String str = "abcd";
		System.out.println("Original String : " +  str);
		System.out.println("Reverse String : " +  stringReverser.reverse(str));
		
	}

}
