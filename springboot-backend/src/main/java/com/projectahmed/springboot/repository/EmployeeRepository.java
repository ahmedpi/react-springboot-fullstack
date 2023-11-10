package com.projectahmed.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectahmed.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
