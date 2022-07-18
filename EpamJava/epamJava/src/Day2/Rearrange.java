package Day2;

import java.util.*;

public class Rearrange {
    public static void main(String[] args) {
        int[] arr = {12, 15, 43, 5, 4, 56, 34, 10, 3};
        int in = 0;
        int x = 12;
        HashMap<Integer,Integer> map = new HashMap<>();
        map.put(1,1);
        map.put(2,map.getOrDefault(2,3)+1);
        for ( int i : map.keySet() ) {
            System.out.println(i+"->"+map.get(i));
        }
//        System.out.println(map);
//        Arrays.stream(arr).sorted();
//        List<Integer> ls = new ArrayList<>();
//        for ( int i : arr ) {
//            if ( i < 12 ) ls.add(i);
//        }
//        ls.add(12);
//        for ( int i : arr ) {
//            if ( i > 12 ) ls.add(i);
//        }
//        System.out.println(Collections.singletonList(ls));
    }
}
