package com.seungwoo.rpsgame.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor //모든 필드값을 파라미터로 받는 생성자
@NoArgsConstructor //파라미터가 없는 기본 생성자
//@Data Get , Set , RequiredArgsConstructor, EqualsAndHashCode 한꺼번에 해줌
public class User {
    @Id
    private String id; //회원번호 예)2204143311 등록일+전화번호뒷자리
    private String name; //이름
    private int age; //나이
    private String phoneNumber; //전화번호
}
