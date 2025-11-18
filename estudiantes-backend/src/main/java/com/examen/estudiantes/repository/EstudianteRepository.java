package com.examen.estudiantes.repository;

import com.examen.estudiantes.entity.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {

    List<Estudiante> findByCarreraIgnoreCase(String carrera);

    @Query("SELECT AVG(e.promedio) FROM Estudiante e")
    Double promedioGeneral();
}
