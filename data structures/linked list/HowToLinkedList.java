
import java.util.LinkedList;
import java.util.Arrays;

public class Main
{
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addFirst(5);
        list.removeLast();
        list.removeFirst();
        list.remove(0);
        
        System.out.println("List : " + list);
        System.out.println("List contains 20 : " + list.contains(20));
        System.out.println("List contains 20 at index : " + list.indexOf(20));
        System.out.println("Size of the list : " + list.size());
        
        var array = list.toArray();
        System.out.println(Arrays.toString(array));
        
    }
}
