package data.structures;
import java.util.Stack;

public class BalancedExpression {
	public boolean isBalanced(String input) {
		if (null == input || ((input.length() % 2) != 0))
		    return false;
		
		Stack<Character> stack = new Stack<>();
		
		for(int i =0; i < input.length(); i++) {
			Character currChar = input.charAt(i);
			//if str[i] is open-bracket ({[< then push to stack
			if(isCharOpenBracket(currChar))
				stack.push(currChar);
			
			//if str[i] is closed-bracket )}}> then pop the stack and compare
			if(isCharCloseBracket(currChar)) {
				//if str[i] == stack.pop() continue till the end
				if(stack.isEmpty())
					return false;
				Character lastOpenBracket = stack.pop();
				
				//if str[i] != stack.pop() break; return false
//				if(currChar != lastOpenBracket)
//					break;
			}
				
			//if anything else then brackets continue for loop;
		}
		
		if(stack.isEmpty())
			return true;
		
		return false;
	}
	
	private boolean isCharOpenBracket(Character c) {
		if(c == '(' || c == '{' || c == '[' || c == '<')
			return true;
		return false;
	}
	
	private boolean isCharCloseBracket(Character c) {
		if(c == ')' || c == '}' || c == ']' || c == '>')
			return true;
		return false;
	}
}
