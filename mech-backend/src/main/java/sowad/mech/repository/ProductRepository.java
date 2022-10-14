package sowad.mech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
