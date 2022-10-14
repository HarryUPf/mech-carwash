package sowad.mech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sowad.mech.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
