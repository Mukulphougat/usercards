public class AddTwoStrings {
    public static String addStringToAnother(String first,String second){
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(first);
        stringBuilder.insert(2,second);
        return stringBuilder.toString();
    }
    public static void main(String[] args) {
        String newStr = addStringToAnother("mukul","Phougat");
        System.out.println(newStr);
    }
}
