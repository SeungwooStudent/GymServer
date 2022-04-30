package com.seungwoo.rpsgame.service;

import com.seungwoo.rpsgame.entity.Admin;
import com.seungwoo.rpsgame.entity.User;
import com.seungwoo.rpsgame.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final AdminRepository adminRepository;

    public String adminLogin(String adminId, String adminPwd) {
        String adminlogin = adminRepository.adminlogin(adminId);
        if (adminlogin == null) {
            return "없는 아이디 입니다!";
        }
        if (adminlogin.equals(adminPwd)) {
            return "로그인 성공";
        }
        return "비밀번호가 틀렸습니다.";
    }

    public String adminSignUp(String id, String pwd) {
        if (adminRepository.findById(id).isPresent()) {
            return "중복된 회원번호 입니다 다시 시도해주세요";
        } else {
            adminRepository.save(Admin.builder().id(id).pwd(pwd).build());
            return "회원가입이 완료되었습니다.";
        }
    }

}
