package sowad.mech.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Employee;
import sowad.mech.repository.EmployeeRepository;

@Repository
public class EmployeeDAO {

	@Autowired
	private EmployeeRepository repo;

	public List<Employee> findAll() {
		return repo.findAll();
	}

	public Optional<Employee> findById(int id) {
		return repo.findById(id);
	}
	
	public Employee save(Employee object) {
		return repo.save(object);
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
