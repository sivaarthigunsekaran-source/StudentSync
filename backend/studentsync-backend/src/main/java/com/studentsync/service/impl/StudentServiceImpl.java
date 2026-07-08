package com.studentsync.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.studentsync.entity.Student;
import com.studentsync.repository.StudentRepository;
import com.studentsync.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Get all students
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Get student by ID
    @Override
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    // Add new student
    @Override
    public Student saveStudent(Student student) {

        if (student.getStudentId() == null || student.getStudentId().isBlank()) {
            student.setStudentId(generateStudentId());
        }

        return studentRepository.save(student);
    }

    // Update student
    @Override
    public Student updateStudent(Long id, Student updatedStudent) {

        return studentRepository.findById(id)
                .map(student -> {

                    student.setName(updatedStudent.getName());
                    student.setEmail(updatedStudent.getEmail());

                    return studentRepository.save(student);

                })
                .orElseThrow(() -> 
                    new RuntimeException("Student not found with id: " + id)
                );
    }

    // Delete student
    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    // Search students
    @Override
    public List<Student> searchStudents(String keyword) {

        return studentRepository
                .findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
                        keyword,
                        keyword
                );
    }


    // Generate Student ID automatically (SA01, SA02, SA03...)
    private String generateStudentId() {

        return studentRepository.findTopByOrderByStudentIdDesc()
                .map(student -> {

                    String lastStudentId = student.getStudentId();

                    if (lastStudentId == null || lastStudentId.isBlank()) {
                        return "SA01";
                    }

                    int number = Integer.parseInt(lastStudentId.substring(2));

                    return String.format("SA%02d", number + 1);

                })
                .orElse("SA01");
    }
}