package com.ecclesiastical;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.web.bind.annotation.RestController
public class DeployRestController {

    @RequestMapping("/api/helloworld")
    public String greet() {
        return "Hello from the other side!!!";
    }
}