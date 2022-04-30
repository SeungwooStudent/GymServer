package com.seungwoo.rpsgame.service;

import com.seungwoo.rpsgame.entity.User;
import com.seungwoo.rpsgame.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;


    // insert into
    public String signUp(String id, String name, int age, String phoneNumber) {
        if (userRepository.findById(id).isPresent()) {
            return "중복된 회원번호 입니다 다시 시도해주세요";
        } else {
            userRepository.save(User.builder().id(id).name(name).age(age).phoneNumber(phoneNumber).build());
            return "회원가입이 완료되었습니다.";
        }
    }

    // select *s
    public List<User> getUsers() {
        List<User> users = userRepository.findAll();
        return users;
    }

    // delete
    //update,delete를 처리할때 성공?혹은 실패인데 실패시 다시 모든것을 원원래상태로 되돌려는다
    //delete랑 update는 Transactional을 달아줘야한다
    @Transactional
    public String deleteUser(String id) {
        if (!userRepository.findById(id).isPresent()) {
            return "없는 아이디 입니다.";
        }
        int result = userRepository.deleteUserById(id);
        if (result == 1) {
            return "삭제되었습니다.";
        }
        return "삭제시 에러가 발생했습니다. 다시 시도해주세요.";
    }

    // update
    @Transactional
    public String updateUser(String id, String name, int age, String phoneNumber) {
        if (!userRepository.findById(id).isPresent()) {
            return "회원님의 ID를 다시한번 확인해주세요";
        }
        int result = userRepository.updateUserById(id, name, age, phoneNumber);
        if (result == 1) {
            return "변경사항이 수정되었습니다.";
        }
        return "변경사항에 에러가 발생하였습니다";
    }

//    public String adminLogin(String adminId, String adminPwd) {
////        String findbypwd = userRepository.findPasswordById(adminId);
////        if (findbypwd == null) {
////            return "없는 아이디 입니다!";
////        }
////        if (findbypwd.equals(adminPwd)) {
////            return "로그인 성공";
////        }
//        return "비밀번호가 틀렸습니다.";
//    }


    public User searchUser(String id) {
        if (!userRepository.findById(id).isPresent()) {
            return null;
        }
        return userRepository.searchUserById(id);

    }


}