public class MyFirstClass{
public static void main(String [] args){
	System.out.println("rohan shamanthula");
	
	int a=5;
	int b=3;
	int c=a+b;
	
	float d=0.4f;
	float e=6.9f;
	float f=d+e;
	System.out.println("sum ="+c);
	System.out.println("sum ="+f);
	MyFirstClass tmp=new MyFirstClass();
	tmp.add(9,8);
	tmp.sum(0.3f,0.5f);
	tmp.stcon("reddy","rohan");
	tmp.add(9,8,8);
     }
	 public void add(int a,int b){
		 
		 int sum =a+b;
		 System.out.println("sum ="+sum);
		 
		 
	 }
	  public void sum(float d,float e){
		 
		 float suf =d+e;
		 System.out.println("sum of float numbers ="+suf);
		 
		 
	 }
	 public void stcon(String d,String e){
		 
		 String suf =d+e;
		 System.out.println("concatinated string ="+suf);
		 
		 
	 }
	 public void add(int a,int b,int c){
		 
		 int three =a+b+c;
		 System.out.println("sum ="+three);
		 
		 
	 }
	 
}