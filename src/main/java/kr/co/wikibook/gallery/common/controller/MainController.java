package kr.co.wikibook.gallery.common.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/v1")

public class MainController {

    @GetMapping("/api/greeting")
    public String greet() {
        return "Hello Spring";
    }
    
}
