package sowad.mech.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Car;
import sowad.mech.repository.CarRepository;

@Repository
public class CarDAO {

	@Autowired
	private CarRepository repo;

	public List<Car> findAll() {
		return repo.findAll();
	}

	public Optional<Car> findById(int id) {
		return repo.findById(id);
	}
	
	public Car save(Car object) {
		return repo.save(object);
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
