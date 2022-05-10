package com.seungwoo.rpsgame.repository;

import com.seungwoo.rpsgame.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {
    //user.id = :id" > user.id(table에 있는 아이디) = :id(내가 입력한 id)
//    @Query("SELECT user FROM User user Where user.id=:id")
//    User findUserById(String id);

    //table에서 id가 같은놈들의 pwd를 가져와라
//    @Query("SELECT user.pwd FROM User user Where user.id=:id")
//    String findPasswordById(String id);


    //table에서 내가 입력한 ID와 db에 있는 ID가
    //삭제
    //delete랑 update에는 Modifying을 달아줘야한다.
    @Modifying
    @Query("DELETE FROM User user Where user.id = :id")
    int deleteUserById(@Param(value = "id") String id);

    //업데이트
    @Modifying
    @Query("UPDATE User user SET name = :name, age = :age, phone_number = :phoneNumber WHERE id = :id")
    int updateUserById(String id, String name, int age, String phoneNumber);

    //검색
    @Query("SELECT user FROM User user Where user.name=:name")
    List<User> searchUserByName(String name);
}
