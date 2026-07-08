package com.studentsync.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.NonNull;
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

    // Generate Student ID automatically (STU001, STU002, ...)
    private String generateStudentId() {

        return studentRepository.findTopByOrderByIdDesc()
                .map(student -> {

                    String lastStudentId = student.getStudentId();

                    if (lastStudentId == null || lastStudentId.isEmpty()) {
                        return "STU001";
                    }

                    int number = Integer.parseInt(lastStudentId.substring(3));

                    return String.format("STU%03d", number + 1);
                })
                .orElse("STU001");
    }


    @Override
    public Student saveStudent(@NonNull Student student) {

        if (student.getStudentId() == null || student.getStudentId().isBlank()) {
            student.setStudentId(generateStudentId());
        }

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
    public Student updateStudent(@NonNull Long id, @NonNull Student student) {

        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));


        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setPhone(student.getPhone());
        existingStudent.setDepartment(student.getDepartment());
        existingStudent.setYear(student.getYear());
        existingStudent.setSection(student.getSection());
        existingStudent.setCgpa(student.getCgpa());
        existingStudent.setStatus(student.getStatus());


        return studentRepository.save(existingStudent);
    }


    @Override
    public void deleteStudent(@NonNull Long id) {
        studentRepository.deleteById(id);
    }


    @Override
    public List<Student> searchStudents(String keyword) {

        return studentRepository
                .findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(keyword, keyword);
    }
}