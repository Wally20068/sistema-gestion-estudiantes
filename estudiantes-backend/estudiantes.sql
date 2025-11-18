CREATE DATABASE IF NOT EXISTS estudiantesdb;
USE estudiantesdb;

CREATE TABLE IF NOT EXISTS estudiantes (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre   VARCHAR(100) NOT NULL,
    edad     INT          NOT NULL,
    carrera  VARCHAR(100) NOT NULL,
    promedio DECIMAL(4,2) NOT NULL
);

INSERT INTO estudiantes (nombre, edad, carrera, promedio) VALUES
('Adrian Bravo', 21, 'Software', 8.90),
('Maria Lopez', 20, 'Software', 9.10),
('Juan Perez', 22, 'Civil', 7.50),
('Ana Gomez', 19, 'Software', 8.20);
