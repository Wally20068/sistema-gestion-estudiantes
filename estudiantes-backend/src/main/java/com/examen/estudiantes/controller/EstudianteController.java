package com.examen.estudiantes.controller;

import com.examen.estudiantes.entity.Estudiante;
import com.examen.estudiantes.service.EstudianteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/estudiantes")
@CrossOrigin(origins = "*")
public class EstudianteController {

    private final EstudianteService service;

    public EstudianteController(EstudianteService service) {
        this.service = service;
    }

    // LISTAR / FILTRAR POR CARRERA
    // GET /api/estudiantes          -> todos
    // GET /api/estudiantes?carrera=Software -> filtrado
    @GetMapping
    public ResponseEntity<List<Estudiante>> listar(
            @RequestParam(required = false) String carrera) {

        if (carrera != null && !carrera.isBlank()) {
            return ResponseEntity.ok(service.filtrarPorCarrera(carrera));
        }
        return ResponseEntity.ok(service.listarTodos());
    }

    // BUSCAR POR ID  GET /api/estudiantes/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    // CREAR  POST /api/estudiantes
    @PostMapping
    public ResponseEntity<Estudiante> crear(@Valid @RequestBody Estudiante estudiante) {
        Estudiante creado = service.crear(estudiante);
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }

    // ACTUALIZAR  PUT /api/estudiantes/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Estudiante> actualizar(@PathVariable Long id,
                                                 @Valid @RequestBody Estudiante estudiante) {
        Estudiante actualizado = service.actualizar(id, estudiante);
        return ResponseEntity.ok(actualizado);
    }

    // ELIMINAR  DELETE /api/estudiantes/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        Map<String, String> resp = new HashMap<>();
        resp.put("mensaje", "Estudiante eliminado correctamente");
        return ResponseEntity.ok(resp);
    }

    // ENDPOINT ADICIONAL: PROMEDIO GENERAL
    // GET /api/estudiantes/promedio-general
    @GetMapping("/promedio-general")
    public ResponseEntity<Map<String, Object>> promedioGeneral() {
        Double promedio = service.obtenerPromedioGeneral();
        Map<String, Object> resp = new HashMap<>();
        resp.put("promedioGeneral", promedio);
        return ResponseEntity.ok(resp);
    }
}
