package com.seungwoo.rpsgame.controller;

import com.seungwoo.rpsgame.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/admin_login")
    public String login(@RequestParam("id") String id, @RequestParam("pwd") String pwd){
        return adminService.adminLogin(id,pwd);
    }

    @PostMapping("/admin_signup")
    public String signUp(@RequestParam("id") String id, @RequestParam("pwd") String pwd) {
        return adminService.adminSignUp(id,pwd);
    }


}
