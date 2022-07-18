package Day2;

import java.util.Arrays;

public class CycleSwaps {
    static void swaps(int[] array){
        int last = array[array.length-1];
        recurs(array,array.length,0);
        array[0] = last;
    }
    static void recurs(int[] arr, int n, int pre){
        if ( pre == n-1 ) {
//            arr[pre] = arr[pre-1];
            return;
        }
        pre = pre+1;
        recurs(arr,n,pre);
        arr[pre] = arr[pre-1];
    }
//    static void nSwaps(int[] array, int n){
//        ArrayList<Integer> ls = new ArrayList<>();
//        for ( int i : array ) ls.add(i);
//        while ( n-- != 0 ) {
//            int first = ls.remove(ls.size()-1);
//            ls.add(0,first);
//        }
//        int a = 0;
//        for ( int i : ls ) {
//            array[a++] = i;
//        }
//    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 7, 4};
        swaps(arr);
        int n = 2;
        while ( n-- != 0 ) swaps(arr);
        System.out.println(Arrays.toString(arr));
    }
}
