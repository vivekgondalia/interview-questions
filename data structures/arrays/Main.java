
import java.util.ArrayList;

public class Main
{
    public static void main(String[] args) {
        Array numbers = new Array(3);
        numbers.insert(10);
        numbers.insert(20);
        numbers.insert(30);
        numbers.insert(40);
        numbers.reverse();
        System.out.println(numbers.max());
        System.out.println(numbers.indexOf(10));
        System.out.println(numbers.indexOf(100));
        numbers.print();
        
        //Dynamic Array
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(0);
        list.indexOf(3);
        list.lastIndexOf(2);
        list.contains(2);
        list.size();
        list.toArray();
        System.out.println(list);
        
    }
}
