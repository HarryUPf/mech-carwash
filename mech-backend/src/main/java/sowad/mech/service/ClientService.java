package sowad.mech.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sowad.mech.dao.ClientDAO;
import sowad.mech.model.Client;

@Service
public class ClientService {

	@Autowired
	private ClientDAO dao;

	public List<Client> findAll() {
		return dao.findAll();
	}

	public Client save(Client object) {
		return dao.save(object);
	}

	public void deleteById(int id) {
		dao.deleteById(id);
	}

	public Optional<Client> findById(int id) {
		return dao.findById(id);
	}
}
