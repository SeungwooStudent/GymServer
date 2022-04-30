package com.seungwoo.rpsgame.repository;

import com.seungwoo.rpsgame.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, String> {
    @Query("SELECT admin.pwd FROM Admin admin Where admin.id = :id")
    String adminlogin(String id);

//    @Query("insert into admin values(id=:id, pwd=:pwd)")
//    Admin findUserById(String id);


}
