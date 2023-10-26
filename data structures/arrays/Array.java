public class Array {
    private int[] items;
    private int count =0;
    
    public Array(int length){
        items = new int[length];
    }
    
    
    public void reverse(){
        int[] newArr = new int[count];
        int counter = count;
        for(int i=0; i < count; i++){
            newArr[i] = items[counter-1];
            counter--;
        }
        items = newArr;
    }
    
    public int max(){
        int max = items[0];
        for(int i=1; i < count; i++){
            if(items[i] > max)
                max=items[i];
        }
        return max;
    }
    
    public int indexOf(int number){
        for(int i=0; i < count; i++){
            if(items[i] == number)
                return i;
        }
        return -1;
    }
    
    public void removeAt(int index){
        //validate the Index
        if(index < 0 || index >= count){
            throw new IllegalArgumentException();
        }
        
        //move everything over by 1 from the given index
        for(int i=index; i < count; i ++){
            items[i] = items[i+1];
        }
        count--;
    }
    
    public void insert(int number){
        //if array is full then resize it
        if(count == items.length){
            int[] newArr = new int[count * 2];
            
            for (int i = 0; i < count; i++){
                newArr[i] = items[i];
            }
            
            items = newArr;
        }
        //add new item to end of array
        items[count++] = number;
    }
    
    public void print(){
        for(int i =0; i < count; i++){
            System.out.println(items[i]);
        }
    }
    
}