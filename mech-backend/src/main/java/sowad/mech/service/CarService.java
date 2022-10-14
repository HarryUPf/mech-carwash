package sowad.mech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sowad.mech.dao.CarDAO;
import sowad.mech.model.Car;

@Service
public class CarService {

	@Autowired
	private CarDAO dao;

	public List<Car> findAll() {
		return dao.findAll();
	}

	public Car save(Car object) {
		return dao.save(object);
	}

	public void deleteById(int id) {
		dao.deleteById(id);
	}

	public Optional<Car> findById(int id) {
		return dao.findById(id);
	}
}
