package com.seungwoo.rpsgame.controller;

import com.seungwoo.rpsgame.entity.User;
import com.seungwoo.rpsgame.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Scanner;


@RestController
@RequiredArgsConstructor
@RequestMapping
public class UserController {
    private final UserService userService;

    /*
    1. 회원 등록 (회원번호 생성)
    2. 회원 전체 출력
    3. 회원 수정 (모든 값 입력 받으세요)
    4. 회원 탈퇴 (id 로 조회해서 탈퇴)
    5. 회원 검색 (id 로 검색)
    6. 로그인 (admin 계정으로) - admin 계정은 미리 만들어 둘것.
    기타 필요한거 해보고 싶은거 해보세요. 헬스장이라고 생각하시고.
     */

//    @GetMapping("/seungwoo")
//    public String helloSeungWoo() {
//        return "Hello";
//    }
//
    @GetMapping("/search")
    public User searchUser(@RequestParam("id") String id) {
        return userService.searchUser(id);
    }

    @PostMapping("/signup")
    public String signUp(@RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("age") int age, @RequestParam("phoneNumber") String phoneNumber) {
        return userService.signUp(id, name, age, phoneNumber);
    }

    @PostMapping("/delete")
    public String delete(@RequestParam("id") String id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/update")
    public String update(@RequestParam("id") String id, @RequestParam("name") String name, @RequestParam("age") int age, @RequestParam("phoneNumber") String phoneNumber) {
        return userService.updateUser(id, name, age, phoneNumber);
    }
//
//    @GetMapping("/login")
//    public String login(@RequestParam("adminId") String adminId, @RequestParam("adminPwd") String adminPwd) {
//        System.out.println("admin id : " + adminId);
//        System.out.println("admin pwd : " + adminPwd);
//        return userService.adminLogin(adminId, adminPwd);
//    }
//
//
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }
}
