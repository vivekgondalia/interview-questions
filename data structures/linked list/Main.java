public class Main
{
    public static void main(String[] args) {
        var list = new LinkedList(); 
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addFirst(5);
        
        System.out.println("Index of 20 is : " + list.indexOf(20));
        System.out.println("Index of 20 is : " + list.indexOf(40));
        System.out.println("List contains 30 : " + list.contains(30));
        System.out.println("List contains 40 : " + list.contains(40));
        list.removeFirst();
        System.out.println("List contains 10 : " + list.contains(10));
        list.removeLast();
        System.out.println("List contains 30 : " + list.contains(30));
    }
}
