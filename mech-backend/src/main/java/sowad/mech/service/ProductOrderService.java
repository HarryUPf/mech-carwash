package sowad.mech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sowad.mech.dao.ProductOrderDAO;
import sowad.mech.model.ProductOrder;

@Service
public class ProductOrderService {

	@Autowired
	private ProductOrderDAO dao;

	public List<ProductOrder> findAll() {
		return dao.findAll();
	}

	public ProductOrder save(ProductOrder object) {
		return dao.save(object);
	}

	public void deleteById(int id) {
		dao.deleteById(id);
	}

	public Optional<ProductOrder> findById(int id) {
		return dao.findById(id);
	}
}
