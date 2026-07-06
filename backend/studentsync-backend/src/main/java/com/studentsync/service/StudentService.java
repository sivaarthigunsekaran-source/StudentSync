package com.studentsync.service;

import com.studentsync.entity.Student;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    Student saveStudent(@NonNull Student student);

    List<Student> getAllStudents();

    Optional<Student> getStudentById(@NonNull Long id);

    void deleteStudent(@NonNull Long id);
}
