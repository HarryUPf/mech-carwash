package sowad.mech.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Product;
import sowad.mech.repository.ProductRepository;

@Repository
public class ProductDAO {

	@Autowired
	private ProductRepository repo;

	public List<Product> findAll() {
		return repo.findAll();
	}

	public Optional<Product> findById(int id) {
		return repo.findById(id);
	}
	
	public Product save(Product object) {
		return repo.save(object);
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
