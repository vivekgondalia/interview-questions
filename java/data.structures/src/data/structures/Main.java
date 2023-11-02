package data.structures;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		var list = new LinkedList(); 
		//System.out.println("SIZE of the list is : " + list.size());
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);
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
        
        var array = list.toArray();
        System.out.println(Arrays.toString(array));
        list.printMiddle();

	}

}
