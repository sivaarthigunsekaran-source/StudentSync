package com.studentsync.service;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;

import com.studentsync.entity.Student;

public interface StudentService {

    Student saveStudent(@NonNull Student student);

    List<Student> getAllStudents();

    Optional<Student> getStudentById(@NonNull Long id);

    Student updateStudent(@NonNull Long id, @NonNull Student student);

    void deleteStudent(@NonNull Long id);

    // Search students by name or email
    List<Student> searchStudents(String keyword);
}