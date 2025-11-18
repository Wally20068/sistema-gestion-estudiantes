package com.examen.estudiantes.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "estudiantes")
public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false, length = 100)
    private String nombre;

    @NotNull(message = "La edad es obligatoria")
    @Min(value = 15, message = "La edad mínima es 15")
    @Max(value = 80, message = "La edad máxima es 80")
    @Column(nullable = false)
    private Integer edad;

    @NotBlank(message = "La carrera es obligatoria")
    @Column(nullable = false, length = 100)
    private String carrera;

    @NotNull(message = "El promedio es obligatorio")
    @DecimalMin(value = "0.0", inclusive = true, message = "El promedio mínimo es 0.0")
    @DecimalMax(value = "10.0", inclusive = true, message = "El promedio máximo es 10.0")
    @Column(nullable = false)
    private Double promedio;

    public Estudiante() {
    }

    public Estudiante(String nombre, Integer edad, String carrera, Double promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getEdad() {
        return edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public Double getPromedio() {
        return promedio;
    }

    public void setPromedio(Double promedio) {
        this.promedio = promedio;
    }
}
