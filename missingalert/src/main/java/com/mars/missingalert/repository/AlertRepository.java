package com.mars.missingalert.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mars.missingalert.model.Alert;

import java.util.List;

public interface AlertRepository extends JpaRepository<Alert, Integer> {
    List<Alert> findByUsername(String username);
}
