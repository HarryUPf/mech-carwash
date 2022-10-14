package sowad.mech.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sowad.mech.model.ProductOrder;
import sowad.mech.repository.ProductOrderRepository;

@Repository
public class ProductOrderDAO {

	@Autowired
	private ProductOrderRepository repo;

	public List<ProductOrder> findAll() {
		return repo.findAll();
	}

	public Optional<ProductOrder> findById(int id) {
		return repo.findById(id);
	}
	
	public ProductOrder save(ProductOrder object) {
		return repo.save(object);
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
