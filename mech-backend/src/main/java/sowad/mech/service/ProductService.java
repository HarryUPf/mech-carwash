package sowad.mech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sowad.mech.dao.ProductDAO;
import sowad.mech.model.Product;

@Service
public class ProductService {

	@Autowired
	private ProductDAO dao;

	public List<Product> findAll() {
		return dao.findAll();
	}

	public Product save(Product object) {
		return dao.save(object);
	}

	public void deleteById(int id) {
		dao.deleteById(id);
	}

	public Optional<Product> findById(int id) {
		return dao.findById(id);
	}
}
