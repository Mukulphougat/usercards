package AnnotationsInJava;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@interface SmartPhone{
    String brand() default "Samsung";
    int version() default 5;
}
@SmartPhone(brand = "Oneplus", version = 12)
class Phone{
    String brand;
    int version;
    public Phone(String brand, int version){
        this.brand = brand;
        this.version = version;
    }
}
public class annotationInJava {
    public static void main(String[] args) {
        Phone p = new Phone("Apple", 10);
        Class c = p.getClass();
        Annotation annotation = c.getAnnotation(SmartPhone.class);
        SmartPhone s = (SmartPhone) annotation;
        System.out.println(s.brand() + " " + s.version());
//        System.out.println(p.brand + " " + p.version);
    }
}
