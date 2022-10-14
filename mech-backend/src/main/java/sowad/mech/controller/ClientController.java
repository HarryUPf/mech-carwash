package sowad.mech.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sowad.mech.model.Client;
import sowad.mech.service.ClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"/client"})
public class ClientController {

	@Autowired
	private ClientService service;

	@GetMapping
	public List<Client> read() {
		return service.findAll();
	}

	@PostMapping
	public Client create(@RequestBody Client object) {
		return service.save(object);
	}

	@GetMapping(path = {"/{id}"})
	public Optional<Client> readId(@PathVariable("id") int id) {
		return service.findById(id);
	}
	
	@PutMapping(path = {"/{id}"})
	public Client update(@RequestBody Client object,@PathVariable("id") int id) {
		object.setId(id);
		return service.save(object);
	}

	@DeleteMapping(path = {"/{id}"})
	public void delete(@PathVariable("id") int id) {
		service.deleteById(id);
	}
}
