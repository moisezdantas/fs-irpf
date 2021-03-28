package fit.restapi.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import fit.core.IrpfCalculator;
import fit.restapi.view.PersonVm;

@RestController
@RequestMapping("/irpf")
@CrossOrigin(origins = {"http://127.0.0.1:3000", "http://localhost:3000", "http://127.0.0.1:8000"})
public class IrpfController {
    @PostMapping("/calculate")
    public double calculate(@RequestBody PersonVm person) {
        var irpf = new IrpfCalculator(2021, person.getTotalSalary(), person.getDependentsNumber()).calculate();

        return irpf;
    }
}
