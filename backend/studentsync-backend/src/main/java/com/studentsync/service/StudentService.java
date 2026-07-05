package com.studentsync.service;

import com.studentsync.entity.Student;
import java.util.List;
import java.util.Optional;

public interface StudentService {

    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Optional<Student> getStudentById(Long id);

    void deleteStudent(Long id);
}
