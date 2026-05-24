abstract class BankAccount {
    private int accountNumber;
    private String accountHolderName;
    protected double balance;

    // Constructor
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Deposit method
    public void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Amount Deposited: " + amount);
    }

    // Display account details
    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    // Abstract method
    abstract void calculateInterest();
}

// SavingsAccount class
class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = balance * 0.05;
        System.out.println("Savings Account Interest: " + interest);
    }
}

// CurrentAccount class
class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = balance * 0.02;
        System.out.println("Current Account Interest: " + interest);
    }
}

// Main class
public class Exp10 {

    public static void main(String[] args) {

        // Savings Account
        System.out.println("----- Savings Account -----");
        SavingsAccount s1 = new SavingsAccount(101, "Rahul", 10000);

        s1.deposit(2000);
        s1.displayDetails();
        s1.calculateInterest();

        // Current Account
        System.out.println("\n----- Current Account -----");
        CurrentAccount c1 = new CurrentAccount(102, "Anita", 20000);

        c1.deposit(3000);
        c1.displayDetails();
        c1.calculateInterest();
    }
}