package data.structures;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class BalancedExpression {
	//ORDERS of respective character in below two arrays must match
	private final List<Character> openBrackets = Arrays.asList('(', '{', '[', '<');
	private final List<Character> closeBrackets = Arrays.asList(')', '}', ']', '>');

	public boolean isBalanced(String input) {
		if (null == input || ((input.length() % 2) != 0))
		    return false;
		
		Stack<Character> stack = new Stack<>();
		
		for(char ch : input.toCharArray()) {
			if(isOpenBracket(ch))
				stack.push(ch);
			
			if(isCloseBracket(ch)) {
				if(stack.isEmpty())
					return false;
				
				var lastOpenBracket = stack.pop();
				if(!bracketsMatch(lastOpenBracket, ch))
					return false;
			}
		}
		
		if(stack.isEmpty())
			return true;
		
		return false;
	}
	
	private boolean isOpenBracket(char ch) {
		return openBrackets.contains(ch);
	}
	
	private boolean isCloseBracket(char ch) {
		return closeBrackets.contains(ch);
	}
	
	private boolean bracketsMatch(char open, char close) {
		return openBrackets.indexOf(open) == closeBrackets.indexOf(close);
	}
}
