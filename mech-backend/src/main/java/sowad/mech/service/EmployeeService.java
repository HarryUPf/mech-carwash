package sowad.mech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sowad.mech.dao.EmployeeDAO;
import sowad.mech.model.Employee;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeDAO dao;

	public List<Employee> findAll() {
		return dao.findAll();
	}

	public Employee save(Employee object) {
		return dao.save(object);
	}

	public void deleteById(int id) {
		dao.deleteById(id);
	}

	public Optional<Employee> findById(int id) {
		return dao.findById(id);
	}
}
