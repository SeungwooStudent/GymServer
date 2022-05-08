package com.seungwoo.rpsgame.controller;

import com.seungwoo.rpsgame.entity.Admin;
import com.seungwoo.rpsgame.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class AdminController {
    private final AdminService adminService;
    @ResponseBody
    @GetMapping("/admin_login")
    @CrossOrigin("*")
    public String login(@RequestParam("id") String id, @RequestParam("pwd") String pwd){
        System.out.println("id  " + id + " , pwd : " + pwd);
        String result = adminService.adminLogin(id,pwd);
        System.out.println("result  : " + result);
        return result;
    }

    @PostMapping("/admin_signup")
    public String signUp(@RequestParam("id") String id, @RequestParam("pwd") String pwd) {
        return adminService.adminSignUp(id,pwd);
    }

    @GetMapping("/adminUsers")
    public List<Admin> getAdmin() {
        return adminService.getAdmin();
    }


}
