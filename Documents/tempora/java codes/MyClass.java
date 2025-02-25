import java.util.Scanner;

public class MyClass {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter an integer value for a:");
        int a = scanner.nextInt();
        System.out.println("Enter an integer value for b:");
        int b = scanner.nextInt();
        int c = a + b;
        System.out.println("Sum = " + c);

        System.out.println("Enter a float value for d:");
        float d = scanner.nextFloat();
        System.out.println("Enter a float value for e:");
        float e = scanner.nextFloat();
        float f = d + e;
        System.out.println("Sum of floats = " + f);

        System.out.println("Enter two integers for method add(int, int):");
        int x = scanner.nextInt();
        int y = scanner.nextInt();

        System.out.println("Enter two float values for method sum(float, float):");
        float p = scanner.nextFloat();
        float q = scanner.nextFloat();

        System.out.println("Enter two strings for concatenation:");
        String str1 = scanner.next();
        String str2 = scanner.next();

        System.out.println("Enter three integers for method add(int, int, int):");
        int m = scanner.nextInt();
        int n = scanner.nextInt();
        int o = scanner.nextInt();

        MyFirstClass tmp = new MyFirstClass();
        tmp.add(x, y);
        tmp.sum(p, q);
        tmp.stcon(str1, str2);
        tmp.add(m, n, o);

        scanner.close();
    }

    public void add(int a, int b) {
        int sum = a + b;
        System.out.println("Sum = " + sum);
    }

    public void sum(float d, float e) {
        float suf = d + e;
        System.out.println("Sum of float numbers = " + suf);
    }

    public void stcon(String d, String e) {
        String suf = d + e;
        System.out.println("Concatenated string = " + suf);
    }

    public void add(int a, int b, int c) {
        int three = a + b + c;
        System.out.println("Sum = " + three);
    }
}
