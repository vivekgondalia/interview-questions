package data.structures;

import java.util.Stack;

public class StringReverser {
	public String reverse(String input) {
		if(input == null)
			throw new IllegalArgumentException();
		
		Stack<Character> stack = new Stack<>();
		
		//traditional way
//		for(int i =0; i < input.length(); i++) {
//			stack.push(input.charAt(i));
//		}
		
		//cleaner way
		for(char ch : input.toCharArray())
			stack.push(ch);

//		String reverseStr = "";
//		while(!stack.isEmpty()) {
//			//string concatenations will be expensive. new memory every iteration
//			reverseStr += stack.pop();
//		}

		//More efficient way - used when many string manipulations
		StringBuffer reversedStrBuffer = new StringBuffer();
		while(!stack.isEmpty()) {
			reversedStrBuffer.append(stack.pop());
		}
		
		return reversedStrBuffer.toString();
	}
}
