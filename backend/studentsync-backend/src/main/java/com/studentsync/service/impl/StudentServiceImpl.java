package com.studentsync.service.impl;

import com.studentsync.entity.Student;
import com.studentsync.repository.StudentRepository;
import com.studentsync.service.StudentService;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student saveStudent(@NonNull Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> getStudentById(@NonNull Long id) {
        return studentRepository.findById(id);
    }

    @Override
    public void deleteStudent(@NonNull Long id) {
        studentRepository.deleteById(id);
    }
}
