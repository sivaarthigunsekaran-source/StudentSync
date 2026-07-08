package com.studentsync.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentsync.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    // Get student with the highest Student ID
    Optional<Student> findTopByOrderByStudentIdDesc();

    // Search students
    List<Student> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
            String name,
            String email
    );
}