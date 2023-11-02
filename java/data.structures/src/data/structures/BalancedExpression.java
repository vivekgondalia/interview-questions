package data.structures;
import java.util.Stack;

public class BalancedExpression {
	public boolean isBalanced(String input) {
		if (null == input || ((input.length() % 2) != 0))
		    return false;
		
		Stack<Character> stack = new Stack<>();
		
		for(char ch : input.toCharArray()) {
			if(isCharOpenBracket(ch))
				stack.push(ch);
			
			if(isCharCloseBracket(ch)) {
				if(stack.isEmpty())
					return false;
				stack.pop();
			}
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
