package sowad.mech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {

}
