package com.ecclesiastical;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ViewController {

    @RequestMapping(value = "/admin")
    public String exampleRoot() {
        return "admin";
    }

}
