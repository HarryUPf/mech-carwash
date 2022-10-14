package sowad.mech.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Client;
import sowad.mech.repository.ClientRepository;

@Repository
public class ClientDAO {

	@Autowired
	private ClientRepository repo;

	public List<Client> findAll() {
		return repo.findAll();
	}

	public Optional<Client> findById(int id) {
		return repo.findById(id);
	}
	
	public Client save(Client object) {
		return repo.save(object);
	}

	public void deleteById(int id) {
		repo.deleteById(id);
	}
}
