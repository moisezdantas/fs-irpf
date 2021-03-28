package fit.restapi.view;

public class PersonVm {
    private double totalSalary;
    private int dependentsNumber;

    public PersonVm() {
        super();
    }

    public double getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(double totalSalary) {
        this.totalSalary = totalSalary;
    }

    public int getDependentsNumber() {
        return dependentsNumber;
    }

    public void setDependentsNumber(int dependentsNumber) {
        this.dependentsNumber = dependentsNumber;
    }

    


}
