package com.studentsync.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentsync.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    // Used for generating next Student ID
    Optional<Student> findTopByOrderByIdDesc();

    // Search students by name or email
    List<Student> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
            String name,
            String email
    );
}