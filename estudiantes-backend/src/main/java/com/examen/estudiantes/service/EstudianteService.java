package com.examen.estudiantes.service;

import com.examen.estudiantes.entity.Estudiante;
import com.examen.estudiantes.repository.EstudianteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteService {

    private final EstudianteRepository repository;

    public EstudianteService(EstudianteRepository repository) {
        this.repository = repository;
    }

    public List<Estudiante> listarTodos() {
        return repository.findAll();
    }

    public Estudiante buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Estudiante con id " + id + " no encontrado"));
    }

    public Estudiante crear(Estudiante estudiante) {
        estudiante.setId(null);
        return repository.save(estudiante);
    }

    public Estudiante actualizar(Long id, Estudiante datos) {
        Estudiante existente = buscarPorId(id);
        existente.setNombre(datos.getNombre());
        existente.setEdad(datos.getEdad());
        existente.setCarrera(datos.getCarrera());
        existente.setPromedio(datos.getPromedio());
        return repository.save(existente);
    }

    public void eliminar(Long id) {
        Estudiante existente = buscarPorId(id);
        repository.delete(existente);
    }

    public List<Estudiante> filtrarPorCarrera(String carrera) {
        return repository.findByCarreraIgnoreCase(carrera);
    }

    public Double obtenerPromedioGeneral() {
        Double promedio = repository.promedioGeneral();
        return promedio != null ? promedio : 0.0;
    }
}
